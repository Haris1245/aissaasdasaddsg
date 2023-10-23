import {auth, currentUser} from "@clerk/nextjs"
import { NextResponse } from "next/server"
import prismadb from "@/lib/prismadb"
import { stripe } from "@/lib/stripe"
import { absoluteUrl } from "@/lib/utils"

const settingsUrl = absoluteUrl("/settings")
export const maxDuration = 300;

export async function GET() {
    try{
        const {userId} = auth()
        const user = await currentUser();
        if (!userId || !user) {
            return new NextResponse("Unathorized", {status: 401})
        }
        const userSubscription = await prismadb.userSubscription.findUnique({
            where: {
                userId
            }
        }) 
        if (userSubscription && userSubscription.stripeCustomerId) {
            const stripeSession  = await stripe.billingPortal.sessions.create({
                customer: userSubscription.stripeCustomerId,
                return_url: settingsUrl,
            })
            return new NextResponse(JSON.stringify({url: stripeSession.url}))
        }

        const stripeSession = await stripe.checkout.sessions.create({
           success_url: settingsUrl,
            cancel_url: settingsUrl,
            payment_method_types: ['card', 'paypal'],
            mode: "subscription",
            billing_address_collection: "auto",
            customer_email: user.emailAddresses[0].emailAddress,
            line_items: [
                {
                  price_data : {
                    currency: "USD",
                    product_data: {
                    name: "WinnerAI Pro",
                    description: "Unlimited uses of WinnerAI models"
                    },
                    unit_amount: 899,
                    recurring: {
                        interval: "month"
                    }
                  } ,
                  quantity: 1
                },
            ],
            metadata: {
                userId,
            }
        })
return new NextResponse(JSON.stringify({url: stripeSession.url}))
    }
    catch(error){
        console.log("[STRIPE ERROR]", error)
        return new NextResponse("Internal Error", {status: 500})
    }
}
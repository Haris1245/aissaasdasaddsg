import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import Replicate from "replicate"
import { increaseApiLimit, checkApiLimit } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN!,
})
export const maxDuration = 5;
export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;


    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!prompt) {
      return new NextResponse('Prompt is required', { status: 400 });
    }
    const freeTrial = await checkApiLimit()
    const isPro = await checkSubscription()

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired", {status: 403})
    }

    const response = await replicate.run(
        "hilongjw/sdxl-v1:84773f63dcb13633bd906b48b989d3026c33fd4946c2cb6779fecfefd2c97e1f",
        {
          input: {
            prompt: `In the style of TOK,${prompt}`,

          }
        }
      );
      
      if(!isPro){
        await increaseApiLimit()
  }

  return NextResponse.json(await response)
;
  } catch (error) {
    console.error('[VIDEO ERROR]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}


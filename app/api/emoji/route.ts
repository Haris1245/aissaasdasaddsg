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
        "fofr/sdxl-emoji:dee76b5afde21b0f01ed7925f0665b7e879c50ee718c5f78a9d38e04d523cc5e",
        {
          input: {
            prompt: `A TOK emoji of${prompt}`,

          }
        }
      );
      
      if(!isPro){
        await increaseApiLimit()
  }

  return NextResponse.json(await response)
;
  } catch (error) {
    console.error('[EMOJI ERROR]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}


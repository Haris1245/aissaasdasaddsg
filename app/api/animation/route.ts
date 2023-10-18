import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import Replicate from "replicate"
import { increaseApiLimit, checkApiLimit } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';
const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN!,
})

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
        "zsxkib/animate-diff:5feed37289b3e23f46e103b778b7acd64e69ecac1d89347e131c642fbfd3eaef",
        {
          input: {
            prompt
          }
        }
      );
      if(!isPro){
      await increaseApiLimit()
}
  return NextResponse.json(await response)
;
  } catch (error) {
    console.error('[CONSULTANT ERROR]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}


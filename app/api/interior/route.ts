import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import Replicate from "replicate"

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

    const response = await replicate.run(
        "adventurepizza/minimalist-design:0928373f4d7748a075b7ed4439c8ac818c58d9117a8cb2874220e349cf7ff9d9",
        {
          input: {
            prompt: `In the style of TOK,${prompt}`,

          }
        }
      );
      

  return NextResponse.json(await response)
;
  } catch (error) {
    console.error('[VIDEO ERROR]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}


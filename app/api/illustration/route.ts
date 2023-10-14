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
        "mrharispe/visual-library:5fe3b578e7f86102fba0e441f3d5690999b823962cdc5c5c1b2600feb6ba0a8c",
        {
          input: {
            prompt: `In the colors and style of TOK,${prompt}`,


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


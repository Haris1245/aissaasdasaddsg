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
        "nandycc/sdxl-app-icons:5839ce85291601c6af252443a642a1cbd12eea8c83e41f27946b9212ff845dbf",
        {
          input: {
            prompt,


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


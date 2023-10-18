"use client";
import { FerrisWheel, Figma, Image, MessageSquare, Video } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useAuth } from "@clerk/nextjs";
const aitools = [
  {
    icon: MessageSquare,
    name: "Text Generation",
    description: "ChatBot, Copywriting, Programming and Music Lyric Writer",
  },
  {
    icon: Image,
    name: "Image Generation",
    description: "Stable Diffusion and normal Image Generation with AI",
  },
  {
    icon: Video,
    name: "Video Generation",
    description: "Video and Animation Generation with AI",
  },
  {
    icon: Figma,
    name: "AI design",
    description: "Interior,Web,Graphic and Illustration Design",
  },
  {
    icon: FerrisWheel,
    name: "Fun Stuff",
    description: "Emoji generation and more",
  },
];

const LandingContent = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center mb-10 font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-amber-400 via-orange-600 to-red-500">
        15 AI Tools
      </h2>
      <div className=" grid xl:grid-cols-1  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 justify-center">
        {aitools.map((tool) => (
          <Card
            key={tool.description}
            className="hover:shadow-xl hover:shadow-[#333333] bg-[#1d1f22] border-none text-white "
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg ">{tool.name}</p>
                  <tool.icon className="h-8 w-8  " />
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0 break-words">
                {tool.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
      <h1 className="text-6xl font-bold text-white text-center mt-[200px] mb-[30px]">
        Designed for{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-red-700 to-orange-600">
          You
        </span>
      </h1>
      <div className="h-full w-full bg-transparent p-10 mb-[100px]">
        <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto gap-4 sm:gap-0">
          <div className="w-full p-6 bg-[#1e2021] border border-[#212122] shdow-lg shadow-[#2e2e30] rounded-lg sm:w-1/2 bg-opacity-20 sm:rounded-r-none sm:p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold jakarta text-gray-100 sm:text-4xl">
                Free Plan
              </h3>
            </div>
            <div className="mb-4 space-x-2">
              <span className="text-4xl font-bold text-gray-100">$0/mo</span>
            </div>
            <ul className="mb-6 space-y-2 text-gray-300">
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="">5 Uses of all the tools</span>
              </li>
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="">Join our Discord Server</span>
              </li>
            </ul>
            <a
              href={isSignedIn ? "/dashboard" : "/sign-up"}
              className="block px-8 py-3 text-sm font-semibold text-center text-gray-100 transition duration-100 bg-white rounded-lg outline-none bg-opacity-10 hover:bg-opacity-20 md:text-base"
            >
              Get Started for Free
            </a>
          </div>

          <div className="break-words w-full p-6 rounded-3xl  sm:w-1/2 bg-gradient-to-br from-yellow-500 via-red-600 to-orange-600 sm:p-8">
            <div className="flex flex-col items-start justify-between gap-4 mb-6 lg:flex-row">
              <div>
                <h3 className="text-2xl font-semibold text-white jakarta sm:text-4xl">
                  Pro Plan
                </h3>
              </div>
              <span className="order-first inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-black rounded-full lg:order-none bg-opacity-20">
                Go Pro
              </span>
            </div>
            <div className="mb-4 space-x-2">
              <span className="text-4xl font-bold text-white">$8.9/mo</span>
              <span className="text-2xl text-indigo-100 line-through">
                $12/mo
              </span>
            </div>
            <ul className="mb-6 space-y-2 text-indigo-100">
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="">Unlimited uses of the AI tools</span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                    className=""
                  ></path>
                </svg>
                <span className="">Join the Discord Server</span>
              </li>
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="">Become an Affiliate</span>
              </li>
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="">Suggest Features</span>
              </li>
            </ul>
            <a
              href={isSignedIn ? "/dashboard" : "/sign-up"}
              className="block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-white rounded-lg outline-none bg-opacity-20 hover:bg-opacity-30 md:text-base"
            >
              Get Started for Free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingContent;

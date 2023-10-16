"use client";
import {
  FerrisWheel,
  Figma,
  FileType,
  Image,
  MessageSquare,
  Video,
} from "lucide-react";
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
      <h2 className="text-center mb-10 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-amber-400 via-orange-600 to-red-500">
        15 AI Tools
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {aitools.map((tool) => (
          <Card
            key={tool.description}
            className="bg-[#1d1f22] border-none text-white"
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
      <section className="bg-[#121313] dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">
              Designed for{" "}
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                You
              </strong>
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Here at WinnerAI we are revolutionizing AI technology forever.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-[#1d1f22] rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Noobie</h3>
              <p className="font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                Best option for personal use & for your next project.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">Free</span>
              </div>

              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>5 of our AI tools for your use</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>No setup, or hidden fees</span>
                </li>

                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <span className="font-normal">
                      Access to our dicord server
                    </span>
                  </span>
                </li>
              </ul>
              <div>
                <a
                  href={isSignedIn ? "/dashboard" : "/sign-up"}
                  className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-xl"
                >
                  <span className="w-full h-full bg-gradient-to-br from-amber-400 via-orange-600 to-red-600 group-hover:from-red-600 group-hover:via-[#ff7708] group-hover:to-orange-600 absolute"></span>
                  <span className="relative px-6 py-3 transition-all ease-out bg-[#1d1f22] rounded-lg group-hover:bg-opacity-0 duration-400">
                    <span className="relative text-white">Get Started</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="flex flex-col p-6 mx-auto max-w-lg text-center   text-white bg-[#1d1f22] rounded-lg border border-gray-100  shadow-[0_10px_100px_rgba(255,_255,_255,_0.7)]  dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white ">
              <h3 className="mb-4 text-2xl font-semibold">Intermidiate</h3>
              <p className="font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                Relevant for multiple users, extended & premium support.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">$5</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>

              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>10 of our AI tools for your use</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>No setup, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <span className="font-normal">
                      Access to our discord server
                    </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <span className="font-normal">Become an Affiliate</span>
                  </span>
                </li>
              </ul>
              <div>
                <a
                  href={isSignedIn ? "/dashboard" : "/sign-up"}
                  className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-xl"
                >
                  <span className="w-full h-full bg-gradient-to-br from-amber-400 via-orange-600 to-red-600 group-hover:from-red-600 group-hover:via-[#ff7708] group-hover:to-orange-600 absolute"></span>
                  <span className="relative px-6 py-3 transition-all ease-out bg-[#1d1f22] rounded-lg group-hover:bg-opacity-0 duration-400">
                    <span className="relative text-white">Get Started</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-[#1d1f22] rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">AI Expert</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Best for large scale uses and extended redistribution rights.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">$10</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>

              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>All of our AI tools for your use</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>No setup, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <span className="font-normal">
                      Access to our discord server
                    </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <span className="font-normal">Become an Affiliate</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <span className="font-normal">Join the AI revolution</span>
                  </span>
                </li>
              </ul>
              <div>
                <a
                  href={isSignedIn ? "/dashboard" : "/sign-up"}
                  className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-xl"
                >
                  <span className="w-full h-full bg-gradient-to-br from-amber-400 via-orange-600 to-red-600 group-hover:from-red-600 group-hover:via-[#ff7708] group-hover:to-orange-600 absolute"></span>
                  <span className="relative px-6 py-3 transition-all ease-out bg-[#1d1f22] rounded-lg group-hover:bg-opacity-0 duration-400">
                    <span className="relative text-white">Get Started</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingContent;

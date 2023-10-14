"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypeWriterComponent from "typewriter-effect";
import { Button } from "./ui/button";
const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tools for</h1>
        <div className=" text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500  to-orange-400 visible">
          <TypeWriterComponent
            options={{
              strings: [
                "Chatbot",
                "Business Consulant",
                "Code Generation",
                "Music Lyric Generation",
                "Image Generation",
                "Video and Animation Generation",
                "Music Generation",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400 ">
        Automate your life and business with WinnerAI
      </div>
      <div>
        <a
          href={isSignedIn ? "/dashboard" : "/sign-up"}
          className=" relative inline-flex items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-2xl shadow-2xl group  w-30 h-10 shadow-inherit"
        >
          <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-amber-400 rounded-2xl blur-md ease "></span>
          <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
            <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-red-600 rounded-full blur-md "></span>
            <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-orange-600 rounded-full blur-md "></span>
          </span>
          <span className="relative text-white">Get started</span>
        </a>
      </div>
    </div>
  );
};

export default LandingHero;

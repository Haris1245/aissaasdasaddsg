"use client";
import { useAuth } from "@clerk/nextjs";
import TypeWriterComponent from "typewriter-effect";

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
          className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-xl"
        >
          <span className="w-full h-full bg-gradient-to-br from-amber-400 via-orange-600 to-red-600 group-hover:from-red-600 group-hover:via-[#ff7708] group-hover:to-orange-600 absolute"></span>
          <span className="relative px-6 py-3 transition-all ease-out bg-[#121313] rounded-lg group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white">Get Started</span>
          </span>
        </a>
        <a
          href="https://winnerai.beehiiv.com/subscribe"
          target="_blank"
          className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-xl ml-4"
        >

          <span className="w-full h-full bg-gradient-to-br from-amber-400 via-orange-600 to-red-600 group-hover:from-red-600 group-hover:via-[#ff7708] group-hover:to-orange-600 absolute"></span>
          <span className="relative px-6 py-3 transition-all ease-out bg-[#121313] rounded-lg group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white">NewsLetter</span>
          </span>
        </a>
      </div>
      <div className="text-zinc-400 text-xs md:tetx-sm font-normal">
        No Credit Card Required
      </div>
    </div>
  );
};

export default LandingHero;

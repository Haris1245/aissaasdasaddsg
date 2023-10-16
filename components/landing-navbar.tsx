"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export const LandingNavBar = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between w-full ">
      <Link href="/" className="flex items-center">
        <div className="relative h-10 w-full mr-4 max-w-[365px]">
          <img
            className="lg:w-[365px] lg:h-[41px] sm:w-[300px] sm:h-[50px] md:w-[300px] md:h-[35px] h-[30px] w-[650px]"
            alt="logo"
            src="/fdgfdgs.svg"
          />
        </div>
      </Link>
      <div className="flex items-center gap-x-2 ">
        <a
          href={isSignedIn ? "/dashboard" : "/sign-in"}
          className="inline-flex items-center px-6 py-3 text-gray-400 bg-transparent rounded-md text-sm hover:text-white"
        >
          Log In
        </a>
        <a
          href={isSignedIn ? "/dashboard" : "/sign-up"}
          className=" relative inline-flex items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-2xl shadow-2xl group  w-30 h-10 shadow-inherit sm:h-15 "
        >
          <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-amber-400 rounded-2xl blur-md ease "></span>
          <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-[-180deg] ease">
            <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-orange-600 rounded-full blur-md "></span>
            <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-red-600 rounded-full blur-md "></span>
          </span>
          <span className="relative text-white">Get started</span>
        </a>
      </div>
    </nav>
  );
};

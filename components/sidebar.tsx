"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
  PenLine,
  FileVideo,
  Home,
  Frame,
  VenetianMask,
  Layout,
  PenTool,
  Bot,
  Music2,
} from "lucide-react";
import { FreeCounter } from "@/components/free-counter";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });
const routes = [
  {
    label: "Winner",
    icon: Bot,
    href: "/winner",
    color: "text-cyan-400",
    price: "Free"
  },
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-cyan-500",
  },
  {
    label: "Consultant",
    icon: MessageSquare,
    href: "/consultant",
    color: "text-violet-500",
  },
  {
    label: "Coder",
    icon: Code,
    href: "/coder",
    color: "text-green-700",
  },
  {
    label: "CopyWriting",
    icon: PenLine,
    href: "/copywrite",
    color: "text-yellow-500",
  },
  {
    label: "Music Lyrics",
    icon: Music2,
    href: "/lyrics",
    color: "text-orange-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },

  {
    label: "Interior",
    icon: Home,
    href: "/interior",
    color: "text-emerald-300",
  },
  {
    label: "Graphic Design",
    icon: Frame,
    href: "/graphic-design",
    color: "text-sky-300",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Animation Generation",
    icon: FileVideo,
    href: "/animation",
    color: "text-lime-500",
  },

  {
    label: "Emoji Generation",
    icon: VenetianMask,
    href: "/emoji",
    color: "text-red-500",
  },
  {
    label: "Web Design",
    icon: Layout,
    href: "/web-design",
    color: "text-teal-400",
  },
  {
    label: "Illustration",
    icon: PenTool,
    href: "/illustration",
    color: "text-indigo-800",
  },
  {
    label: "Stable Diffusion",
    icon: ImageIcon,
    href: "/stable",
    color: "text-violet-800",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

interface SidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const SideBar = ({ apiLimitCount = 0 ,isPro = false}: SidebarProps) => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#121212] text-white overflow-scroll">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative mr-4">
            <img alt="refresh" src="big-logo.svg" width={500} height={500} />
          </div>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-between font-medium cursor-pointer hover:tetx-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10 "
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
              <h2 className=" text-white">{route.price}</h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="to">
        <FreeCounter isPro ={isPro} apiLimitCount={apiLimitCount} />
      </div>
    </div>
  );
};

export default SideBar;

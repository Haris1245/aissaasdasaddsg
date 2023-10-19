"use client";

import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideBar from "@/components/sidebar";
import { useState, useEffect } from "react";

interface MobileSideBarProps {
  apiLimitCount: number
  isPro: boolean
}


const MobileSidebar = ({apiLimitCount =0, isPro=false}: MobileSideBarProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="md:hidden" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <SideBar apiLimitCount={apiLimitCount} isPro={isPro}/>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;

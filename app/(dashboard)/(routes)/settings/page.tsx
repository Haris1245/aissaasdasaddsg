"use client";

import { useRouter } from "next/navigation";

import Heading from "@/components/heading";
import { Settings } from "lucide-react";

const SettingsPage = () => {
  const router = useRouter();

  return (
    <Heading
      title="Settings"
      description="Settings"
      icon={Settings}
      iconColor="text-gray-700"
    />
  );
};

export default SettingsPage;

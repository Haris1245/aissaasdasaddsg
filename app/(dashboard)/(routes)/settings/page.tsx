"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import OpenAI from "openai";
import { cn } from "@/lib/utils";
import { formSchema } from "./constants";
import ReactMarkdown from "react-markdown";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Code, Settings } from "lucide-react";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import Heading from "@/components/heading";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";

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

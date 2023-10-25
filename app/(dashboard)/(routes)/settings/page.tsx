"use client"

import Heading from "@/components/heading";
import { Settings, Zap } from "lucide-react";
import {checkSubscription} from "@/lib/subscription"
import SubscriptionButton from "@/components/subscription-button";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
const SettingsPage =async () => {
  const [loading, setLoading] = useState(false)

  const isPro = await checkSubscription();
  const onSubscribe = async () => {
    try{
      setLoading(true)
      const response = await axios.get("/api/stripe");
  
      window.location.href =  response.data.url;
    }
  catch(error){
  
      toast.error("Something went wrong!")
    
  }
  finally{
    setLoading(false)
  }
  }
  return (
    <div>
      <Heading
        title="Settings"
        description="Settings"
        icon={Settings}
        iconColor="text-gray-700"
      />
      <div className="px-4 lg-px-8 space-y-4 ml-10">
        <div className="text-muted-foreground text-sm">
          {isPro ? "You are currently on a Pro plan." : "You are currently on a free plan"}
        </div>
        <Button  disabled={loading} size="lg" variant="premium" className="w-20 " onClick={onSubscribe}>
            Go Pro <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        <div className="block">
          {isPro ? <a href="https://discord.gg/2tP4wsHF27" className="ml-0.5 font-extrabold"><Button  className="bg-orange-500 hover:bg-orange-800">DISCORD SERVER</Button></a> : <h1 className="text-black font-bold">DISCORD_SERVER - Pro Plan</h1>}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

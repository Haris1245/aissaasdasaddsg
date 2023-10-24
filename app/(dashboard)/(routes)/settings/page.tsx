

import Heading from "@/components/heading";
import { Settings } from "lucide-react";
import {checkSubscription} from "@/lib/subscription"
import SubscriptionButton from "@/components/subscription-button";
import { Button } from "@/components/ui/button";
const SettingsPage =async () => {
  const isPro = await checkSubscription();
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
       <a href={isPro ? "https://billing.stripe.com/p/login/fZe1771HQafF2cMaEE" : ""}><SubscriptionButton isPro={isPro}/></a>
        <div className="block">
          {isPro ? <a href="https://discord.gg/2tP4wsHF27" className="ml-0.5 font-extrabold"><Button  className="bg-orange-500 hover:bg-orange-800">DISCORD SERVER</Button></a> : <h1 className="text-black font-bold">DISCORD_SERVER - Pro Plan</h1>}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

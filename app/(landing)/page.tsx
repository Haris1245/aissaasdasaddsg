import LandingContent from "@/components/landing-content";
import LandingFooter from "@/components/landing-footer";
import LandingHero from "@/components/landing-hero";
import { LandingNavBar } from "@/components/landing-navbar";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavBar />
      <LandingHero />
      <LandingContent />

      <LandingFooter />
    </div>
  );
};

export default LandingPage;

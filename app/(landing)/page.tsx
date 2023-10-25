import LandingContent from "@/components/landing-content";
import LandingFooter from "@/components/landing-footer";
import LandingHero from "@/components/landing-hero";
import { LandingNavBar } from "@/components/landing-navbar";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavBar />
      <a href="https://www.producthunt.com/posts/winnerai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-winnerai" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=421787&theme=light" alt="WinnerAI - WinnerAI&#0032;is&#0032;an&#0032;all&#0032;in&#0032;one&#0032;AI&#0032;model&#0032;platform | Product Hunt" className="w-[250px] h-[54px] block m-auto"  /></a>
      <LandingHero />
      <LandingContent />
      <iframe className="border-0 block m-auto" src="https://cards.producthunt.com/cards/posts/421787?v=1" width="500" height="405"  ></iframe>
      <LandingFooter />
    </div>
  );
};

export default LandingPage;

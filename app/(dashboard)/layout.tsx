import NavBar from "@/components/navbar";
import SideBar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription()
  return (
    <div className="h-full relative overflow-scroll">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y0  bg-[#121212]">
        <div className="text-white">
          <SideBar apiLimitCount={apiLimitCount} isPro={isPro}/>
        </div>
      </div>
      <main className="md:pl-72 ">
        <NavBar />
        {children}
      </main>
    </div>
  );
};
export default DashboardLayout;

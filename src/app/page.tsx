import Navbar from "@/components/Navbar";
import BeautyHero from "@/components/Beauty/beauty";
import StatementSection from "@/components/Statment/statment";
import BlackStats from "@/components/Black/black";
import LooksSection from "@/components/Looks/looks";
import BeautyVideoHero from "@/components/Video/video";
import TrustedBy from "@/components/Trustedby/trusted";
import FindNearest from "@/components/Findyour/find";
import WhyScent from "@/components/why/why";
import PowerTeam from "@/components/Thepower/thepower";
import InspirationSection from "@/components/Inspiration/inspiration";
import TransformationStories from "@/components/Transforming/tran";
import Footer from "@/components/Last/last";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7f7] text-[#1e1e1e]">
      <Navbar />
      <BeautyHero />
      <main className="flex w-full flex-1 flex-col gap-0 py-0">
        <StatementSection />
        <BlackStats />
        <LooksSection />
        <BeautyVideoHero />
        <TrustedBy />
        <FindNearest />
        <WhyScent />
        <PowerTeam />
        <InspirationSection />
        <TransformationStories />
      </main>
      <Footer />
    </div>
  );
}

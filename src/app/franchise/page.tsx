import Navbar from "@/components/Navbar";
import FranchiseSection from "@/components/Franchise/franchise";
import PowerTeam from "@/components/Thepower/thepower";
import Footer from "@/components/Last/last";

export default function FranchisePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7f7] text-[#1e1e1e]">
      <Navbar />
      <main className="flex w-full flex-1 flex-col gap-0 py-0">
        <FranchiseSection />
        <PowerTeam />
      </main>
      <Footer />
    </div>
  );
}


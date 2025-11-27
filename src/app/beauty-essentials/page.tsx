import Navbar from "@/components/Navbar";
import Footer from "@/components/Last/last";
import BeautyEssentialsExperience from "@/components/beauty-essentials/beauty-essentials";

export default function BeautyEssentialsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1f1f2e]">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <BeautyEssentialsExperience />
      </main>
      <Footer />
    </div>
  );
}


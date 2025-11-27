import Navbar from "@/components/Navbar";
import Footer from "@/components/Last/last";
import LashesExperience from "@/components/lashes/lashes";

export default function LashesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1f1f2e]">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <LashesExperience />
      </main>
      <Footer />
    </div>
  );
}


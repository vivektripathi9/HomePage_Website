import Navbar from "@/components/Navbar";
import Footer from "@/components/Last/last";
import BridalExperience from "@/components/bridal/bridalm";

export default function BridalPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fef9fb] text-[#1f1f2e]">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <BridalExperience />
      </main>
      <Footer />
    </div>
  );
}


import Navbar from "@/components/Navbar";
import Footer from "@/components/Last/last";
import FacialExperience from "@/components/facial/facial";

export default function FacialPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1f1f2e]">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <FacialExperience />
      </main>
      <Footer />
    </div>
  );
}


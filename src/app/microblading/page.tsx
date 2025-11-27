import Navbar from "@/components/Navbar";
import Footer from "@/components/Last/last";
import MicrobladingExperience from "@/components/microblading/microblading";

export default function MicrobladingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1f1f2e]">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <MicrobladingExperience />
      </main>
      <Footer />
    </div>
  );
}


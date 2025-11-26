import Navbar from "@/components/Navbar";
import Footer from "@/components/Last/last";
import SpaSection from "@/components/spa/spa";

export default function SpaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1e1e1e]">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <SpaSection />
      </main>
      <Footer />
    </div>
  );
}



import Navbar from "@/components/Navbar";
import Footer from "@/components/Last/last";
import NailCouture from "@/components/nails/nail";

export default function NailsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1f1f2e]">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <NailCouture />
      </main>
      <Footer />
    </div>
  );
}


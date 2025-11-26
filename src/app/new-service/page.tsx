import Navbar from "@/components/Navbar";
import Footer from "@/components/Last/last";
import NewServicesShowcase from "@/components/new_service/new_s";

export default function NewServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7f7] text-[#1f1f2e]">
      <Navbar />
      <main className="flex w-full flex-1 flex-col">
        <NewServicesShowcase />
      </main>
      <Footer />
    </div>
  );
}


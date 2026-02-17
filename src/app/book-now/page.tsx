import Navbar from "@/components/Navbar";
import BookNowSection from "@/components/BookNow/BookNow";
import Footer from "@/components/Last/last";

export default function BookNowPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7f7] text-[#1e1e1e]">
      <Navbar />
      <main className="flex w-full flex-1 flex-col">
        <BookNowSection />
      </main>
      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Last/last";
import NewServicesShowcase from "@/components/new_service/new_s";
import { Montserrat } from "next/font/google";

const montserratLight = Montserrat({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-montserrat-light",
});

export default function NewServicePage() {
  return (
    <div className={`${montserratLight.variable} flex min-h-screen flex-col bg-[#f7f7f7] text-[#1f1f2e]`} style={{ fontFamily: 'var(--font-montserrat-light), "Montserrat", sans-serif' }}>
      <Navbar />
      <main className="flex w-full flex-1 flex-col">
        <NewServicesShowcase />
      </main>
      <Footer />
    </div>
  );
}


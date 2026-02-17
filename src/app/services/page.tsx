import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/Services/ser";
import Footer from "@/components/Last/last";
import { Montserrat } from "next/font/google";

const montserratLight = Montserrat({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-montserrat-light",
});

export default function ServicesPage() {
  return (
    <div className={`${montserratLight.variable} flex min-h-screen flex-col bg-[#f7f7f7] text-[#1e1e1e]`} style={{ fontFamily: 'var(--font-montserrat-light), "Montserrat", sans-serif' }}>
      <Navbar />
      <main className="flex w-full flex-1 flex-col gap-0 py-0">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}


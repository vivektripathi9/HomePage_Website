import Navbar from "@/components/Navbar";
import SalonMembershipsSection from "@/components/SalonMemberships/memberships";
import Footer from "@/components/Last/last";

export default function SalonMembershipsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7f7] text-[#1e1e1e]">
      <Navbar />
      <main className="flex w-full flex-1 flex-col gap-0 py-0">
        <SalonMembershipsSection />
      </main>
      <Footer />
    </div>
  );
}


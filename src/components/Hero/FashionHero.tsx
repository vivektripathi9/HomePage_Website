"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import heroImage from "./onehpcorpodslidinghero5760x2520pxjpg_2520x5760.jpg";

export default function FashionHero() {
  const router = useRouter();

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="SCENT Salon Hero"
        fill
        className="object-cover object-center"
        priority
        quality={90}
        sizes="100vw"
      />

      {/* Button only - no text overlay */}
      <div className="absolute inset-0 flex items-end justify-center z-10 px-4">
        <div className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 flex justify-center w-full">
          <button
            onClick={() => router.push("/book-now")}
            className="bg-white px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-medium uppercase tracking-wider text-black transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-lg rounded"
          >
            Book appointment
          </button>
        </div>
      </div>
    </section>
  );
}

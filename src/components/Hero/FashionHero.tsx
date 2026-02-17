"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import heroImage from "./onehpcorpodslidinghero5760x2520pxjpg_2520x5760.jpg";

export default function FashionHero() {
  const router = useRouter();

  return (
    <section className="relative w-full h-screen overflow-hidden">
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
      <div className="absolute inset-0 flex items-end justify-center z-10">
        <div className="pb-20">
          <button
            onClick={() => router.push("/book-now")}
            className="bg-white px-8 py-3 text-sm font-medium uppercase tracking-wider text-black transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-lg rounded"
          >
            Book appointment
          </button>
        </div>
      </div>
    </section>
  );
}

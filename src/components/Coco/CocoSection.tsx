"use client";

import Image from "next/image";
import { useState } from "react";
import bannerImage from "./Banner (2).png";

export default function CocoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-screen aspect-[2048/662] overflow-hidden bg-white" style={{ width: '100vw', maxWidth: 'none' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bannerImage}
          alt="Coco Crush "
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Button positioned bottom right */}
      <div className="relative z-10 flex h-full w-full items-end justify-end">
        <div className="pb-6 pr-6 sm:pb-8 sm:pr-8 md:pb-10 md:pr-10">
          {/* Book Appointment Button */}
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                const event = new CustomEvent("openBookAppointment", { detail: { service: "" } });
                window.dispatchEvent(event);
              }
            }}
            className="bg-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 text-[10px] sm:text-xs md:text-sm font-light uppercase tracking-[0.1em] text-black transition-all duration-300 hover:bg-gray-50 hover:scale-105"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif', letterSpacing: "0.1em", fontWeight: 300 }}
          >
            book appointment
          </button>
        </div>
      </div>
    </section>
  );
}

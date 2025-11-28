"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const salons = [
  "/A1.png",
  "/A2.png",
  "/A3.png",
  "/A4.png",
  "/A5.png",
];

export default function FindNearest() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rotating (prevents hydration mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Rotate images automatically every 3 seconds (only after mount)
  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % salons.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [mounted]);

  // Get rotated array of images based on current index
  // Always use original order on server to prevent hydration mismatch
  const rotatedSalons = mounted 
    ? [...salons.slice(currentIndex), ...salons.slice(0, currentIndex)]
    : salons;

  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="flex w-full flex-col items-center gap-3 sm:gap-4 px-4 sm:px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-[42px] font-semibold leading-tight text-[#1f1f2e]" style={{ fontFamily: "serif" }}>
          Find Your Nearest SCENT
        </h2>
        <div className="flex items-center justify-center gap-3 sm:gap-4 text-gray-300">
          <span className="h-px w-10 sm:w-12 bg-black" />
          <span className="text-pink-400 text-lg sm:text-xl">❀</span>
          <span className="h-px w-10 sm:w-12 bg-black" />
        </div>
        <p className="max-w-3xl text-xs sm:text-sm md:text-base text-gray-500 px-2">
          Step into a space where beauty meets expertise — your perfect experience is closer than you think.
        </p>

        <div className="grid w-full gap-4 sm:gap-6">
          {/* First Row: 3 images */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {rotatedSalons.slice(0, 3).map((image, index) => (
              <div
                key={`salon-${mounted ? currentIndex : 0}-${index}`}
                className="relative h-48 sm:h-64 md:h-80 overflow-hidden rounded-lg shadow-[0px_25px_70px_rgba(0,0,0,0.1)] transition-all duration-700 ease-in-out hover:scale-105"
              >
                <Image
                  src={image}
                  alt={`SCENT location ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-all duration-700 ease-in-out hover:scale-110"
                  loading={index < 3 ? "eager" : "lazy"}
                  quality={85}
                />
              </div>
            ))}
          </div>
          {/* Second Row: 2 images (centered, same size as first row) */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-center">
            {rotatedSalons.slice(3, 5).map((image, index) => (
              <div
                key={`salon-${mounted ? currentIndex : 0}-${index + 3}`}
                className="relative w-full h-48 sm:h-64 md:h-80 overflow-hidden rounded-lg shadow-[0px_25px_70px_rgba(0,0,0,0.1)] transition-all duration-700 ease-in-out hover:scale-105 md:w-1/3"
              >
                <Image
                  src={image}
                  alt={`SCENT location ${index + 4}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-all duration-700 ease-in-out hover:scale-110"
                  loading="lazy"
                  quality={85}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

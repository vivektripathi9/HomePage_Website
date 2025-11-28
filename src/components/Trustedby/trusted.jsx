"use client";

import Image from "next/image";
import { useState } from "react";

const brands = [
  { name: "OLAPLEX", logo: "/cas.png" },
  { name: "CASMARA", logo: "/cass.png" },
  { name: "ESTÉE LAUDER", logo: "/B3.png" },
  { name: "Beauty Garage", logo: "/cas.png" },
  { name: "KÉRASTASE", logo: "/cass.png" },
];

const brandsToShow = 5;

export default function TrustedBy() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return brands.length - 1;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= brands.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  // Create a circular array to show brands
  const getVisibleBrands = () => {
    const result = [];
    for (let i = 0; i < brandsToShow; i++) {
      const index = (currentIndex + i) % brands.length;
      result.push(brands[index]);
    }
    return result;
  };

  const visibleBrands = getVisibleBrands();

  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="flex w-full flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6 md:px-12 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-[42px] font-semibold leading-tight text-[#1f1f2e]" style={{ fontFamily: "serif" }}>Trusted by the Best</h2>
        <div className="flex items-center justify-center gap-3 sm:gap-4 text-center text-gray-300">
          <span className="h-px w-10 sm:w-12 bg-black" />
          <span className="text-pink-400 text-lg sm:text-xl">❀</span>
          <span className="h-px w-10 sm:w-12 bg-black" />
        </div>
        <div className="relative mt-2 sm:mt-4 flex w-full items-center justify-center overflow-hidden">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous brand"
            className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center text-xl sm:text-2xl font-light text-black transition-opacity hover:opacity-70 -mr-2 sm:-mr-4 z-10 bg-white/80 sm:bg-transparent"
          >
            ‹
          </button>
          <div className="flex items-center justify-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide">
            {visibleBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${currentIndex}-${index}`}
                className="flex items-center justify-center px-1 sm:px-2 flex-shrink-0"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={200}
                  height={100}
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next brand"
            className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center text-xl sm:text-2xl font-light text-black transition-opacity hover:opacity-70 -ml-2 sm:-ml-4 z-10 bg-white/80 sm:bg-transparent"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

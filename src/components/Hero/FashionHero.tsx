"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FashionHero() {
  const router = useRouter();

  return (
    <section
      className="relative w-full overflow-hidden lg:aspect-[1920/600]"
      style={{ width: "100%", maxWidth: "none" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner-hero.png"
          alt="Fashion show hero"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full min-h-[260px] sm:min-h-[320px] md:min-h-[380px] w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 text-center px-4 sm:px-6 md:px-12">
          {/* Main Text */}
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] text-white uppercase"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif', letterSpacing: "0.2em", fontWeight: 300 }}
            >
              SCENT SALON
            </h1>
            <h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] text-white uppercase"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif', letterSpacing: "0.15em", fontWeight: 300 }}
            >
              BEAUTY REIMAGINED
            </h2>
            <h3 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-[0.1em] sm:tracking-[0.15em] text-white uppercase mt-2"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif', letterSpacing: "0.1em", fontWeight: 300 }}
            >
              SIGNATURE COLLECTION
            </h3>
          </div>

          {/* Button */}
          <button
            onClick={() => router.push("/book-now")}
            className="mt-4 sm:mt-6 md:mt-8 bg-white px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm md:text-base font-light uppercase tracking-[0.1em] text-black transition-all duration-300 hover:bg-gray-100 hover:scale-105"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif', letterSpacing: "0.1em", fontWeight: 300 }}
          >
            Book appointment
          </button>
        </div>
      </div>
    </section>
  );
}

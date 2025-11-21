"use client";

import Image from "next/image";

export default function BeautyVideoHero() {
  return (
    <section className="bg-white py-12">
      <div className="relative h-[320px] w-full sm:h-[400px]">
        <Image
          src="/V1.png"
          alt="Beauty makeup video thumbnail"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <button
          type="button"
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white/20 text-white backdrop-blur-sm transition hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </section>
  );
}

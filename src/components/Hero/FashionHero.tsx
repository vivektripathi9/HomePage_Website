"use client";

import Image from "next/image";

export default function FashionHero() {
  return (
    <section
      className="relative w-full overflow-hidden lg:aspect-[1920/840]"
      style={{ width: "100%", maxWidth: "none", minHeight: "350px" }}
    >
      {/* Background Image - No text overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/font/1748873213827-onehpcorpodslidinghero5760x2520pxjpg_2520x5760.webp"
          alt="SCENT Salon Hero"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />
      </div>
    </section>
  );
}

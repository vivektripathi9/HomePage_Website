"use client";

import Image from "next/image";
import modelImage from "./modlech.jpg";

export default function CocoSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white lg:aspect-[2048/662]"
      style={{ width: "100%", maxWidth: "none", minHeight: "250px" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={modelImage}
          alt="Coco Crush "
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/10" />
      </div>
    </section>
  );
}

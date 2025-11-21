"use client";

import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

const socials = [
  { label: "Facebook", href: "#", icon: "/x1.png" },
  { label: "Twitter", href: "#", icon: "/x2.png" },
  { label: "Pinterest", href: "#", icon: "/x3.png" },
];

export default function BeautyHero() {
  return (
    <section className={`w-full bg-white py-12 ${inter.variable} ${playfair.variable}`}>
      <div className="flex w-full flex-col gap-10 md:grid md:grid-cols-[48px_1fr_1.1fr] md:items-center md:gap-10">
        {/* LEFT: Social Icons (Desktop) */}
        <div className="hidden md:flex flex-col items-center gap-6 pl-20">
          <span className="h-16 w-px bg-black" />
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gray-300 bg-white transition-transform hover:scale-110 hover:border-gray-400"
            >
              <Image
                src={social.icon}
                alt={social.label}
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </a>
          ))}
          <span className="h-16 w-px bg-black" />
        </div>
        
        {/* Mobile: Social Icons Row */}
        <div className="flex flex-row items-center justify-center gap-4 px-20 md:hidden">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gray-300 bg-white transition-transform hover:scale-110 hover:border-gray-400"
            >
              <Image
                src={social.icon}
                alt={social.label}
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </a>
          ))}
        </div>

        {/* CENTER: Heading, Paragraph, Button */}
        <div className={`order-2 space-y-6 px-20 text-center md:order-none md:ml-12 md:text-left ${inter.className}`}>
          <h2
            className={`text-3xl font-semibold leading-tight text-[#2E2E2E] sm:text-[42px] ${playfair.className}`}
            style={{ fontFamily: "serif" }}
          >
            Beauty, Defined by You.
          </h2>
          <p className="text-base leading-relaxed text-[#555] sm:text-lg" style={{ fontWeight: 400 }}>
            Where balance meets bold — an experience crafted to make confidence timeless.
          </p>
          <button
            className={`mt-4 rounded-md bg-black px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-opacity hover:opacity-90 ${inter.className}`}
            style={{ fontWeight: 400 }}
          >
            KNOW MORE
          </button>
        </div>

        {/* RIGHT: Hero Image - extends to viewport edge */}
        <div className="order-3 relative h-[420px] w-full overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl sm:h-[500px] md:order-none md:h-[600px]">
          <Image
            src="/Frame_1.png"
            alt="Beauty model with dramatic makeup and feathers"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 hover:scale-110"
            priority
          />
        </div>
      </div>
    </section>
  );
}

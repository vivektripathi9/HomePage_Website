"use client";

import Image from "next/image";
import { Playfair_Display, Lato } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function StatementSection() {
  return (
    <section className="relative overflow-hidden py-12">
      <div className="absolute inset-0">
        <Image
          src="/z1.png"
          alt="Background"
          fill
          className="object-contain object-left opacity-60"
          priority
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-6 text-center sm:px-12">
        <h2
          className={`${playfair.className} text-3xl font-semibold text-[#2A2A35] sm:text-[42px] leading-tight`}
          style={{ fontFamily: "serif" }}
        >
          Our Story, Your Statement
        </h2>
        <div className="flex items-center justify-center gap-4 text-gray-300">
          <span className="h-px w-16 bg-black" />
          <span className="text-pink-400 text-xl">❀</span>
          <span className="h-px w-16 bg-black" />
        </div>
        <p className={`${lato.className} max-w-3xl text-[15px] text-[#6f6f7a]`}>
          We craft experiences where beauty meets intention. Every detail is designed to celebrate
          individuality, balance, and confidence — because true elegance is effortless.
        </p>

        <div className="w-full border border-[#ececec] bg-white shadow-[0_30px_70px_rgba(0,0,0,0.08)]">
          <div className="grid gap-8 p-0 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className={`${lato.className} space-y-4 text-left text-[#5c5c66] pl-6 md:pl-10`}>
              <h3 className={`${playfair.className} text-2xl font-semibold text-[#1f1f2e]`} style={{ fontFamily: "serif" }}>
                Welcome to <span className="text-black">scent</span>
              </h3>
              <p className="text-sm leading-relaxed">
                Where elegance meets attitude. SCENT is more than beauty — it’s a statement, a
                feeling, and an experience crafted exclusively for you.
              </p>
              <p className="text-sm leading-relaxed">
                There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form by injected humour or randomised words which don&apos;t
                look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                need to be sure there isn&apos;t anything embarrassing.
              </p>
              <button className="rounded-md bg-black px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-black/80">
                Read more
              </button>
            </div>

            <div className="relative h-80 flex items-center justify-end bg-white pr-4 md:pr-10">
              <Image
                src="/clii.png"
                alt="Confident woman with styled hair"
                fill
                className="object-contain object-right"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

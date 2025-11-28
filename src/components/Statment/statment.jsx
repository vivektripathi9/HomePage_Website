"use client";

import Image from "next/image";
import { useState } from "react";
import { Playfair_Display, Lato } from "next/font/google";
import DetailsModal from "@/components/Modal/DetailsModal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function StatementSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const storyDetails = `Welcome to SCENT — Where Elegance Meets Attitude

SCENT is more than just a beauty salon; it's a statement, a feeling, and an experience crafted exclusively for you. For over 15 years, we've been redefining beauty standards and helping our clients discover their unique style.

Our Story

Founded with a vision to create a space where beauty meets intention, SCENT has grown from a single salon to a network of 6 signature locations. We believe that true beauty comes from confidence, and our mission is to help you feel your absolute best.

What Makes Us Different

✨ Personalized Approach
Every client is unique, and so is our approach. We take time to understand your needs, preferences, and lifestyle to create a beauty experience that's truly yours.

💎 Premium Quality
We use only the finest products and latest techniques, ensuring you receive the best care possible. Our partnerships with leading beauty brands guarantee quality you can trust.

🌟 Expert Team
Our team of certified professionals undergoes continuous training to stay updated with the latest trends and techniques. They're not just stylists—they're artists dedicated to making you look and feel amazing.

🏆 Award-Winning Service
With over 10,000+ lives touched and countless transformations, we've built a reputation for excellence that speaks for itself.

Our Philosophy

At SCENT, we believe that beauty is not about conforming to standards—it's about expressing who you are. We celebrate individuality, embrace diversity, and create looks that reflect your personality.

Whether you're preparing for a special occasion, maintaining your everyday look, or exploring a new style, we're here to guide you every step of the way.

Join the SCENT Family

Experience the difference of personalized beauty care. Book your appointment today and let us help you discover the beauty that's uniquely yours.`;

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0">
        <Image
          src="/z1.png"
          alt="Background"
          fill
          className="object-contain object-left opacity-60"
          priority
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-12 text-center">
        <h2
          className={`${playfair.className} text-2xl sm:text-3xl font-semibold text-[#2A2A35] md:text-[42px] lg:text-5xl leading-tight`}
          style={{ fontFamily: "serif" }}
        >
          Our Story, Your Statement
        </h2>
        <div className="flex items-center justify-center gap-3 sm:gap-4 py-2">
          <span className="h-px w-12 sm:w-16 bg-black" />
          <span className="text-pink-400 text-xl sm:text-2xl">❀</span>
          <span className="h-px w-12 sm:w-16 bg-black" />
        </div>
        <p className={`${lato.className} max-w-3xl text-sm sm:text-base md:text-[15px] lg:text-lg text-[#6f6f7a] leading-relaxed px-2 sm:px-4`}>
          We craft experiences where beauty meets intention. Every detail is designed to celebrate
          individuality, balance, and confidence — because true elegance is effortless.
        </p>

        <div className="mt-4 sm:mt-6 md:mt-8 w-full border border-[#ececec] bg-white shadow-[0_30px_70px_rgba(0,0,0,0.08)]">
          <div className="grid gap-4 sm:gap-6 md:gap-8 lg:gap-12 p-4 sm:p-6 md:p-8 lg:p-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className={`${lato.className} space-y-4 sm:space-y-6 text-left text-[#5c5c66]`}>
              <h3 className={`${playfair.className} text-xl sm:text-2xl md:text-3xl font-semibold text-[#1f1f2e]`} style={{ fontFamily: "serif" }}>
                Welcome to <span className="text-black">scent</span>
              </h3>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                Where elegance meets attitude. SCENT is more than beauty — it's a statement, a
                feeling, and an experience crafted exclusively for you.
              </p>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form by injected humour or randomised words which don&apos;t
                look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                need to be sure there isn&apos;t anything embarrassing.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-2 sm:mt-4 rounded-md bg-black px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-black/80"
              >
                Read more
              </button>
            </div>

            <div className="relative h-56 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center bg-white">
              <Image
                src="/clii.png"
                alt="Confident woman with styled hair"
                fill
                className="object-contain object-right"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      <DetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Our Story, Your Statement"
        content={storyDetails}
        image="/clii.png"
        type="story"
      />
    </section>
  );
}

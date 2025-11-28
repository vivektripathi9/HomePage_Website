"use client";

import Image from "next/image";

const team = [
  {
    name: "Rose",
    role: "Salon Director",
    image: "/e1.png",
  },
  {
    name: "Sam",
    role: "Creative Director",
    image: "/e2.png",
  },
  {
    name: "Lobsang",
    role: "Top Stylist",
    image: "/e3.png",
  },
  {
    name: "Kevin",
    role: "Salon Director",
    image: "/e4.png",
  },
];

export default function PowerTeam() {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="flex w-full flex-col items-center gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-12 lg:px-20 text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-[42px] lg:text-5xl font-semibold leading-tight text-[#2E2E2E]"
          style={{ fontFamily: "serif" }}
        >
          The Power Behind the Look
        </h2>
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2 mb-2">
          <span className="h-px w-10 sm:w-12 bg-black" />
          <span className="text-pink-400 text-lg sm:text-xl">❀</span>
          <span className="h-px w-10 sm:w-12 bg-black" />
        </div>
        <p className="max-w-3xl text-xs sm:text-sm md:text-base leading-relaxed mt-4 px-4 text-[#555]">
          Bold, fearless, and unmatched in skill — our team creates transformations that turn heads and break norms.
        </p>

        <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 md:gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-4 mt-6 sm:mt-8 md:mt-12">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center gap-3 sm:gap-4 text-center">
              <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  loading="lazy"
                  quality={90}
                />
              </div>
              <div className="space-y-1">
                <p className="text-base sm:text-lg font-bold text-[#2E2E2E]">{member.name}</p>
                <p className="text-xs sm:text-sm font-light text-[#777]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

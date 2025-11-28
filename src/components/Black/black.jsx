import React from "react";
import Image from "next/image";

const stats = [
  {
    title: "Years of Mastery",
    value: "15",
    icon: "/k1.png",
  },
  {
    title: "Signature Salons",
    value: "6",
    icon: "/k3.png",
  },
  {
    title: "Lives Touched with Confidence",
    value: "10,000+",
    icon: "/k2.png",
  },
];

export default function BlackStats() {
  return (
    <section className="bg-black py-8 sm:py-12 md:py-16 text-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 sm:px-6 md:px-12">
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 md:flex-row md:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.title}>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto justify-center sm:justify-start">
                <Image
                  src={stat.icon}
                  alt={stat.title}
                  width={48}
                  height={48}
                  className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain flex-shrink-0"
                  priority
                />
                <div className="flex flex-col text-left">
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">{stat.value}</p>
                  <p className="text-[9px] sm:text-[10px] md:text-xs font-medium text-gray-400">{stat.title}</p>
                </div>
              </div>
              {index < stats.length - 1 && <div className="h-6 sm:h-8 md:h-12 w-full sm:w-[1px] bg-white/30" aria-hidden="true" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

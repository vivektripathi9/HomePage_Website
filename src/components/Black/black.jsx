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
    <section className="bg-black py-16 text-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 sm:px-12">
        <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.title}>
              <div className="flex items-center gap-4">
                <Image
                  src={stat.icon}
                  alt={stat.title}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                  priority
                />
                <div className="flex flex-col text-left">
                  <p className="text-4xl font-light tracking-wide">{stat.value}</p>
                  <p className="text-xs font-medium text-gray-400">{stat.title}</p>
                </div>
              </div>
              {index < stats.length - 1 && <div className="h-12 w-[1px] bg-white/30" aria-hidden="true" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

const benefits = [
  {
    title: "Comprehensive Services",
    icon: "/d1.png",
  },
  {
    title: "Convenient Booking",
    icon: "/d2.png",
  },
  {
    title: "Customer Satisfaction",
    icon: "/d3.png",
  },
  {
    title: "Experienced Professionals",
    icon: "/d4.png",
  },
  {
    title: "Hygiene and Safety",
    icon: "/d5.png",
  },
  {
    title: "Personalized Treatments",
    icon: "/d6.png",
  },
  {
    title: "Positive Reviews",
    icon: "/d7.png",
  },
  {
    title: "Regular Promotions and Offers",
    icon: "/d8.png",
  },
  {
    title: "Warm and Welcoming Atmosphere",
    icon: "/d1.png",
  },
];

export default function WhyScent() {
  return (
    <section className="bg-white py-12">
      <div className="flex w-full flex-col items-center gap-6 px-20 text-center">
        <h2 className="text-3xl font-semibold leading-tight text-[#2E2E2E] sm:text-[42px]" style={{ fontFamily: "serif" }}>
          Why SCENT? Because You Deserve More
        </h2>
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-black" />
          <span className="text-pink-400 text-xl">❀</span>
          <span className="h-px w-12 bg-black" />
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 md:gap-12">
          {/* First Row: 5 icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {benefits.slice(0, 5).map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col items-center gap-2 sm:gap-3 text-center cursor-pointer group transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={64}
                    height={64}
                    className="h-14 w-14 sm:h-16 sm:w-16 object-contain transition-all duration-300 group-hover:drop-shadow-lg"
                  />
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                  {benefit.title}
                </p>
              </div>
            ))}
          </div>
          {/* Second Row: 4 icons (centered) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-4xl mx-auto">
            {benefits.slice(5, 9).map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col items-center gap-2 sm:gap-3 text-center cursor-pointer group transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={64}
                    height={64}
                    className="h-14 w-14 sm:h-16 sm:w-16 object-contain transition-all duration-300 group-hover:drop-shadow-lg"
                  />
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                  {benefit.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

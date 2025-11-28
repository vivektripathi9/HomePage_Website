"use client";

import Image from "next/image";
import Link from "next/link";
import RedefineHeading from "@/components/Redefine/redefine";

const services = [
  {
    title: "Facial Care",
    description:
      "I was impressed by the molding services, not lorem ipsum is simply free text.",
    image: "/l1.png",
    icon: "/m1.png",
    href: "/new-service", // Beauty Treatments page
  },
  {
    title: "Massages",
    description:
      "I was impressed by the molding services, not lorem ipsum is simply free text.",
    image: "/l2.png",
    icon: "/m2.png",
    href: "/spa", // Spa page
  },
  {
    title: "Hair Care",
    description:
      "I was impressed by the molding services, not lorem ipsum is simply free text.",
    image: "/l3.png",
    icon: "/m3.png",
    href: "/services", // Services page
  },
  {
    title: "Nail Care",
    description:
      "I was impressed by the molding services, not lorem ipsum is simply free text.",
    image: "/l4.png",
    icon: "/m4.png",
    href: "/nails", // Nails page
  },
];

export default function LooksSection() {
  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="flex w-full flex-col items-center gap-8 sm:gap-12 px-4 sm:px-6 md:px-12 lg:px-20 text-center">
        <RedefineHeading />

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 w-full">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="relative flex flex-col items-center gap-4 sm:gap-5 rounded-2xl sm:rounded-[28px] border border-gray-100 bg-white px-4 sm:px-6 py-6 sm:py-10 shadow-[0px_25px_70px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0px_35px_90px_rgba(0,0,0,0.12)] cursor-pointer"
            >
              <div className="relative flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center">
                <div className="h-24 w-24 sm:h-32 sm:w-32 overflow-hidden rounded-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 200px"
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                <div
                  className={`absolute -bottom-4 sm:-bottom-5 left-1/2 h-12 w-12 sm:h-16 sm:w-16 -translate-x-1/2 overflow-hidden rounded-full shadow-lg ${
                    service.icon === "/m1.png" || service.icon === "/m2.png"
                      ? "bg-white"
                      : "bg-black"
                  }`}
                >
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    fill
                    sizes="(max-width: 640px) 48px, 64px"
                    className="object-contain"
                    loading="lazy"
                    quality={85}
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#22223b]" style={{ fontFamily: "serif" }}>{service.title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-500 text-center px-2">{service.description}</p>
              <span className="h-px w-full bg-gray-100" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-800 transition hover:text-black">
                Book Now →
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 sm:gap-4 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-[42px] font-semibold leading-tight text-[#1f1f2e]" style={{ fontFamily: "serif" }}>
            Watch Beauty in Action
          </h3>
          <div className="flex items-center justify-center gap-3 sm:gap-4 text-gray-300">
            <span className="h-px w-10 sm:w-12 bg-black" />
            <span className="text-pink-400 text-lg sm:text-xl">❀</span>
            <span className="h-px w-10 sm:w-12 bg-black" />
          </div>
        </div>
      </div>
    </section>
  );
}

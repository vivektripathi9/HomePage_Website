"use client";

import Image from "next/image";
import RedefineHeading from "@/components/Redefine/redefine";

const services = [
  {
    title: "Facial Care",
    description:
      "I was impressed by the molding services, not lorem ipsum is simply free text.",
    image: "/l1.png",
    icon: "/m1.png",
  },
  {
    title: "Massages",
    description:
      "I was impressed by the molding services, not lorem ipsum is simply free text.",
    image: "/l2.png",
    icon: "/m2.png",
  },
  {
    title: "Hair Care",
    description:
      "I was impressed by the molding services, not lorem ipsum is simply free text.",
    image: "/l3.png",
    icon: "/m3.png",
  },
  {
    title: "Nail Care",
    description:
      "I was impressed by the molding services, not lorem ipsum is simply free text.",
    image: "/l4.png",
    icon: "/m4.png",
  },
];

export default function LooksSection() {
  return (
    <section className="bg-white py-12">
      <div className="flex w-full flex-col items-center gap-12 px-20 text-center">
        <RedefineHeading />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative flex flex-col items-center gap-5 rounded-[28px] border border-gray-100 bg-white px-6 py-10 shadow-[0px_25px_70px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0px_35px_90px_rgba(0,0,0,0.12)]"
            >
              <div className="relative flex h-36 w-36 items-center justify-center">
                <div className="h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width:768px) 60vw, 200px"
                    className="object-cover"
                  />
                </div>
                <div
                  className={`absolute -bottom-5 left-1/2 h-16 w-16 -translate-x-1/2 overflow-hidden rounded-full shadow-lg ${
                    service.icon === "/m1.png" || service.icon === "/m2.png"
                      ? "bg-white"
                      : "bg-black"
                  }`}
                >
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#22223b]" style={{ fontFamily: "serif" }}>{service.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{service.description}</p>
              <span className="h-px w-full bg-gray-100" />
              <button className="text-sm font-semibold uppercase tracking-wide text-gray-800 transition hover:text-black">
                Book Now →
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <h3 className="text-3xl font-semibold leading-tight text-[#1f1f2e] sm:text-[42px]" style={{ fontFamily: "serif" }}>
            Watch Beauty in Action
          </h3>
          <div className="flex items-center justify-center gap-4 text-gray-300">
            <span className="h-px w-12 bg-black" />
            <span className="text-pink-400 text-xl">❀</span>
            <span className="h-px w-12 bg-black" />
          </div>
        </div>
      </div>
    </section>
  );
}

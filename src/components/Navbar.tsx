"use client";

import Image from "next/image";
import { useState } from "react";

const menuItems = [
  "Home",
  "Service",
  "Salon Memberships",
  "Shops",
  "Franchise",
  "Academy",
  "Contact",
];

const services = [
  "Hair Services",
  "Beauty Treatments",
  "Nail Services",
  "Skincare",
  "Makeup",
  "Massage Therapy",
];

export default function Navbar() {
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="w-full border-b border-gray-200 px-20 py-2 text-sm text-gray-700">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <Image src="/icons/phone-red.svg" alt="phone icon" width={16} height={16} />
            <span className="font-medium">Contact:</span>
            <a href="tel:18009156270" className="text-gray-600 hover:text-red-500">
              1-800-915-6270
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/icons/clock-red.svg" alt="clock icon" width={16} height={16} />
            <span className="font-medium">Work time:</span>
            <span>9:00–18:00</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Image src="/icons/cart.svg" width={20} height={20} alt="cart" />
            <Image src="/icons/user.svg" width={20} height={20} alt="user" />
            <Image src="/icons/search.svg" width={20} height={20} alt="search" />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-wrap items-center justify-start px-20 py-4">
        <h1 className="text-3xl font-light tracking-[0.4em]" style={{ fontFamily: "serif" }}>scent</h1>

        <nav className="ml-auto">
          <ul className="flex flex-wrap items-center gap-8 text-[15px] text-gray-700">
            {menuItems.map((item) => (
              <li
                key={item}
                className={`relative cursor-pointer transition-colors hover:text-red-500 ${
                  item === "Contact" ? "font-medium text-red-600" : ""
                }`}
                onMouseEnter={() => item === "Service" && setIsServiceOpen(true)}
                onMouseLeave={() => item === "Service" && setIsServiceOpen(false)}
              >
                {item === "Service" ? (
                  <a href="/new-service" onClick={() => setIsServiceOpen(false)}>
                    {item}
                  </a>
                ) : item === "Home" ? (
                  <a href="/">{item}</a>
                ) : item === "Salon Memberships" ? (
                  <a href="/salon-memberships">{item}</a>
                ) : (
                  item
                )}
                {item === "Service" && isServiceOpen && (
                  <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-md bg-white shadow-lg border border-gray-200 py-2">
                    {services.map((service) => (
                      <a
                        key={service}
                        href={`/services#${service.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-red-500"
                        onClick={() => setIsServiceOpen(false)}
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-4 mt-4 flex items-center gap-4 sm:mt-0">
          
          <button className="ml-4 rounded-md bg-red-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-700">
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
}


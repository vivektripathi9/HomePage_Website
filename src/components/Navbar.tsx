"use client";

import Image from "next/image";

const menuItems = [
  "Home",
  "Service",
  "Salon Memberships",
  "Shops",
  "Franchise",
  "Academy",
  "Contact",
];

export default function Navbar() {
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
        <h1 className="text-3xl font-light tracking-[0.4em]">scent</h1>

        <nav className="ml-auto">
          <ul className="flex flex-wrap items-center gap-8 text-[15px] text-gray-700">
            {menuItems.map((item) => (
              <li
                key={item}
                className={`cursor-pointer transition-colors hover:text-red-500 ${
                  item === "Contact" ? "font-medium text-red-600" : ""
                }`}
              >
                {item}
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


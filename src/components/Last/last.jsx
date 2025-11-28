import Image from "next/image";
import { Playfair_Display, Lato } from "next/font/google";

const playfair = Playfair_Display({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const quickLinks = ["About Us", "Service", "Product", "Blog", "Team", "Faqs"];
const recentPosts = [
  { title: "Only 1 week of the year!", date: "April 08, 2019" },
  { title: "Best tips for munu beauty", date: "April 08, 2019" },
  { title: "Our favorite makeup tips", date: "April 08, 2019" },
];
const hours = [
  { day: "Mon - Tue", time: "9.00 AM - 18.00 PM" },
  { day: "Wed - Fri", time: "8.00 AM - 17.00 PM" },
  { day: "Saturday", time: "9.00 PM - 15.00 PM" },
  { day: "Sunday", time: "Closed" },
];
const socialIcons = [
  { src: "/x1.png", alt: "Facebook", href: "https://www.facebook.com/ScentSalonSpas/" },
  { src: "/x2.png", alt: "X (Twitter)", href: "https://x.com/scentlifestyle" },
  { src: "/x3.png", alt: "Pinterest", href: "https://in.pinterest.com/scentlifestyle/" },
  { src: "/x4.png", alt: "Instagram", href: "https://www.instagram.com/scentlifestyle/" },
];

export default function Footer() {
  return (
    <footer className={`${lato.className} bg-white text-sm sm:text-[16px] text-[#555]`}>
      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 gap-8 sm:gap-12 md:gap-16 px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Branding and Social Links */}
        <div className="space-y-3 sm:space-y-4 md:pr-6 lg:pr-10">
          <p
            className={`${playfair.className} text-2xl sm:text-3xl font-normal tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] text-[#2E2E2E]`}
          >
            scent
          </p>
          <p className="text-sm sm:text-[16px] font-light text-[#555] leading-relaxed">
            Experience luxury, elegance, and confidence — every time you visit SCENT.
          </p>
          <div className="flex gap-2 sm:gap-3">
            {socialIcons.map((icon) => (
              <a
                key={icon.alt}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-[#E5E5E5] bg-white overflow-hidden transition-all hover:border-black hover:scale-110"
                aria-label={icon.alt}
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={36}
                  height={36}
                  className="h-full w-full object-cover"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:px-4 lg:px-6">
          <h3 className="mb-2 text-lg sm:text-[20px] font-bold text-[#2E2E2E] text-center md:text-left" style={{ fontFamily: "serif" }}>Quick Links</h3>
          <span className="block h-px w-full bg-gray-300 mb-3 sm:mb-4" />
          <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-[16px] font-normal text-[#555]">
            {quickLinks.map((link) => (
              <li key={link} className="transition hover:text-[#2E2E2E] cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Recent Posts */}
        <div className="md:px-4 lg:px-6">
          <h3 className="mb-2 text-lg sm:text-[20px] font-bold text-[#2E2E2E] text-center md:text-left" style={{ fontFamily: "serif" }}>Recent Posts</h3>
          <span className="block h-px w-full bg-gray-300 mb-3 sm:mb-4" />
          <ul className="space-y-3 sm:space-y-4">
            {recentPosts.map((post) => (
              <li key={post.title}>
                <p className="text-sm sm:text-[16px] font-normal text-[#555] mb-1">{post.title}</p>
                <p className="text-xs sm:text-[14px] font-normal text-[#777] flex items-center gap-1">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {post.date}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Opening Hours */}
        <div className="flex flex-col text-left md:ml-auto md:items-end md:text-right md:pl-6 lg:pl-10">
          <h3 className="mb-2 w-full text-lg sm:text-[20px] font-bold text-[#2E2E2E] text-center md:text-left" style={{ fontFamily: "serif" }}>
            Opening Hours
          </h3>
          <span className="block h-px w-full bg-gray-300 mb-3 sm:mb-4" />
          <p className="text-sm sm:text-[16px] font-normal text-[#555] mb-3 sm:mb-4 text-left">
            Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod tempor inci-didunt.
          </p>
          <ul className="space-y-1.5 sm:space-y-2 text-left text-xs sm:text-[12px] md:text-[11px] text-[#555]">
            {hours.map((hour) => (
              <li key={hour.day} className="font-normal">
                <span>{hour.day} : </span>
                <span className="text-[#777]">{hour.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar: Copyright and Payment Icons */}
      <div className="bg-White">
        <div className="mx-auto w-full max-w-7xl flex flex-col items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 md:px-12 lg:px-20 py-3 sm:py-4 text-xs sm:text-[14px] text-black sm:flex-row">
          <p className="font-normal text-center sm:text-left">
            Designed By <span className="font-semibold">Pinakkaa</span> © 2025
          </p>
          <div className="flex gap-2 sm:gap-3 items-center">
            {["M", "VISA", "🍎", "💳"].map((icon, index) => (
              <span
                key={index}
                className="text-black text-base sm:text-lg font-medium"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

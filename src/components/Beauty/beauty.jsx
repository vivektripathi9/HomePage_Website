"use client";

import Image from "next/image";
import { useState } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import DetailsModal from "@/components/Modal/DetailsModal";

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/ScentSalonSpas/", icon: "/x1.png" },
  { label: "X (Twitter)", href: "https://x.com/scentlifestyle", icon: "/x2.png" },
  { label: "Pinterest", href: "https://in.pinterest.com/scentlifestyle/", icon: "/x3.png" },
];

export default function BeautyHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const beautyDetails = (
    <div className="space-y-8">
      <div>
        <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
          Welcome to SCENT Salon, where beauty meets excellence. We are a premier destination for all your beauty and wellness needs, offering a comprehensive range of services designed to enhance your natural beauty and boost your confidence.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-700">
          At SCENT, we believe that beauty is an art form, and every client is a masterpiece waiting to be revealed. Our expert team combines years of experience with the latest techniques to deliver results that exceed expectations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#1f1f2e] border-b border-gray-200 pb-2" style={{ fontFamily: "serif" }}>
            Hair Services
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            From classic cuts to modern styles, our expert stylists create looks that reflect your personality. We offer precision haircuts and styling, professional hair coloring and highlights, advanced hair treatments and deep conditioning, elegant bridal hair styling, and premium hair extensions.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-[#C06C84] mt-1">—</span>
              <span>Precision haircuts and styling</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C06C84] mt-1">—</span>
              <span>Hair coloring and highlights</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C06C84] mt-1">—</span>
              <span>Hair treatments and deep conditioning</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C06C84] mt-1">—</span>
              <span>Bridal hair styling</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C06C84] mt-1">—</span>
              <span>Hair extensions</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#1f1f2e] border-b border-gray-200 pb-2" style={{ fontFamily: "serif" }}>
            Beauty Treatments
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            Indulge in our luxurious beauty treatments designed to rejuvenate and restore your skin's natural radiance. Our advanced facials, anti-aging therapies, and customized skincare routines are tailored to your unique skin type and concerns.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-[#C06C84] mt-1">—</span>
              <span>Facials and skincare treatments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C06C84] mt-1">—</span>
              <span>Anti-aging therapies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C06C84] mt-1">—</span>
              <span>Acne treatments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C06C84] mt-1">—</span>
              <span>Hydrating masks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C06C84] mt-1">—</span>
              <span>Customized skincare routines</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#1f1f2e] border-b border-gray-200 pb-2" style={{ fontFamily: "serif" }}>
            Nail Services
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            Express yourself with our professional nail art and care services. From classic manicures to intricate designs, our nail specialists create looks that complement your style and personality.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-[#C06C84] mt-1">—</span>
              <span>Manicures and pedicures</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C06C84] mt-1">—</span>
              <span>Nail art and designs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C06C84] mt-1">—</span>
              <span>Gel and acrylic nails</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C06C84] mt-1">—</span>
              <span>Nail extensions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C06C84] mt-1">—</span>
              <span>Nail care treatments</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#1f1f2e] border-b border-gray-200 pb-2" style={{ fontFamily: "serif" }}>
            Makeup Services
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            Transform your look with professional makeup artistry. Our certified makeup artists specialize in creating flawless looks for any occasion, from natural everyday beauty to dramatic special event glamour.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-[#C06C84] mt-1">—</span>
              <span>Bridal makeup</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C06C84] mt-1">—</span>
              <span>Party makeup</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C06C84] mt-1">—</span>
              <span>Special occasion makeup</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C06C84] mt-1">—</span>
              <span>Makeup lessons</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C06C84] mt-1">—</span>
              <span>Product consultations</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <h3 className="text-2xl font-semibold text-[#1f1f2e] mb-6" style={{ fontFamily: "serif" }}>
          Why Choose SCENT?
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-[#1f1f2e] mb-2">15+ Years of Excellence</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                With over 15 years of experience, we've built a reputation for quality and professionalism. Our commitment to excellence has made us a trusted name in the beauty industry.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#1f1f2e] mb-2">Expert Team</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our team consists of certified professionals trained in the latest beauty techniques and trends. Each member undergoes continuous education to stay at the forefront of the industry.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#1f1f2e] mb-2">Premium Products</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                We use only the finest, professional-grade products from trusted brands. Our partnerships with leading beauty companies ensure you receive the highest quality treatments.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-[#1f1f2e] mb-2">Personalized Service</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every service is tailored to your unique needs and preferences. We take time to understand your goals and create a customized experience that reflects your individual style.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#1f1f2e] mb-2">Multiple Locations</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Visit us at any of our 6 signature salons across the city. Each location maintains our high standards while offering convenient access to premium beauty services.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#1f1f2e] mb-2">Spa & Wellness</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Relax and rejuvenate with our comprehensive spa services including full body massages, aromatherapy, body scrubs and wraps, and specialized relaxation therapies designed to restore balance and well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className={`relative w-full overflow-hidden py-12 sm:py-16 md:py-20 min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] ${inter.variable} ${playfair.variable}`}>
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/Beauty_video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          preload="metadata"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex w-full flex-col gap-6 sm:gap-8 md:gap-10 md:grid md:grid-cols-[48px_1fr_1.1fr] md:items-center">
        {/* LEFT: Social Icons (Desktop) */}
        <div className="hidden md:flex flex-col items-center gap-6 pl-4 lg:pl-20">
          <span className="h-16 w-px bg-white" />
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/20 backdrop-blur-sm transition-transform hover:scale-110 hover:border-white/50 hover:bg-white/30"
            >
              <Image
                src={social.icon}
                alt={social.label}
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </a>
          ))}
          <span className="h-16 w-px bg-white" />
        </div>
        
        {/* Mobile: Social Icons Row */}
        <div className="flex flex-row items-center justify-center gap-4 px-4 sm:px-6 md:hidden">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/20 backdrop-blur-sm transition-transform hover:scale-110 hover:border-white/50 hover:bg-white/30"
            >
              <Image
                src={social.icon}
                alt={social.label}
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </a>
          ))}
        </div>

        {/* CENTER: Heading, Paragraph, Button */}
        <div className={`order-2 space-y-4 sm:space-y-6 px-4 sm:px-6 md:px-12 lg:px-20 text-center md:order-none md:ml-4 lg:ml-12 md:text-left ${inter.className}`}>
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold leading-tight text-white ${playfair.className}`}
            style={{ fontFamily: "serif" }}
          >
            Beauty, Defined by You.
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90" style={{ fontWeight: 400 }}>
            Where balance meets bold — an experience crafted to make confidence timeless.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className={`mt-2 sm:mt-4 rounded-md bg-white px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-medium uppercase tracking-wide text-black transition-opacity hover:opacity-90 ${inter.className}`}
            style={{ fontWeight: 400 }}
          >
            KNOW MORE
          </button>
        </div>

        {/* RIGHT: Empty space for layout balance */}
        <div className="order-3 md:order-none" />
      </div>

      {/* Details Modal */}
      <DetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Discover SCENT Salon"
        content={beautyDetails}
        type="beauty"
      />
    </section>
  );
}

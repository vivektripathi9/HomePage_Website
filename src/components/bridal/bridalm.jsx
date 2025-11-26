"use client";

import Image from "next/image";
import { useState } from "react";
import PowerTeam from "../Thepower/thepower";
import WhyScent from "../why/why";

const bridalPackages = [
  {
    id: "sangeet",
    title: "Sangeet Glow-Up",
    description:
      "Airbrush finish with playful shimmer, grip-proof lashes, and dance-proof hair styling designed for high-energy celebrations.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    services: [
      { name: "Glass-skin prep facial", price: "₹3,500" },
      { name: "Airbrush base + gleam contour", price: "₹4,500" },
      { name: "Statement liner + Swarovski accents", price: "₹2,500" },
      { name: "Textured waves / braided buns", price: "₹3,000" },
      { name: "On-site stylist for quick fixes", price: "₹5,000" },
    ],
    price: "₹18,500",
  },
  {
    id: "wedding",
    title: "Main Phera Ritual",
    description:
      "Couture bridal look inspired by your lehenga palette, jewellery, and ceremony lighting. Includes veil setting and tear-resistant touch-ups.",
    image: "/br1.jpg",
    services: [
      { name: "Luxury skin therapy + cryo depuff", price: "₹5,500" },
      { name: "Custom mix foundation & HD base", price: "₹6,500" },
      { name: "Veil-ready updo or classic bun", price: "₹4,500" },
      { name: "Jewellery + dupatta draping", price: "₹3,500" },
      { name: "Unlimited touch-ups till vidaai", price: "₹9,900" },
    ],
    price: "₹29,900",
  },
  {
    id: "reception",
    title: "Reception Red Carpet",
    description:
      "Modern glam inspired by celebrity after-party looks—think glass eyeliner, glossy lips, and sleek blowouts.",
    image: "/br2.jpg",
    services: [
      { name: "Radiance revive facial shot", price: "₹3,500" },
      { name: "Soft smokey / monochrome eye", price: "₹4,000" },
      { name: "Glossed lip + precision contour", price: "₹2,500" },
      { name: "Hollywood blowout / ponytail", price: "₹3,500" },
      { name: "Custom fragrance layering", price: "₹8,000" },
    ],
    price: "₹21,500",
  },
];

const addOnMenu = [
  "Groom touch-up concierge",
  "Bridal party mini looks",
  "Destination travel artist",
  "Intensive skin bootcamps (4/8 weeks)",
  "Custom hair extensions & veil placement",
];

export default function BridalExperience() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section id="bridal-experience" className="bg-gradient-to-b from-[#fff5f8] via-[#fef9fb] to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-rose-200/10 rounded-full blur-3xl" />
      </div>

      {/* Hero full width */}
      <div className="relative w-full overflow-hidden">
        <video
          src="/bridalmakeup.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-[80vh] min-h-[600px] w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center gap-6 px-8 text-white md:px-16 lg:px-32 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-pink-300 text-2xl">❀</span>
            <p className="text-sm uppercase tracking-[0.6em] text-pink-200 font-light">Bridal Atelier</p>
            <span className="text-pink-300 text-2xl">❀</span>
          </div>
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight drop-shadow-2xl"
            style={{ fontFamily: "serif" }}
          >
            Luxe Bridal Makeup,<br />
            <span className="text-pink-200">Styled for Every Ceremony</span>
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl mt-4">
            From pheras at dawn to after-parties post-midnight, SCENT&apos;s bridal specialists craft
            iconic looks that feel lightweight, photogenic, and perfectly you. Access our couture menu,
            skin bootcamps, and on-location touch-up squads.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <span className="rounded-full border-2 border-pink-300/50 bg-pink-500/20 backdrop-blur-sm px-6 py-3 text-sm uppercase tracking-[0.3em] text-white shadow-lg">Airbrush + HD</span>
            <span className="rounded-full border-2 border-pink-300/50 bg-pink-500/20 backdrop-blur-sm px-6 py-3 text-sm uppercase tracking-[0.3em] text-white shadow-lg">Dupatta Draping</span>
            <span className="rounded-full border-2 border-pink-300/50 bg-pink-500/20 backdrop-blur-sm px-6 py-3 text-sm uppercase tracking-[0.3em] text-white shadow-lg">Travel Concierge</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full flex-col gap-0 px-6 md:px-12 lg:px-20 relative z-10">
        {/* Packages */}
        <div className="space-y-16 py-16">
          <div 
            className="text-center py-20 px-8 rounded-[50px] bg-gradient-to-br from-white via-[#fff9fb] to-pink-50/40 border-2 border-pink-200/60 shadow-[0_25px_80px_rgba(240,144,174,0.2)] relative overflow-hidden transition-all duration-700 hover:shadow-[0_35px_100px_rgba(240,144,174,0.3)] hover:scale-[1.01]"
            style={{
              animation: "fadeInUp 0.8s ease-out forwards",
              opacity: 0,
            }}
          >
            {/* Decorative gold accents */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-amber-400 text-3xl">❀</span>
              <p 
                className="text-lg sm:text-xl uppercase tracking-[0.6em] text-[#C06C84] font-semibold transition-all duration-500 hover:text-[#d87a9a]"
                style={{
                  animation: "fadeInUp 0.8s ease-out 0.2s forwards",
                  opacity: 0,
                }}
              >
                Curated Capsules
              </p>
              <span className="text-amber-400 text-3xl">❀</span>
            </div>
            <h2 
              className="mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-[#1f1f2e] leading-tight transition-all duration-700 hover:scale-105" 
              style={{ 
                fontFamily: "serif",
                animation: "fadeInUp 0.8s ease-out 0.4s forwards",
                opacity: 0,
                textShadow: "0 2px 20px rgba(240,144,174,0.2)",
              }}
            >
              Three Signature<br />
              <span className="bg-gradient-to-r from-[#C06C84] to-[#d87a9a] bg-clip-text text-transparent">Bridal Looks</span>
            </h2>
            <p 
              className="mt-8 text-xl sm:text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed transition-all duration-500 hover:text-gray-800 font-light"
              style={{
                animation: "fadeInUp 0.8s ease-out 0.6s forwards",
                opacity: 0,
              }}
            >
              Tap into our couture packages or build a bespoke itinerary with your bridal manager.
            </p>
          </div>
          <div className="grid w-full gap-10 md:grid-cols-2 lg:grid-cols-3">
            {bridalPackages.map((pkg) => {
              const isActive = activeService === pkg.id;
              return (
                <div
                  key={pkg.id}
                  id={pkg.id}
                  className={`group relative flex flex-col cursor-pointer overflow-hidden rounded-[36px] border-2 ${
                    isActive ? "border-amber-400/60 ring-4 ring-amber-200/30" : "border-pink-200/50"
                  } bg-gradient-to-br from-white to-pink-50/30 shadow-[0px_30px_80px_rgba(240,144,174,0.15)] transition-all duration-700 hover:-translate-y-3 hover:shadow-[0px_40px_120px_rgba(240,144,174,0.3)] hover:border-pink-300/70`}
                  onClick={() => setActiveService(pkg.id)}
                >
                  {/* Gold decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-300/20 to-transparent rounded-bl-full z-10" />
                  <div className="absolute top-4 right-4 text-amber-400/60 text-xl">❀</div>
                  {/* Image Section */}
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-115"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center text-white opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-amber-300 text-2xl">❀</span>
                        <p
                          className="pointer-events-auto cursor-pointer text-base tracking-[0.4em] uppercase text-pink-100 transition-all hover:scale-110 hover:text-white font-semibold"
                          style={{ fontFamily: "serif" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveService(pkg.id);
                          }}
                        >
                          {pkg.title}
                        </p>
                        <span className="text-amber-300 text-2xl">❀</span>
                      </div>
                      <p
                        className="pointer-events-auto cursor-pointer text-sm leading-relaxed text-white/90 transition-all hover:text-white max-w-xs"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveService(pkg.id);
                        }}
                      >
                        Hover to preview & click to reveal full package details.
                      </p>
                      <button
                        className="pointer-events-auto rounded-full border-2 border-amber-300/80 bg-amber-400/20 backdrop-blur-md px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all hover:bg-amber-400 hover:text-black hover:border-amber-300 shadow-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveService(pkg.id);
                        }}
                      >
                        Reserve Package
                      </button>
                    </div>
                    {/* Price badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-br from-amber-400 to-amber-500 text-white px-4 py-2 rounded-full shadow-lg">
                      <span className="text-sm font-bold">{pkg.price}</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-1 flex-col gap-5 px-8 pb-10 pt-8 bg-gradient-to-b from-white to-pink-50/20">
                    <div className="flex items-center justify-between border-b border-pink-100 pb-4">
                      <h3
                        className="text-2xl font-semibold text-[#1f1f2e]"
                        style={{ fontFamily: "serif" }}
                      >
                        {pkg.title}
                      </h3>
                      <span className="text-xs uppercase tracking-[0.3em] text-amber-600 font-semibold">
                        {isActive ? "Hide" : "View Details"}
                      </span>
                    </div>
                    <div
                      className={`space-y-4 text-sm text-gray-600 transition-all duration-700 ${
                        isActive ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      <p className="leading-relaxed text-base">{pkg.description}</p>
                      <button
                        className="w-fit rounded-full border-2 border-pink-300 bg-gradient-to-r from-pink-500/10 to-amber-400/10 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#C06C84] transition-all hover:bg-gradient-to-r hover:from-pink-500 hover:to-amber-400 hover:text-white hover:border-pink-400 shadow-md"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveService(pkg.id);
                        }}
                      >
                        View Full Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fullscreen Modal */}
        {activeService && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
            <div className="relative flex w-full max-w-5xl max-h-[90vh] flex-col overflow-hidden rounded-[40px] bg-gradient-to-br from-white to-pink-50/30 border-2 border-pink-200/50 shadow-[0px_50px_150px_rgba(240,144,174,0.4)] md:flex-row my-auto">
              {/* Decorative gold accents */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
              {(() => {
                const activePackage = bridalPackages.find((item) => item.id === activeService);
                if (!activePackage) return null;
                return (
                  <>
                    <button
                      aria-label="Close modal"
                      className="absolute right-4 top-4 z-10 rounded-full border-2 border-pink-300/50 bg-gradient-to-br from-white to-pink-50/80 p-2.5 text-[#C06C84] transition-all hover:bg-gradient-to-br hover:from-pink-500 hover:to-amber-400 hover:text-white hover:border-pink-400 shadow-lg"
                      onClick={() => setActiveService(null)}
                    >
                      ✕
                    </button>
                    <div className="relative h-64 w-full md:h-[90vh] md:w-1/2 md:min-h-0 flex-shrink-0">
                      <Image
                        src={activePackage.image}
                        alt={activePackage.title}
                        fill
                        className="object-cover"
                        sizes="(max-width:768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm uppercase tracking-[0.4em]" style={{ fontFamily: "serif" }}>
                          {activePackage.title}
                        </p>
                        <p className="text-xs text-white/80">Couture bridal experience</p>
                      </div>
                    </div>
                    <div className="flex w-full flex-col gap-4 px-6 py-6 md:w-1/2 md:overflow-y-auto md:max-h-[90vh]">
                      <div className="flex flex-col gap-3">
                        <h3 className="text-2xl md:text-3xl font-semibold text-[#1f1f2e]" style={{ fontFamily: "serif" }}>
                          {activePackage.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-600">{activePackage.description}</p>
                        <div className="flex items-center gap-3">
                          <span className="text-xl md:text-2xl font-semibold text-[#1f1f2e]">Package: {activePackage.price}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                          Service Menu
                        </p>
                        <div className="grid grid-cols-1 gap-2 max-h-[300px] overflow-y-auto pr-2">
                          {activePackage.services.map(({ name, price }) => (
                            <div
                              key={name}
                              className="flex flex-col rounded-xl border-2 border-pink-100 bg-gradient-to-r from-white to-pink-50/30 px-4 py-3 text-left sm:flex-row sm:items-center sm:justify-between transition-all duration-300 hover:border-pink-300 hover:shadow-md"
                            >
                              <div className="flex items-center gap-2 text-sm text-gray-700">
                                <span className="text-amber-400 text-base">❀</span>
                                <span className="font-medium">{name}</span>
                              </div>
                              <span className="mt-2 text-sm font-bold text-[#C06C84] sm:mt-0 bg-gradient-to-r from-pink-500/10 to-amber-400/10 px-3 py-1 rounded-full">
                                {price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-auto flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-4 border-t border-pink-100">
                        <button className="flex-1 rounded-full bg-gradient-to-r from-pink-500 to-amber-400 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
                          Book {activePackage.title}
                        </button>
                        <button className="flex-1 rounded-full border-2 border-pink-300 bg-gradient-to-r from-pink-500/10 to-amber-400/10 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#C06C84] transition-all hover:bg-gradient-to-r hover:from-pink-500 hover:to-amber-400 hover:text-white hover:border-pink-400">
                          Schedule Trial
                        </button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}

        {/* Add-ons and CTA */}
        <div className="grid gap-12 rounded-[50px] border-2 border-pink-200/60 bg-gradient-to-br from-[#fef1f6] via-white to-pink-50/40 p-12 shadow-[0_40px_140px_rgba(240,144,174,0.3)] md:grid-cols-[1.2fr_0.8fr] relative overflow-hidden my-16">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
          <div className="absolute top-10 right-10 text-amber-300/20 text-6xl">❀</div>
          <div className="absolute bottom-10 left-10 text-pink-300/20 text-6xl">❀</div>
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <span className="text-amber-400 text-2xl">❀</span>
              <p className="text-base uppercase tracking-[0.5em] text-[#C06C84] font-semibold">Add-On Rituals</p>
              <span className="text-amber-400 text-2xl">❀</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-semibold text-[#1f1f2e]" style={{ fontFamily: "serif" }}>
              Tailor the Journey with<br />
              <span className="bg-gradient-to-r from-[#C06C84] to-[#d87a9a] bg-clip-text text-transparent">Bespoke Extras</span>
            </h3>
            <p className="text-base text-gray-600">
              Your bridal manager curates beauty rehearsals, skin bootcamps, and family looks so every
              photo feels editorial. Upgrade to a platinum plan with destination travel and dedicated
              assistants.
            </p>
            <ul className="grid gap-3 text-sm text-gray-700 md:grid-cols-2">
              {addOnMenu.map((addon) => (
                <li key={addon} className="flex items-start gap-2">
                  <span className="text-pink-400 text-xl leading-none">❀</span>
                  <span>{addon}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between rounded-[36px] border-2 border-pink-200/60 bg-gradient-to-br from-white/90 to-pink-50/50 p-10 backdrop-blur-md shadow-lg relative z-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-xl">❀</span>
                <p className="text-sm uppercase tracking-[0.4em] text-[#C06C84] font-semibold">Concierge</p>
              </div>
              <h4 className="text-3xl font-semibold text-[#1f1f2e]" style={{ fontFamily: "serif" }}>
                Book a Bridal<br />Consultation
              </h4>
              <p className="text-sm text-gray-600">
                Share your Pinterest boards, venues, and wardrobe—we deliver a customised timeline within 48
                hours.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="tel:18009156270"
                className="block rounded-full border-2 border-pink-300 bg-gradient-to-r from-pink-500/10 to-amber-400/10 px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#C06C84] transition-all hover:bg-gradient-to-r hover:from-pink-500 hover:to-amber-400 hover:text-white hover:border-pink-400 shadow-md"
              >
                Call Bridal Desk
              </a>
              <button className="w-full rounded-full bg-gradient-to-r from-pink-500 to-amber-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
                Schedule Trial
              </button>
            </div>
          </div>
        </div>
      </div>
      <WhyScent />
      <PowerTeam />
    </section>
  );
}


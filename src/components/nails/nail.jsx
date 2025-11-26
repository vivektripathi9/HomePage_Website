"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import PowerTeam from "../Thepower/thepower";

const serviceChapters = [
  {
    id: "nail-extensions",
    title: "Nail Extensions",
    tagline: "Sculpted French, ballerina, or almond lengths with BIAB strength.",
    description:
      "Our extension lounge uses soft-gel capsules, acrylic sculpting, or BIAB overlays to give you durable lengths without compromising nail health. Every set includes nail mapping, cuticle therapy, and finishing serum.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    services: ["Soft-gel tips", "Acrylic sculpting", "BIAB overlay", "Refills & removals"],
  },
  {
    id: "gel-art",
    title: "Gel Nail Art",
    tagline: "Hand-painted artistry, cat-eye gradients, and fashion-week prints.",
    description:
      "Choose from minimalist line work to editorial-level art. We work with O.P.I, Japanese gels, and 9-free pigments for intense colour payoff and lasting shine.",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80",
    services: ["Cat-eye gel polish", "Gel French polish", "Ombre & chrome", "Custom decals"],
  },
  {
    id: "manicure",
    title: "Manicure Rituals",
    tagline: "Classic & organic manicures finished with candle spa therapy.",
    description:
      "Hydrating scrubs, mask wraps, hot towel compressions, and vitamin-rich oils ensure your hands stay plush. Upgrade to our candle spa manicure for molten-wax massages.",
    image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=1200&q=80",
    services: ["Classic manicure", "Organic manicure", "Candle spa manicure", "Cut & file"],
  },
  {
    id: "pedicure",
    title: "Pedicure Lounge",
    tagline: "Classic, organic, and candle spa pedicures in zero-gravity pods.",
    description:
      "Detox soaks, callus smoothing, and botanical masks deliver vacation-ready feet. Finish with chrome, ombre, or classic polish.",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=80",
    services: ["Classic pedicure", "Organic pedicure", "Candle spa pedicure", "Colour change"],
  },
  {
    id: "finishing",
    title: "Finishing Touches",
    tagline: "Quick refreshers that keep your set pristine between appointments.",
    description:
      "Drop in for colour changes, cut & file sessions, or long-wear Geleration boosts that extend the life of your manicure.",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80",
    services: ["Colour change", "Geleration", "French Geleration", "Express repairs"],
  },
];

const galleryItems = [
  {
    title: "Nail Extensions",
    image: "/w1.jpg",
    description: "Achieve your desired length with our premium nail extensions. We use soft-gel capsules, acrylic sculpting, or BIAB overlays to create durable, natural-looking extensions that enhance your nail health.",
    duration: "90-120 minutes",
    benefits: [
      "Custom length and shape",
      "BIAB strength technology",
      "Nail health preservation",
      "Long-lasting results",
      "Professional finish",
    ],
    includes: ["Nail mapping", "Cuticle therapy", "Extension application", "Shaping & filing", "Finishing serum"],
  },
  {
    title: "Gel Nail Art",
    image: "/w2.jpg",
    description: "Transform your nails into works of art with our hand-painted gel designs. From minimalist line work to editorial-level artistry, we use O.P.I, Japanese gels, and 9-free pigments for intense color payoff.",
    duration: "60-90 minutes",
    benefits: [
      "Hand-painted designs",
      "Long-lasting shine",
      "Custom artwork",
      "Premium pigments",
      "Editorial quality",
    ],
    includes: ["Design consultation", "Hand-painted art", "Gel polish application", "Top coat seal", "Art protection"],
  },
  {
    title: "Chrome Gel Polish",
    image: "/w3.jpg",
    description: "Get that mirror-like chrome finish with our premium chrome gel polish. Achieve a metallic, high-shine look that lasts for weeks with our professional-grade chrome technology.",
    duration: "45-60 minutes",
    benefits: [
      "Mirror-like finish",
      "Long-lasting shine",
      "Metallic effect",
      "Easy maintenance",
      "Trendy look",
    ],
    includes: ["Base coat", "Chrome application", "Top coat seal", "Cuticle care", "Finishing"],
  },
  {
    title: "Ombre Gel Polish",
    image: "/w4.jpg",
    description: "Beautiful gradient nail art with our ombre gel polish technique. Create seamless color transitions from light to dark or mix complementary colors for a stunning effect.",
    duration: "60-75 minutes",
    benefits: [
      "Seamless gradients",
      "Custom color combinations",
      "Professional blending",
      "Long-lasting finish",
      "Versatile designs",
    ],
    includes: ["Color consultation", "Gradient application", "Blending technique", "Top coat", "Finishing touches"],
  },
  {
    title: "Classic Manicure",
    image: "/w5.jpg",
    description: "A timeless manicure experience with nail shaping, cuticle care, hand massage, and polish application. Perfect for maintaining healthy, beautiful nails.",
    duration: "45 minutes",
    benefits: [
      "Nail health maintenance",
      "Hand relaxation",
      "Professional shaping",
      "Cuticle care",
      "Classic finish",
    ],
    includes: ["Nail shaping", "Cuticle care", "Hand massage", "Polish application", "Moisturizing"],
  },
  {
    title: "Organic Manicure",
    image: "/w6.jpg",
    description: "A natural, organic approach to nail care using plant-based products and gentle techniques. Perfect for those who prefer chemical-free treatments.",
    duration: "50 minutes",
    benefits: [
      "Chemical-free products",
      "Natural ingredients",
      "Gentle on nails",
      "Eco-friendly",
      "Nourishing care",
    ],
    includes: ["Organic products", "Natural oils", "Gentle shaping", "Herbal treatments", "Moisturizing"],
  },
  {
    title: "Classic Pedicure",
    image: "/w7.jpg",
    description: "Revitalize your feet with our classic pedicure. Includes foot soak, exfoliation, nail care, and polish application for soft, beautiful feet.",
    duration: "60 minutes",
    benefits: [
      "Foot relaxation",
      "Smooth skin",
      "Nail care",
      "Improved circulation",
      "Fresh appearance",
    ],
    includes: ["Foot soak", "Exfoliation", "Nail shaping", "Cuticle care", "Polish application"],
  },
  {
    title: "Organic Pedicure",
    image: "/w2.jpg",
    description: "A natural pedicure experience using organic products and botanical ingredients. Perfect for sensitive skin and eco-conscious clients.",
    duration: "65 minutes",
    benefits: [
      "Organic products",
      "Natural exfoliation",
      "Botanical ingredients",
      "Gentle treatment",
      "Eco-friendly",
    ],
    includes: ["Organic foot soak", "Natural scrubs", "Botanical masks", "Herbal oils", "Polish application"],
  },
  {
    title: "Candle Spa Manicure",
    image: "/w3.jpg",
    description: "Luxurious manicure with molten-wax massage therapy. Experience deep hydration and relaxation with our signature candle spa treatment.",
    duration: "75 minutes",
    benefits: [
      "Deep hydration",
      "Relaxing massage",
      "Wax therapy",
      "Intense moisturizing",
      "Premium experience",
    ],
    includes: ["Wax therapy", "Hand massage", "Hydrating treatment", "Nail care", "Polish application"],
  },
  {
    title: "Candle Spa Pedicure",
    image: "/w4.jpg",
    description: "Ultimate foot pampering with candle spa therapy. Includes molten-wax massage, exfoliation, and premium nail care in our zero-gravity pods.",
    duration: "90 minutes",
    benefits: [
      "Deep foot hydration",
      "Wax massage therapy",
      "Complete relaxation",
      "Premium care",
      "Luxury experience",
    ],
    includes: ["Wax therapy", "Foot massage", "Exfoliation", "Nail care", "Polish application"],
  },
  {
    title: "Cut & File",
    image: "/w5.jpg",
    description: "Quick nail maintenance service for shaping and filing. Perfect for keeping your nails in perfect condition between full treatments.",
    duration: "20 minutes",
    benefits: [
      "Quick service",
      "Professional shaping",
      "Maintains nail health",
      "Affordable",
      "Convenient",
    ],
    includes: ["Nail trimming", "Professional filing", "Shape refinement", "Quick polish"],
  },
  {
    title: "Colour Change",
    image: "/w6.jpg",
    description: "Refresh your look with a quick color change. We'll remove your current polish and apply a new color of your choice.",
    duration: "30 minutes",
    benefits: [
      "Quick refresh",
      "New color option",
      "Maintains nail health",
      "Affordable",
      "Convenient",
    ],
    includes: ["Polish removal", "Nail prep", "New color application", "Top coat"],
  },
  {
    title: "Geleration",
    image: "/w7.jpg",
    description: "Long-wear gel polish application that extends the life of your manicure. Get weeks of chip-free, glossy nails with our geleration technique.",
    duration: "45-60 minutes",
    benefits: [
      "Long-lasting wear",
      "Chip-resistant",
      "High shine",
      "Durable finish",
      "Weeks of wear",
    ],
    includes: ["Nail prep", "Base coat", "Gel polish", "Curing process", "Top coat"],
  },
  {
    title: "French Geleration",
    image: "/w1.jpg",
    description: "Classic French manicure with long-wear gel polish. Achieve that timeless white-tipped look that lasts for weeks.",
    duration: "50-65 minutes",
    benefits: [
      "Classic French look",
      "Long-lasting",
      "Elegant appearance",
      "Professional finish",
      "Versatile style",
    ],
    includes: ["Nail prep", "Base color", "French tip application", "Gel curing", "Top coat"],
  },
  {
    title: "Nail Extension Infill",
    image: "/w2.jpg",
    description: "Maintain your nail extensions with our professional infill service. We'll fill in the growth area and refresh your extensions to keep them looking perfect.",
    duration: "60-75 minutes",
    benefits: [
      "Extends extension life",
      "Maintains appearance",
      "Cost-effective",
      "Professional maintenance",
      "Keeps nails healthy",
    ],
    includes: ["Growth area prep", "Infill application", "Shaping", "Refinishing", "Top coat"],
  },
];

export default function NailCouture() {
  const containerRefs = useRef([]);
  const cardRefs = useRef([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleScroll = (groupIdx, direction) => {
    const container = containerRefs.current[groupIdx];
    const card = cardRefs.current[groupIdx];
    if (!container || !card) return;

    const gapWidth = 24; // gap-6 = 1.5rem = 24px
    const cardWidth = card.offsetWidth + gapWidth;
    const target =
      container.scrollLeft + (direction === "right" ? cardWidth : -cardWidth);

    container.scrollTo({
      left: target,
      behavior: "smooth",
    });
  };

  const groups = [
    {
      title: "Hands & Extensions",
      description: "Chrome couture, gel artistry, BIAB overlays, and manicure rituals.",
      items: galleryItems.slice(0, 7),
    },
    {
      title: "Spa & Finishing",
      description: "Pedicure suites, candle spa indulgence, cut & file refreshers, and geleration.",
      items: galleryItems.slice(7),
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
      <section id="nail-couture" className="bg-gradient-to-b from-[#fff7fb] via-white to-white">
      {/* Full-width hero */}
      <div className="relative w-full overflow-hidden">
        <video
          src="/nail_vi.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-[60vh] min-h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col justify-center gap-5 px-8 text-white md:px-20 lg:px-32">
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.5em] text-pink-200/90">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1">BIAB</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1">Chrome</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1">Spa Rituals</span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight drop-shadow-lg md:text-5xl" style={{ fontFamily: "serif" }}>
            Nail Salon Menu by SCENT
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
            Gel polish, acrylic nail extensions, nail art, O.P.I finishes, chrome polish, ombre nails, cat eye
            gel polish, gel French polish, glam polish, and more—delivered with BIAB strength and
            med-grade hygiene.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/75">
            <span className="rounded-full border border-white/30 px-5 py-1.5">Concierge Artists</span>
            <span className="rounded-full border border-white/30 px-5 py-1.5">Med-grade Hygiene</span>
            <span className="rounded-full border border-white/30 px-5 py-1.5">Seasonal Capsules</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full flex-col gap-12 px-6 py-16 md:px-12 lg:px-20">
        {/* Highlight */}
        <div className="w-full rounded-[32px] border border-white/70 bg-gradient-to-r from-white/90 via-pink-50/70 to-purple-50/70 px-10 py-10 text-center shadow-[0px_30px_120px_rgba(255,182,193,0.25)] transition hover:-translate-y-1">
          <div className="mx-auto flex max-w-4xl flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#C06C84]" style={{ fontFamily: "serif" }}>
              Bangalore Nail Flagship Menu
            </p>
            <h3
              className="text-2xl font-semibold text-[#1f1f2e] sm:text-[30px]"
              style={{ fontFamily: "serif" }}
            >
              Six signature rituals covering every fingertip — from chrome couture to spa pedicures.
            </h3>
            <p className="text-base leading-relaxed text-[#555] sm:text-lg">
              Choose between nail extensions, gel art, chrome overlays, manicure rituals, pedicure suites, or finishing touches.
              Each experience is powered by BIAB science, med-grade hygiene, and artists trained to sculpt perfection.
            </p>
          </div>
        </div>

        {/* Gallery groups */}
        {groups.map((group, groupIdx) => (
          <div key={group.title} className="space-y-6 rounded-[36px] border border-white/70 bg-white/70 p-6 shadow-[0px_30px_120px_rgba(0,0,0,0.08)]">
            <div className="text-center lg:text-left">
              <p className="text-base font-semibold uppercase tracking-[0.5em] text-black">
                {group.title}
              </p>
              <p className="text-lg font-medium text-[#444]">{group.description}</p>
            </div>
            <div className="relative">
              <div
                ref={(el) => {
                  containerRefs.current[groupIdx] = el;
                }}
                className={`flex snap-x snap-mandatory gap-6 scroll-smooth px-6 py-10 ${
                  groupIdx === 0
                    ? "overflow-x-auto lg:overflow-hidden lg:justify-start"
                    : "overflow-x-auto lg:overflow-hidden lg:justify-start"
                }`}
                style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
              >
                {group.items.map((item, idx) => (
                  <div
                    key={item.title}
                    className="snap-start min-w-[320px] max-w-[360px] flex-shrink-0"
                    style={{
                      animationDelay: `${(groupIdx * 7 + idx) * 60}ms`,
                      animation: "fadeInUp 0.6s ease forwards",
                    }}
                  >
                    <div
                      ref={(el) => {
                        if (idx === 0) {
                          cardRefs.current[groupIdx] = el;
                        }
                      }}
                      className="group relative rounded-2xl border border-gray-200/50 bg-white shadow-md transition-all duration-300 ease-out hover:z-20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.2)] hover:scale-105 cursor-pointer"
                      style={{ willChange: "transform" }}
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          style={{ willChange: "transform" }}
                        />
                      </div>
                      <div className="flex items-center justify-between px-5 py-4">
                        <p className="text-sm font-semibold text-[#1f1f2e]">{item.title}</p>
                        <span className="text-xl text-black transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {(groupIdx === 0 || groupIdx === 1) && (
                <>
                  <button
                    type="button"
                    aria-label="Scroll nail cards left"
                    className="absolute left-4 top-1/2 hidden -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:bg-pink-500 hover:text-white transition-transform duration-300 hover:scale-110 lg:flex"
                    onClick={() => handleScroll(groupIdx, "left")}
                  >
                    <span className="text-xl font-bold">←</span>
                  </button>
                  <button
                    type="button"
                    aria-label="Scroll nail cards right"
                    className="absolute right-4 top-1/2 hidden -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:bg-pink-500 hover:text-white transition-transform duration-300 hover:scale-110 lg:flex"
                    onClick={() => handleScroll(groupIdx, "right")}
                  >
                    <span className="text-xl font-bold">→</span>
                  </button>
                </>
              )}
            </div>
          </div>
        ))}

        {/* Service Detail Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedItem(null)}
            style={{ animation: "fadeIn 0.3s ease" }}
          >
            <div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl transform transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
              style={{ animation: "slideUp 0.3s ease" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-black hover:bg-[#C06C84] hover:text-white transition-all duration-300 shadow-lg"
              >
                <span className="text-2xl font-bold">×</span>
              </button>

              {/* Image Section */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2" style={{ fontFamily: "serif" }}>
                    {selectedItem.title}
                  </h2>
                  <p className="text-white/90 text-sm md:text-base">{selectedItem.description}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-10 space-y-8">
                {/* Duration */}
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#C06C84]/10 px-4 py-2">
                    <span className="text-sm font-semibold text-[#C06C84]">Duration: {selectedItem.duration}</span>
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-semibold text-[#1f1f2e] mb-4" style={{ fontFamily: "serif" }}>
                    Key Benefits
                  </h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    {selectedItem.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 rounded-xl border border-gray-100 bg-pink-50/50 px-4 py-3"
                      >
                        <span className="text-[#C06C84] text-xl leading-none mt-0.5">❀</span>
                        <p className="text-sm text-[#444] leading-relaxed">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Includes */}
                <div>
                  <h3 className="text-xl font-semibold text-[#1f1f2e] mb-4" style={{ fontFamily: "serif" }}>
                    What's Included
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedItem.includes.map((item, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-[#C06C84]/30 bg-white px-5 py-2 text-sm font-medium text-[#C06C84]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                  <button className="flex-1 md:flex-none rounded-full bg-[#C06C84] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#C06C84]/90 hover:scale-105">
                    Book Now
                  </button>
                  <button className="flex-1 md:flex-none rounded-full border-2 border-[#C06C84] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C06C84] transition hover:bg-[#C06C84] hover:text-white hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <PowerTeam />
      </div>
    </section>
    </>
  );
}


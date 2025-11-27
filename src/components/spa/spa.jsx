"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import WhyScent from "../why/why";
import PowerTeam from "../Thepower/thepower";

const spaServices = [
  {
    title: "Head Massage",
    description:
      "Relieve tension, improve circulation, and calm the nervous system with focused pressure and rhythmic strokes across the scalp, neck, and shoulders.",
    image: "/m (1).jpg",
    duration: "30-45 minutes",
    benefits: [
      "Reduces headaches and migraines",
      "Improves blood circulation",
      "Relieves stress and anxiety",
      "Promotes better sleep",
      "Enhances mental clarity",
    ],
    techniques: ["Scalp massage", "Neck and shoulder work", "Pressure point therapy", "Aromatherapy"],
  },
  {
    title: "Foot Massage",
    description:
      "Target pressure points in the feet to ease fatigue, boost circulation, and restore balance after long days on the move.",
    image: "/m (2).jpg",
    duration: "45 minutes",
    benefits: [
      "Relieves foot pain and fatigue",
      "Stimulates reflex points",
      "Improves circulation",
      "Reduces swelling",
      "Promotes overall wellness",
    ],
    techniques: ["Reflexology", "Deep pressure", "Stretching", "Hot towel wrap"],
  },
  {
    title: "Thai Reflexology",
    description:
      "A traditional technique that stimulates mapped reflex points on the feet to support overall organ health, energy flow, and deep relaxation.",
    image: "/m (3).jpg",
    duration: "60 minutes",
    benefits: [
      "Balances energy flow",
      "Supports organ function",
      "Reduces stress",
      "Improves flexibility",
      "Enhances overall health",
    ],
    techniques: ["Pressure point mapping", "Traditional Thai techniques", "Energy balancing", "Herbal compresses"],
  },
  {
    title: "Back Massage",
    description:
      "Focused work on the upper, mid, and lower back to release knots, ease stiffness, and melt desk-related stress.",
    image: "/m (4).jpg",
    duration: "45-60 minutes",
    benefits: [
      "Relieves back pain",
      "Reduces muscle tension",
      "Improves posture",
      "Increases flexibility",
      "Eases stress and anxiety",
    ],
    techniques: ["Deep tissue work", "Kneading", "Stretching", "Hot stone therapy"],
  },
  {
    title: "Aroma Massage",
    description:
      "A gentle full-body massage paired with therapeutic essential oils chosen to uplift, calm, or rebalance your mood.",
    image: "/m (5).jpg",
    duration: "60-90 minutes",
    benefits: [
      "Mood enhancement",
      "Stress relief",
      "Improved sleep",
      "Skin nourishment",
      "Emotional balance",
    ],
    techniques: ["Swedish massage", "Essential oil selection", "Aromatherapy", "Full body coverage"],
  },
  {
    title: "Thai Massage",
    description:
      "A mat-based, clothes-on treatment combining passive stretches, acupressure, and assisted yoga-like movements to open joints and energise the body.",
    image: "/m (6).jpg",
    duration: "60-90 minutes",
    benefits: [
      "Increases flexibility",
      "Improves circulation",
      "Reduces muscle tension",
      "Enhances energy flow",
      "Promotes relaxation",
    ],
    techniques: ["Passive stretching", "Acupressure", "Yoga-like movements", "Energy work"],
  },
  {
    title: "Deep Tissue Massage",
    description:
      "Intensive work into deeper muscle layers to address chronic tightness, sports strain, and long-held tension patterns.",
    image: "/m (7).jpg",
    duration: "60-90 minutes",
    benefits: [
      "Breaks down scar tissue",
      "Relieves chronic pain",
      "Improves range of motion",
      "Reduces inflammation",
      "Aids in injury recovery",
    ],
    techniques: ["Deep pressure", "Trigger point therapy", "Friction techniques", "Myofascial release"],
  },
  {
    title: "Sportz Massage",
    description:
      "Performance-focused massage for athletes and active clients, blending stretching, trigger-point work, and muscle flushing to aid recovery.",
    image: "/m (8).jpg",
    duration: "60-90 minutes",
    benefits: [
      "Faster recovery",
      "Prevents injuries",
      "Improves performance",
      "Reduces muscle soreness",
      "Enhances flexibility",
    ],
    techniques: ["Sports-specific techniques", "Trigger point work", "Stretching", "Muscle flushing"],
  },
  {
    title: "Balinese Massage",
    description:
      "A rhythmic, oil-based ritual combining long strokes, kneading, and gentle acupressure inspired by traditional Balinese spa culture.",
    image: "/m (9).jpg",
    duration: "60-90 minutes",
    benefits: [
      "Deep relaxation",
      "Improves circulation",
      "Reduces stress",
      "Nourishes skin",
      "Balances energy",
    ],
    techniques: ["Long flowing strokes", "Kneading", "Acupressure", "Traditional oils"],
  },
  {
    title: "Scent Signature Massage",
    description:
      "Our bespoke hero treatment that blends aromatherapy, warm compresses, and mixed techniques tailored to your mood, stress level, and lifestyle.",
    image: "/m (10).jpg",
    duration: "90 minutes",
    benefits: [
      "Personalized treatment",
      "Mood enhancement",
      "Deep relaxation",
      "Stress relief",
      "Holistic wellness",
    ],
    techniques: ["Custom aromatherapy", "Warm compresses", "Mixed techniques", "Personalized approach"],
  },
  {
    title: "Stone Therapy",
    description:
      "Heated basalt stones glide across muscles to release deep tension while grounding the nervous system into a meditative calm.",
    image: "/m (11).jpg",
    duration: "75-90 minutes",
    benefits: [
      "Deep muscle relaxation",
      "Improved circulation",
      "Reduced stress",
      "Better sleep",
      "Pain relief",
    ],
    techniques: ["Hot stone placement", "Stone massage", "Cold stone therapy", "Aromatherapy"],
  },
  {
    title: "Body Polish",
    description:
      "A creamy exfoliating treatment that buffs away dullness using fine grains and nourishing oils, leaving skin luminous and silky.",
    image: "/m (12).jpg",
    duration: "60 minutes",
    benefits: [
      "Smoother skin",
      "Removes dead cells",
      "Improves skin texture",
      "Enhances glow",
      "Better product absorption",
    ],
    techniques: ["Gentle exfoliation", "Nourishing oils", "Full body treatment", "Moisturizing"],
  },
  {
    title: "Body Scrub",
    description:
      "Intensive, texture-focused exfoliation that deeply cleanses pores, smooths rough areas, and preps skin perfectly for hydration rituals.",
    image: "/m (13).jpg",
    duration: "60-75 minutes",
    benefits: [
      "Deep exfoliation",
      "Smoother skin",
      "Unclogs pores",
      "Improves circulation",
      "Prepares for hydration",
    ],
    techniques: ["Intensive scrubbing", "Texture focus", "Pore cleansing", "Hydration prep"],
  },
];

export default function SpaSection() {
  const containerRefs = useRef([]);
  const cardRefs = useRef([]);
  const [selectedService, setSelectedService] = useState(null);

  const handleScroll = (groupIdx, direction) => {
    const container = containerRefs.current[groupIdx];
    const card = cardRefs.current[groupIdx];
    if (!container || !card) return;

    const gapWidth = 24; // gap-6 = 1.5rem
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
      title: "Massage Rituals",
      description: "Head, foot, Thai, and aroma massages crafted for deep release and reset.",
      items: spaServices.slice(0, 7),
    },
    {
      title: "Spa & Body Care",
      description:
        "Full-body massages, stone therapy, polishes, and scrubs designed to renew skin and senses.",
      items: spaServices.slice(7),
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
      <section id="spa-services" className="bg-gradient-to-b from-pink-50/40 to-purple-50/40">
      {/* Full-width hero video */}
      <div className="relative w-full overflow-hidden">
        <video
          src="/massage.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-[60vh] min-h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        <div className="absolute inset-0 flex flex-col justify-center gap-4 px-8 text-white md:px-20 lg:px-32">
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.5em] text-pink-200/90">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1">
              Spa Rituals
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1">
              Massage
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1">
              Body Care
            </span>
          </div>
          <h1
            className="text-4xl font-semibold leading-tight drop-shadow-lg md:text-5xl"
            style={{ fontFamily: "serif" }}
          >
            Spa & Massage Experiences by SCENT
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
            From reflexology and deep tissue work to warm candle rituals and stone therapy, our spa
            menu is designed to help you decompress, realign, and glow from within.
          </p>
        </div>
      </div>

      <div className="mx-auto flex w-full flex-col gap-10 px-6 py-16 md:px-12 lg:px-20">
        {/* Highlight */}
        <div className="w-full rounded-[32px] border border-white/80 bg-gradient-to-r from-white/95 via-pink-50/80 to-purple-50/80 px-8 py-12 text-center shadow-[0px_30px_120px_rgba(255,182,193,0.25)] backdrop-blur-sm transition-all duration-500 hover:shadow-[0px_40px_140px_rgba(255,182,193,0.35)]">
          <div className="mx-auto flex max-w-3xl flex-col gap-4">
            <p
              className="text-sm font-semibold uppercase tracking-[0.4em] text-[#C06C84]"
              style={{ fontFamily: "serif" }}
            >
              Urban Escape
            </p>
            <h2
              className="text-2xl font-semibold text-[#1f1f2e] sm:text-[30px] leading-tight"
              style={{ fontFamily: "serif" }}
            >
              Curated spa rituals for head, hands, feet, and full body reset.
            </h2>
            <p className="text-base leading-relaxed text-[#555] sm:text-lg max-w-2xl mx-auto">
              Choose a single massage or build a ritual with scrubs, stones, and signature blends for
              a completely personalised spa journey.
            </p>
          </div>
        </div>

        {/* Two smooth-scroll spa groups (mirroring Nails) */}
        {groups.map((group, groupIdx) => (
          <div
            key={group.title}
            className="space-y-8 rounded-[36px] border border-white/80 bg-white/90 backdrop-blur-sm p-8 shadow-[0px_30px_120px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0px_40px_140px_rgba(0,0,0,0.12)]"
          >
            <div className="text-center lg:text-left space-y-2">
              <p className="text-base font-semibold uppercase tracking-[0.5em] text-black/80">
                {group.title}
              </p>
              <p className="text-lg font-medium text-[#444] leading-relaxed">{group.description}</p>
            </div>
            <div className="relative">
              <div
                ref={(el) => {
                  containerRefs.current[groupIdx] = el;
                }}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 scroll-smooth px-6 py-10 lg:overflow-hidden lg:justify-start [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {group.items.map((item, idx) => (
                  <div
                    key={item.title}
                    ref={(el) => {
                      if (idx === 0) {
                        cardRefs.current[groupIdx] = el;
                      }
                    }}
                    className="group snap-start min-w-[300px] max-w-[340px] flex-shrink-0 rounded-3xl bg-white border border-gray-200/60 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-out cursor-pointer overflow-hidden backdrop-blur-sm"
                    style={{
                      animationDelay: `${(groupIdx * 7 + idx) * 60}ms`,
                      animation: "fadeInUp 0.6s ease forwards",
                    }}
                    onClick={() => setSelectedService(item)}
                  >
                    <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <div className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 shadow-lg">
                          <span className="text-xs font-semibold text-[#C06C84]">View Details</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 px-6 py-5 bg-gradient-to-b from-white to-pink-50/30">
                      <div className="flex items-center justify-between">
                        <p className="text-base font-semibold text-[#1f1f2e] group-hover:text-[#C06C84] transition-colors duration-300">
                          {item.title}
                        </p>
                        <span className="text-2xl text-black/60 group-hover:text-[#C06C84] transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
                          →
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-[#666] line-clamp-3">{item.description}</p>
                      <div className="pt-2 border-t border-gray-100">
                        <span className="text-xs font-medium text-[#C06C84] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Learn more →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                aria-label="Scroll spa cards left"
                className="absolute left-2 top-1/2 hidden -translate-y-1/2 h-14 w-14 items-center justify-center rounded-full bg-white/95 backdrop-blur-md text-black shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:bg-[#C06C84] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_15px_50px_rgba(192,108,132,0.4)] lg:flex z-10"
                onClick={() => handleScroll(groupIdx, "left")}
              >
                <span className="text-xl font-bold">←</span>
              </button>
              <button
                type="button"
                aria-label="Scroll spa cards right"
                className="absolute right-2 top-1/2 hidden -translate-y-1/2 h-14 w-14 items-center justify-center rounded-full bg-white/95 backdrop-blur-md text-black shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:bg-[#C06C84] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_15px_50px_rgba(192,108,132,0.4)] lg:flex z-10"
                onClick={() => handleScroll(groupIdx, "right")}
              >
                <span className="text-xl font-bold">→</span>
              </button>
            </div>
          </div>
        ))}

        {/* Service Detail Modal */}
        {selectedService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedService(null)}
            style={{ animation: "fadeIn 0.3s ease" }}
          >
            <div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl transform transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
              style={{ animation: "slideUp 0.3s ease" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-black hover:bg-[#C06C84] hover:text-white transition-all duration-300 shadow-lg"
              >
                <span className="text-2xl font-bold">×</span>
              </button>

              {/* Image Section */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2" style={{ fontFamily: "serif" }}>
                    {selectedService.title}
                  </h2>
                  <p className="text-white/90 text-sm md:text-base">{selectedService.description}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-10 space-y-8">
                {/* Duration */}
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#C06C84]/10 px-4 py-2">
                    <span className="text-sm font-semibold text-[#C06C84]">Duration: {selectedService.duration}</span>
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-semibold text-[#1f1f2e] mb-4" style={{ fontFamily: "serif" }}>
                    Key Benefits
                  </h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    {selectedService.benefits.map((benefit, idx) => (
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

                {/* Techniques */}
                <div>
                  <h3 className="text-xl font-semibold text-[#1f1f2e] mb-4" style={{ fontFamily: "serif" }}>
                    Techniques Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedService.techniques.map((technique, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-[#C06C84]/30 bg-white px-5 py-2 text-sm font-medium text-[#C06C84]"
                      >
                        {technique}
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

        <WhyScent />
        <PowerTeam />
      </div>
    </section>
    </>
  );
}


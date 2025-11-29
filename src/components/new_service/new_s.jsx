"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import WhyScent from "../why/why";
import PowerTeam from "../Thepower/thepower";

const serviceCategories = [
  {
    id: "bridal-makeup",
    title: "Bridal Makeup",
    subtitle: "Red-carpet moments for your forever photographs.",
    description:
      "Custom couture makeup, skin prep rituals, and veil-proof wear built for lights, lenses, and happy tears. Our bridal artists coordinate with your wardrobe, jewellery, and timeline for seamless transitions from pheras to reception.",
    image: "/beautiful-young-woman-wearing-sari.jpg",
    highlights: [
      "Look trials & face-chart planning",
      "Luxe skin + hair prep add-ons",
      "On-location artist concierge",
    ],
  },
  {
    id: "microblading",
    title: "Eyebrow Microblading",
    subtitle: "Feather-weight strokes for fuller, symmetrical brows.",
    description:
      "Our PMU artists map your natural arches, brow bone, and undertone before crafting hair-like strokes that heal soft and realistic. Includes aftercare kit and complimentary touch-up session.",
    image: "/young-woman-getting-beauty-treatment-her-eyebrows.jpg",
    highlights: [
      "Advanced hygiene protocols",
      "Custom pigment-matching",
      "14-day follow up support",
    ],
  },
  {
    id: "beauty-essentials",
    title: "Beauty Essentials",
    subtitle: "Skin-perfecting clean-ups, express facials, and dermaplaning.",
    description:
      "A curated essentials bar for monthly skin maintenance—think oxygen facials, enzyme polish, LED boosts, and brightening masks tailored to the Indian climate.",
    image: "/woman-relaxing-with-facial-mask-spa.jpg",
    highlights: ["Derm-grade actives", "LED & cryo tools", "Personalised home care"],
  },
  {
    id: "spa",
    title: "Spa Rituals",
    subtitle: "Full-body melt downs blending aroma, stretch, and steam.",
    description:
      "Indulge in rainforest-inspired scrubs, candle massages, and deep relax therapies delivered inside private cocoon suites. Pair with hydrotherapy or scalp detox for top-to-toe renewal.",
    image: "/young-woman-relaxing-spa-salon.jpg",
    highlights: ["Sound bath add-ons", "Ayur + western blends", "Post-massage tea service"],
  },
  {
    id: "lashes",
    title: "Luxury Lashes",
    subtitle: "Volume fans, classics, and keratin lifts for expressive eyes.",
    description:
      "From subtle lifts to Hollywood drama, our lash stylists customise curl, thickness, and mapping to complement your eye shape. Medical-grade adhesives ensure comfort for weeks.",
    image: "/elegant-makeup-portrait.jpg",
    highlights: ["Damage-free removals", "Protective aftercare", "Patch-test guarantee"],
  },
  {
    id: "hair-salon",
    title: "Hair Salon",
    subtitle: "Precision cuts, glass-hair blowouts, and couture colour.",
    description:
      "Sassoon-trained stylists reimagine your silhouette with custom colour melting, lived-in blonding, and silkening rituals powered by bond-building science.",
    image: "/hairdresser-taking-care-her-client.jpg",
    highlights: ["Cut + colour mapping", "Scalp health diagnostics", "Keratin & botox bar"],
  },
  {
    id: "nail-salon",
    title: "Nail Salon",
    subtitle: "Gel sculpting, BIAB overlays, and minimalist art.",
    description:
      "From luxe chrome to French redux, our nail atelier houses medical-grade hygiene, Japanese gels, and vitamin-infused overlays for stronger natural nails.",
    image: "/beautiful-woman-with-towel-holding-lily.jpg",
    highlights: ["Zero-dust e-filing", "Custom press-ons", "Cuticle therapy add-ons"],
  },
  {
    id: "facial",
    title: "Facial Lounge",
    subtitle: "Clinical facials meet sensorial calm.",
    description:
      "Choose from hydra-dermabrasion, glass-skin infusion, or LED collagen boosts. Every facial is paired with aromatherapy breathing rituals for a mindful reset.",
    image: "/woman-relaxing-with-facial-mask-spa.jpg",
    highlights: ["Skin coach consultation", "Tech-assisted delivery", "Custom mask layering"],
  },
];

export default function NewServicesShowcase() {
  const [activeService, setActiveService] = useState(serviceCategories[0]);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section id="services-showcase" className="relative overflow-hidden bg-white">
      {/* Video Hero Section */}
      <div className="relative h-[85vh] md:h-[90vh] overflow-hidden">
        <video
          ref={videoRef}
          src="/Beauty_video.mp4"
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.5em] text-white border border-white/20">
              <span className="text-pink-300 text-xl">❀</span> Luxe Curation
            </div>
            <h1 className="mb-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-7xl" style={{ fontFamily: "serif" }}>
              Salon Services, Reimagined
              <span className="block mt-3 text-pink-300">for the Modern Muse</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
              Bridal couture, spa journeys, brow artistry, and technology-led facials gathered
              into one opulent experience. Discover our curated collection of premium services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3">
                <p className="text-sm font-semibold text-white">8 Studios</p>
                <p className="text-xs text-white/70">Premium Locations</p>
              </div>
              <div className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3">
                <p className="text-sm font-semibold text-white">40+ Artists</p>
                <p className="text-xs text-white/70">Expert Professionals</p>
              </div>
              <div className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3">
                <p className="text-sm font-semibold text-white">200+ Services</p>
                <p className="text-xs text-white/70">Comprehensive Menu</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative bg-gradient-to-b from-white via-[#fef9fb] to-white py-24 md:py-32">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-pink-50/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-rose-50/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-100 px-5 py-2 text-xs font-semibold text-pink-600 shadow-lg">
              <span className="text-pink-500 text-lg">❀</span> Our Services
            </div>
            <h2 className="mb-4 text-4xl font-semibold leading-tight text-[#1f1f2e] md:text-5xl lg:text-6xl" style={{ fontFamily: "serif" }}>
              Discover Excellence
            </h2>
            <div className="mx-auto w-24 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mb-6" />
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#666] md:text-lg">
              Explore our comprehensive range of premium beauty and wellness services, each crafted to perfection
            </p>
          </div>

          {/* Elegant Grid Layout - 3 Columns */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
            {serviceCategories.map((service, idx) => {
              const deepLinks = {
                "hair-salon": "/services#hair-salon",
                "bridal-makeup": "/bridal",
                "nail-salon": "/nails",
                spa: "/spa",
                microblading: "/microblading",
                "beauty-essentials": "/beauty-essentials",
                lashes: "/lashes",
                facial: "/facial",
              };
              const href = deepLinks[service.id];
              const Wrapper = href ? "a" : "button";
              const wrapperProps = href
                ? { href }
                : {
                    type: "button",
                    onClick: () => setActiveService(service),
                  };

              return (
                <Wrapper
                  key={service.id}
                  {...wrapperProps}
                  className="group block text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-200/60"
                >
                  <article
                    className="relative h-full overflow-hidden rounded-[36px] border-2 border-gray-100 bg-white shadow-lg transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-2xl group-hover:border-pink-300"
                    style={{ animationDelay: `${idx * 100}ms`, animation: "fadeInUp 0.8s ease forwards" }}
                  >
                    {/* Elegant Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fef9fb] to-white opacity-100 group-hover:from-pink-50/40 group-hover:via-rose-50/30 group-hover:to-pink-50/40 transition-all duration-500 z-0" />
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1200 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none z-10" />
                    
                    {/* Image Section */}
                    <div className="relative overflow-hidden rounded-t-[36px] h-[280px] md:h-[320px]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={900}
                        height={600}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      
                      {/* Elegant Number Badge */}
                      <div className="absolute top-6 left-6">
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/95 backdrop-blur-md border-2 border-white/50 shadow-xl">
                          <span className="text-lg font-bold text-[#1f1f2e]" style={{ fontFamily: "serif" }}>
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      {/* Service Title Overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-semibold text-white mb-1 group-hover:text-pink-200 transition-colors duration-300" style={{ fontFamily: "serif" }}>
                          {service.title}
                        </h3>
                        <p className="text-sm text-white/90">{service.subtitle}</p>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="relative z-20 p-8 bg-white rounded-b-[36px]">
                      <div className="space-y-5">
                        {/* Description */}
                        <p className="text-sm leading-relaxed text-[#666] line-clamp-2">
                          {service.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-2 pt-2 border-t border-gray-100">
                          {service.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-center gap-3 text-xs text-[#555]">
                              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-pink-400" />
                              <span className="font-medium">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="text-sm font-semibold text-pink-600 uppercase tracking-wider">
                            Learn More
                          </span>
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-50 border-2 border-pink-100 group-hover:bg-pink-100 group-hover:border-pink-200 transition-all duration-300">
                            <span className="text-xl text-pink-600 transition-transform duration-300 group-hover:translate-x-1">
                              →
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Corner Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100/50 to-transparent rounded-bl-[36px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-rose-100/50 to-transparent rounded-tr-[36px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </article>
                </Wrapper>
              );
            })}
          </div>

          {/* Enhanced Detail Panel */}
          {activeService && (
            <div className="relative overflow-hidden rounded-[40px] border-2 border-pink-100 bg-gradient-to-br from-white via-[#fef9fb] to-white shadow-2xl">
              {/* Background Decorative Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-50/30 rounded-full blur-3xl" />
              
              <div className="relative z-10 grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12 lg:p-16">
                {/* Image Section */}
                <div className="relative overflow-hidden rounded-[32px] border-2 border-gray-100 shadow-xl">
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    width={1200}
                    height={900}
                    className="h-full min-h-[400px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="rounded-2xl bg-white/90 backdrop-blur-md px-6 py-4 shadow-xl border border-white/20">
                      <div className="flex items-center gap-3">
                        <span className="text-pink-500 text-2xl">❀</span>
                        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#1f1f2e]">
                          {activeService.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between gap-8 rounded-[32px] border-2 border-gray-100 bg-white/90 p-8 shadow-xl backdrop-blur-sm">
                  <div className="space-y-6">
                    <div>
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-xs font-semibold text-pink-600">
                        <span className="text-pink-500">❀</span> Premium Service
                      </div>
                      <h2
                        className="text-3xl font-semibold text-[#1f1f2e] mb-4 md:text-4xl"
                        style={{ fontFamily: "serif" }}
                      >
                        {activeService.subtitle}
                      </h2>
                      <p className="text-base leading-relaxed text-[#555] md:text-lg">
                        {activeService.description}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-gray-200">
                      <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#1f1f2e]">
                        Signature Touches
                      </p>
                      <div className="space-y-3">
                        {activeService.highlights.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-4 rounded-2xl border-2 border-pink-100 bg-gradient-to-br from-pink-50 to-white p-4 transition-all duration-300 hover:border-pink-200 hover:shadow-md"
                          >
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-2 h-2 rounded-full bg-pink-500" />
                            </div>
                            <p className="text-sm leading-relaxed text-[#444] font-medium">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
                    <button
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          const event = new CustomEvent("openBookAppointment", { detail: { service: activeService?.title || "Beauty Treatment" } });
                          window.dispatchEvent(event);
                        }
                      }}
                      className="w-full rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
                    >
                      Book {activeService.title}
                    </button>
                    <button className="w-full rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#1f1f2e] transition-all duration-300 hover:border-pink-300 hover:bg-pink-50">
                      Download Menu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <WhyScent />
      <PowerTeam />

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}


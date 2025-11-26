"use client";

import Image from "next/image";
import { useState } from "react";

const serviceCategories = [
  {
    id: "bridal-makeup",
    title: "Bridal Makeup",
    subtitle: "Red-carpet moments for your forever photographs.",
    description:
      "Custom couture makeup, skin prep rituals, and veil-proof wear built for lights, lenses, and happy tears. Our bridal artists coordinate with your wardrobe, jewellery, and timeline for seamless transitions from pheras to reception.",
    image: "/mehnd.jpg",
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
    image:
      "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    highlights: ["Derm-grade actives", "LED & cryo tools", "Personalised home care"],
  },
  {
    id: "spa",
    title: "Spa Rituals",
    subtitle: "Full-body melt downs blending aroma, stretch, and steam.",
    description:
      "Indulge in rainforest-inspired scrubs, candle massages, and deep relax therapies delivered inside private cocoon suites. Pair with hydrotherapy or scalp detox for top-to-toe renewal.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
    highlights: ["Sound bath add-ons", "Ayur + western blends", "Post-massage tea service"],
  },
  {
    id: "lashes",
    title: "Luxury Lashes",
    subtitle: "Volume fans, classics, and keratin lifts for expressive eyes.",
    description:
      "From subtle lifts to Hollywood drama, our lash stylists customise curl, thickness, and mapping to complement your eye shape. Medical-grade adhesives ensure comfort for weeks.",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=900&q=80",
    highlights: ["Damage-free removals", "Protective aftercare", "Patch-test guarantee"],
  },
  {
    id: "hair-salon",
    title: "Hair Salon",
    subtitle: "Precision cuts, glass-hair blowouts, and couture colour.",
    description:
      "Sassoon-trained stylists reimagine your silhouette with custom colour melting, lived-in blonding, and silkening rituals powered by bond-building science.",
    image:
      "https://images.unsplash.com/photo-1519415387722-a1c3bbef7168?auto=format&fit=crop&w=900&q=80",
    highlights: ["Cut + colour mapping", "Scalp health diagnostics", "Keratin & botox bar"],
  },
  {
    id: "nail-salon",
    title: "Nail Salon",
    subtitle: "Gel sculpting, BIAB overlays, and minimalist art.",
    description:
      "From luxe chrome to French redux, our nail atelier houses medical-grade hygiene, Japanese gels, and vitamin-infused overlays for stronger natural nails.",
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80",
    highlights: ["Zero-dust e-filing", "Custom press-ons", "Cuticle therapy add-ons"],
  },
  {
    id: "facial",
    title: "Facial Lounge",
    subtitle: "Clinical facials meet sensorial calm.",
    description:
      "Choose from hydra-dermabrasion, glass-skin infusion, or LED collagen boosts. Every facial is paired with aromatherapy breathing rituals for a mindful reset.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    highlights: ["Skin coach consultation", "Tech-assisted delivery", "Custom mask layering"],
  },
];

export default function NewServicesShowcase() {
  const [activeService, setActiveService] = useState(serviceCategories[0]);

  return (
    <section id="services-showcase" className="bg-gradient-to-b from-[#fdf8fb] via-white to-white py-20">
      <div className="mx-auto flex w-full flex-col gap-16 px-6 md:px-12 lg:px-20">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/40 bg-[#111]/[0.92] shadow-[0_30px_120px_rgba(15,15,15,0.45)]">
          <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-pink-200/10 blur-3xl" />
          <div className="grid gap-10 py-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-16 lg:py-20">
            <div className="relative z-10 space-y-6 px-10 text-white">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.5em] text-pink-200">
                <span className="text-pink-300 text-xl">❀</span> Luxe Curation
              </p>
              <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
                Salon Services, Reimagined for the Modern Muse
              </h1>
              <p className="text-base leading-relaxed text-white/85 md:text-lg">
                Bridal couture, spa journeys, brow artistry, and technology-led facials gathered
                into one opulent experience. Tap a category to preview its magic.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-white/70">
                <span className="rounded-full border border-white/20 px-5 py-1.5">
                  Concierge Stylists
                </span>
                <span className="rounded-full border border-white/20 px-5 py-1.5">
                  Medical-grade Hygiene
                </span>
                <span className="rounded-full border border-white/20 px-5 py-1.5">
                  Seasonal Capsules
                </span>
              </div>
            </div>
            <div className="relative z-10 pr-6">
              <div className="relative overflow-hidden rounded-[32px] border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&q=80"
                  alt="Salon luxury"
                  width={1400}
                  height={900}
                  className="h-[360px] w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-lg">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white">
                    Bangalore Flagship
                  </p>
                  <p className="text-xs text-white/70">8 studios • 40+ artists • 200 services</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((service, idx) => {
            const deepLinks = {
              "hair-salon": "/services#hair-salon",
              "bridal-makeup": "/bridal",
              "nail-salon": "/nails",
              spa: "/spa",
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
                  className="relative overflow-hidden rounded-[34px] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(15,15,15,0.1)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_40px_100px_rgba(15,15,15,0.18)]"
                  style={{ animationDelay: `${idx * 80}ms`, animation: "fadeIn 0.6s ease forwards" }}
                >
                  <div className="relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={900}
                      height={600}
                      className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl bg-white px-6 py-4 shadow-2xl">
                      <div>
                        <p className="text-lg font-semibold text-[#1f1f2e]">{service.title}</p>
                        <p className="text-xs text-gray-500">{service.subtitle}</p>
                      </div>
                      <span className="text-2xl text-black transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </article>
              </Wrapper>
            );
          })}
        </div>

        {/* Detail panel */}
        {activeService && (
          <div className="grid gap-10 rounded-[36px] border border-gray-100 bg-white/80 p-6 shadow-[0px_40px_140px_rgba(15,15,15,0.12)] md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div className="relative overflow-hidden rounded-[30px] border border-gray-100">
              <Image
                src={activeService.image}
                alt={activeService.title}
                width={1200}
                height={900}
                className="h-full min-h-[320px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                <span className="text-pink-300 text-xl">❀</span>
                <p className="text-sm uppercase tracking-[0.4em]">{activeService.title}</p>
              </div>
            </div>
            <div className="flex flex-col gap-8 rounded-[28px] border border-gray-100 bg-white/90 p-8">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-[#C06C84]">
                  {activeService.title}
                </p>
                <h2
                  className="text-3xl font-semibold text-[#1f1f2e]"
                  style={{ fontFamily: "serif" }}
                >
                  {activeService.subtitle}
                </h2>
                <p className="text-base leading-relaxed text-[#555]">
                  {activeService.description}
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#1f1f2e]">
                  Signature Touches
                </p>
                <div className="grid gap-3">
                  {activeService.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#fdf8fb] px-4 py-3 text-sm text-[#444]"
                    >
                      <span className="text-pink-400 text-xl leading-none">❀</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-black px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-black/85">
                  Book {activeService.title}
                </button>
                <button className="rounded-full border border-black px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#1f1f2e] transition hover:bg-black hover:text-white">
                  Download Menu
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


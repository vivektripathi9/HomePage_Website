"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const headingPhrases = [
  "Hair Salon Services in Bangalore",
  "Premium Haircuts & Colour in Bangalore",
  "Expert Stylists Crafting Iconic Looks",
  "Hair Salon Services in Bangalore",
];

const serviceCategories = [
  {
    id: "haircut-styling",
    title: "Haircut & Styling",
    description:
      "Signature dry and wet cutting, precision texturising, and couture blowouts designed to frame your features while keeping movement natural. Every session begins with a detailed face-shape consultation so your cut stays effortless for weeks.",
    detailedDescription:
      "Our Haircut & Styling service is a comprehensive hair transformation experience. We specialize in both dry and wet cutting techniques, allowing us to work with your hair's natural texture. Our expert stylists use precision texturising methods to add movement and dimension. Each session includes a personalized face-shape consultation to ensure your cut complements your features perfectly. We offer couture blowouts that give you that salon-fresh look, and our cuts are designed to grow out beautifully, staying effortless for weeks. Whether you want a classic cut, a modern layered style, or a precision bob, our Sassoon-trained stylists will create a look that's uniquely yours.",
    image: "/hairdresser-taking-care-her-client.jpg",
    services: [
      { name: "Classic Haircut", price: "₹1,299" },
      { name: "Designer Layered Cut", price: "₹1,899" },
      { name: "Precision Bob", price: "₹1,699" },
      { name: "Runway Blowout", price: "₹1,499" },
      { name: "Red-Carpet Updo", price: "₹2,999" },
      { name: "Express Styling", price: "₹999" },
    ],
  },
  {
    id: "highlights-streaks",
    title: "Highlights & Streaks",
    description:
      "Lived-in balayage, foil brilliance, and bold streaks created with bond-protect colour systems that keep hair glossy. We map complexion, undertone, and lifestyle before placing a single foil so the light always hits right.",
    detailedDescription:
      "Our Highlights & Streaks service transforms your hair with professional color techniques. We specialize in lived-in balayage that creates natural-looking dimension, foil highlights for precise color placement, and bold streaks for those who want to make a statement. All our coloring services use bond-protect color systems that not only add beautiful color but also strengthen and protect your hair, keeping it glossy and healthy. Before we place a single foil, we conduct a thorough consultation analyzing your skin complexion, undertones, and lifestyle to ensure the color placement is perfect. Our techniques ensure the light always hits right, creating depth and dimension that looks natural and grows out beautifully.",
    image: "/elegant-makeup-portrait.jpg",
    services: [
      { name: "Global Balayage", price: "₹5,999" },
      { name: "Foil Highlights", price: "₹4,499" },
      { name: "Money-Piece Pop", price: "₹2,399" },
      { name: "Peekaboo Streaks", price: "₹2,199" },
      { name: "Root Shadow Blend", price: "₹2,899" },
      { name: "Colour Correction", price: "₹6,999" },
    ],
  },
  {
    id: "hair-spa",
    title: "Hair Spa Rituals",
    description:
      "Steam-powered rituals that combine scalp brushing, booster ampoules, and pressure-point massage to restore shine, strength, and calm. Choose hydration, detox, or shine protocols crafted specifically for your scalp condition.",
    detailedDescription:
      "Our Hair Spa Rituals are luxurious, steam-powered treatments designed to restore your hair's natural health and vitality. Each ritual combines therapeutic scalp brushing to stimulate circulation, specialized booster ampoules packed with nourishing ingredients, and relaxing pressure-point massage techniques. We offer three distinct protocols: Hydration for dry, damaged hair that needs moisture; Detox for removing product buildup and impurities; and Shine for restoring natural luster and gloss. Our expert therapists assess your scalp condition and customize the treatment to address your specific needs. The steam therapy opens hair cuticles, allowing deep penetration of nutrients, while the massage promotes relaxation and reduces stress. This comprehensive approach not only improves hair health but also provides a calming, rejuvenating experience.",
    image: "/young-woman-relaxing-spa-salon.jpg",
    services: [
      { name: "Hydra Repair Spa", price: "₹2,299" },
      { name: "Keratin Spa Ritual", price: "₹2,899" },
      { name: "Scalp Detox Steam", price: "₹1,999" },
      { name: "Damage Reset Spa", price: "₹2,499" },
      { name: "Ice Head Spa", price: "₹2,099" },
      { name: "Aromatic Calm Spa", price: "₹1,899" },
    ],
  },
  {
    id: "hair-treatments",
    title: "Hair Treatments",
    description:
      "Clinical-strength keratin, botox, and bond-building therapies that tame frizz, seal the cuticle, and repair damage from within. Ideal before milestone events or as seasonal hair rehab for stressed strands.",
    detailedDescription:
      "Our Hair Treatments are intensive, clinical-strength therapies designed to transform damaged, frizzy, or stressed hair. We offer keratin treatments that smooth and straighten hair while adding strength and shine. Our hair botox therapy provides deep conditioning and repair, filling in gaps in damaged hair cuticles. Bond-building treatments like Olaplex work at the molecular level to repair broken disulfide bonds, restoring hair's structural integrity. These treatments effectively tame frizz, seal the cuticle for smoothness, and repair damage from within. Perfect for preparing for milestone events like weddings or special occasions, or as seasonal hair rehabilitation for hair that's been stressed by styling, coloring, or environmental factors. Each treatment is customized to your hair's specific needs and condition.",
    image: "/beautiful-woman-with-towel-holding-lily.jpg",
    services: [
      { name: "Keratin Therapy", price: "₹6,499" },
      { name: "Hair Botox Revival", price: "₹5,999" },
      { name: "Olaplex Rebond", price: "₹4,299" },
      { name: "Anti-Frizz Shield", price: "₹3,799" },
      { name: "Scalp Detox Shot", price: "₹2,299" },
      { name: "Micromist Therapy", price: "₹3,199" },
    ],
  },
  {
    id: "beard-styling",
    title: "Beard Styling",
    description:
      "Clipper fades, razor detailing, and nourishing oils curated for contemporary beards and classic grooms alike. We map face shape, neckline, and growth pattern to deliver silhouettes that stay sharp for days.",
    detailedDescription:
      "Our Beard Styling service is a precision grooming experience tailored to your unique facial features. We specialize in clipper fades that create seamless transitions, razor detailing for sharp, clean lines, and the application of nourishing oils that keep your beard healthy and manageable. Our expert barbers analyze your face shape, natural neckline, and growth patterns to design a beard silhouette that complements your features perfectly. Whether you prefer a contemporary, modern look or a classic, traditional style, we craft your beard to stay sharp and well-groomed for days. Our services include precision trims, hot towel shaves for the ultimate smooth finish, color blending for a natural look, and spa rituals that condition and style your beard. Every service is performed with professional tools and premium products to ensure the best results.",
    image: "/beard.jpg",
    services: [
      { name: "Precision Beard Trim", price: "₹799" },
      { name: "Beard Fade & Line-up", price: "₹999" },
      { name: "Hot Towel Shave", price: "₹1,199" },
      { name: "Colour & Blend", price: "₹1,499" },
      { name: "Beard Spa Ritual", price: "₹1,299" },
      { name: "Sculpt + Style", price: "₹1,099" },
    ],
  },
  {
    id: "mustache-design",
    title: "Mustache Design",
    description:
      "Classic tapers, curled ends, and sculpted lines for every kind of mustache—from vintage handlebar to minimalist fades. Finish with waxes and serums so your look stays expressive from morning to midnight.",
    detailedDescription:
      "Our Mustache Design service is an art form that transforms your facial hair into a statement piece. We offer classic taper trims for a timeless look, curled ends for vintage handlebar styles, and sculpted lines for modern, minimalist designs. Our skilled barbers work with precision to create the perfect mustache shape that matches your personal style and facial structure. We finish every service with premium waxes that hold your style in place and nourishing serums that keep your mustache healthy and manageable. Whether you want a bold, expressive handlebar, a subtle minimalist fade, or a classic tapered look, we'll design it to stay perfect from morning to midnight. Our signature twirl technique adds character, while our color touch-up services ensure a natural, polished appearance. Each service includes styling tips and product recommendations to help you maintain your look at home.",
    image: "/mustache.jpg",
    services: [
      { name: "Classic Taper Trim", price: "₹399" },
      { name: "Handlebar Styling", price: "₹699" },
      { name: "Wax & Finish", price: "₹499" },
      { name: "Signature Twirl", price: "₹599" },
      { name: "Colour Touch-up", price: "₹799" },
      { name: "Nourish Serum Boost", price: "₹549" },
    ],
  },
];

export default function ServicesSection() {
  const [headingIndex, setHeadingIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [cartMessage, setCartMessage] = useState("");
  const cartTimeoutRef = useRef(null);

  const openBookAppointment = (serviceName) => {
    if (typeof window !== "undefined") {
      const event = new CustomEvent("openBookAppointment", { detail: { service: serviceName || "" } });
      window.dispatchEvent(event);
    }
  };

  const handleBookAppointment = (event, label = "Service") => {
    event?.stopPropagation();
    openBookAppointment(label);
  };

  // Ensure component is mounted before starting animations (prevents hydration mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setHeadingIndex((prev) => (prev + 1) % headingPhrases.length);
    }, 4000);

    return () => {
      clearInterval(interval);
      if (cartTimeoutRef.current) {
        clearTimeout(cartTimeoutRef.current);
      }
    };
  }, [mounted]);

  return (
    <section id="services" className="bg-white">
      {/* Hero Video Full Width */}
      <div className="relative w-full overflow-hidden">
        <video
          src="/service_video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-[60vh] min-h-[480px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 px-10 py-12 text-white md:px-20 lg:px-32">
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl" style={{ fontFamily: "serif" }}>
            Hair Services
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-white/90 md:text-lg lg:text-xl">
            Visit SCENT Hair Salon for top-notch haircuts, hair coloring, hair spa, and hair smoothening
            services performed by expert stylists trained by Sassoon. Your journey to fabulous hair starts here!
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-8 px-20 py-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2
            className="text-4xl font-semibold leading-tight text-[#2A2A35] sm:text-[56px]"
            style={{ fontFamily: "serif" }}
          >
            <span
              key={mounted ? headingIndex : 0}
              className="inline-block"
              style={{ animation: "fadeIn 1s ease forwards" }}
            >
              {mounted ? headingPhrases[headingIndex] : headingPhrases[0]}
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-black" />
            <span className="text-pink-400 text-xl">❀</span>
            <span className="h-px w-16 bg-black" />
          </div>
          <p className="max-w-3xl text-base leading-relaxed text-[#555] sm:text-lg">
            Discover our comprehensive range of beauty and wellness services, each designed to help you look and feel your absolute best.
          </p>
        </div>

        {/* Bangalore Highlight */}
        <div className="w-full rounded-[28px] border border-gray-100 bg-white px-10 py-8 text-center shadow-[0px_25px_70px_rgba(0,0,0,0.05)]">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#C06C84]" style={{ fontFamily: "serif" }}>
            Bangalore Flagship Menu
          </p>
          <h3
            className="mt-3 text-2xl font-semibold text-[#1f1f2e] sm:text-[30px] transition-all duration-700 ease-out hover:scale-[1.02] hover:text-[#C06C84]"
            style={{ fontFamily: "serif" }}
          >
            Six signature rituals covering every strand — from cuts to mustache finesse.
          </h3>
          <p className="mt-4 text-base leading-relaxed text-[#555] sm:text-lg">
            Choose your lane: haircuts, highlights, spa rituals, intensive treatments, beard styling, or mustache design.
            Each service is crafted by Sassoon-trained stylists for flawless results.
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid w-full gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category) => {
            const isActive = activeService === category.id;
            return (
              <div
                key={category.id}
                id={category.id}
                className={`group relative flex flex-col cursor-pointer overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0px_25px_70px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0px_35px_90px_rgba(0,0,0,0.12)] ${
                  isActive ? "ring-2 ring-[#ffb7c3]" : ""
                }`}
                onClick={() => setActiveService(category.id)}
              >
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p 
                      className="pointer-events-auto cursor-pointer text-sm tracking-[0.3em] uppercase text-pink-100 transition-all hover:scale-110 hover:text-white" 
                      style={{ fontFamily: "serif" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveService(category.id);
                      }}
                    >
                      {category.title}
                    </p>
                    <p 
                      className="pointer-events-auto cursor-pointer text-xs leading-relaxed text-white/80 transition-all hover:text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveService(category.id);
                      }}
                    >
                      Hover to preview & click to reveal full service details.
                    </p>
                    <button
                      className="pointer-events-auto rounded-full border border-white/80 bg-white/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black hover:border-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        openBookAppointment(category.title);
                      }}
                    >
                      Book Now
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col gap-3 sm:gap-4 px-4 sm:px-6 pb-6 sm:pb-8 pt-8 sm:pt-12">
                  <div className="flex items-center justify-between">
                    <h3
                      className="text-lg sm:text-xl font-semibold text-[#22223b]"
                      style={{ fontFamily: "serif" }}
                    >
                      {category.title}
                    </h3>
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gray-400">
                      {isActive ? "Hide" : "View"}
                    </span>
                  </div>
                  <div
                    className={`space-y-3 text-sm text-gray-500 transition-all duration-500 ${
                      isActive ? "max-h-[400px] sm:max-h-[450px] md:max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    } overflow-y-auto`}
                  >
                    <p className="leading-relaxed font-medium text-xs sm:text-sm">{category.description}</p>
                    {category.detailedDescription && (
                      <div className="pt-2 border-t border-gray-200">
                        <p className="leading-relaxed text-[10px] sm:text-xs text-gray-600 mt-2 line-clamp-6 sm:line-clamp-none">
                          {category.detailedDescription}
                        </p>
                      </div>
                    )}
                    <button
                      className="w-fit rounded-full border border-black/20 px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#1f1f2e] transition-all hover:bg-black hover:text-white mt-3 sm:mt-4"
                      onClick={(e) => {
                        e.stopPropagation();
                        openBookAppointment(category.title);
                      }}
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fullscreen Modal */}
        {activeService && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4 py-4 sm:py-8 overflow-y-auto">
            <div className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-[40px] bg-white shadow-[0px_40px_120px_rgba(0,0,0,0.35)] md:flex-row my-auto max-h-[95vh]">
              {(() => {
                const activeCategory = serviceCategories.find((item) => item.id === activeService);
                if (!activeCategory) return null;
                return (
                  <>
                    <button
                      aria-label="Close modal"
                      className="absolute right-5 top-5 z-10 rounded-full border border-gray-200 bg-white/60 p-2 text-gray-600 transition hover:bg-black hover:text-white"
                      onClick={() => setActiveService(null)}
                    >
                      ✕
                    </button>
                    <div className="relative h-64 w-full md:h-auto md:w-1/2">
                      <Image
                        src={activeCategory.image}
                        alt={activeCategory.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                        quality={90}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm uppercase tracking-[0.4em]" style={{ fontFamily: "serif" }}>
                          {activeCategory.title}
                        </p>
                        <p className="text-xs text-white/80">Tailored rituals for every mood</p>
                      </div>
                    </div>
                    <div className="flex w-full flex-col gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 md:w-1/2 max-h-[85vh] overflow-y-auto">
                      <div className="flex flex-col gap-3">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-[#1f1f2e]" style={{ fontFamily: "serif" }}>
                          {activeCategory.title}
                        </h3>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-700 font-medium">{activeCategory.description}</p>
                        {activeCategory.detailedDescription && (
                          <div className="pt-3 border-t border-gray-200">
                            <p className="text-xs sm:text-sm leading-relaxed text-gray-600 mt-2">
                              {activeCategory.detailedDescription}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                          Service Menu
                        </p>
                        <div className="grid grid-cols-1 gap-2">
                          {activeCategory.services.map(({ name, price }) => (
                            <div
                              key={name}
                              className="flex flex-col rounded-2xl border border-gray-100 px-4 py-3 text-left sm:flex-row sm:items-center sm:justify-between"
                            >
                              <div className="flex items-center gap-2 text-sm text-gray-700">
                                <span className="text-pink-400">❀</span>
                                {name}
                              </div>
                              <span className="mt-2 text-sm font-semibold text-[#1f1f2e] sm:mt-0">
                                {price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-auto flex flex-wrap gap-3">
                        <button
                          className="rounded-full bg-black px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-black/80"
                          onClick={(e) => handleBookAppointment(e, activeCategory.title)}
                        >
                          Book Appointment
                        </button>
                        <button
                          className="rounded-full border border-black px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#1f1f2e] transition hover:bg-black hover:text-white"
                          onClick={() => setActiveService(null)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        <div className="mt-12 flex flex-col items-center gap-6 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-black" />
            <span className="text-pink-400 text-xl">❀</span>
            <span className="h-px w-12 bg-black" />
          </div>
          <h3 
            className="text-2xl font-semibold text-[#1f1f2e] sm:text-3xl"
            style={{ fontFamily: "serif" }}
          >
            Ready to Transform Your Look?
          </h3>
          <p className="max-w-2xl text-base text-gray-600">
            Reserve your ritual now and arrive to a stylist who already knows what you need.
          </p>
          <button
            className="rounded-md bg-red-600 px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-red-700"
            onClick={(e) => {
              e.preventDefault();
              openBookAppointment("Signature Service Bundle");
            }}
          >
            Book Appointment
          </button>
        </div>
      </div>
      {cartMessage && (
        <div className="pointer-events-none fixed bottom-6 right-6 z-[1100] rounded-full bg-black px-6 py-3 text-sm text-white shadow-2xl">
          {cartMessage}
        </div>
      )}
    </section>
  );
}


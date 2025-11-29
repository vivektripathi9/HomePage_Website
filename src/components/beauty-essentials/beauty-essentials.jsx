"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import PowerTeam from "../Thepower/thepower";
import WhyScent from "../why/why";

const serviceAreas = [
  {
    id: "face",
    name: "Face",
    shortDescription: "Comprehensive facial treatments for radiant, youthful skin.",
    description: "Our face treatments are designed to rejuvenate and enhance your natural beauty. We offer comprehensive facial treatments including professional waxing services, advanced detanning techniques, and cutting-edge anti-aging solutions. Our expert therapists use premium products and state-of-the-art equipment to deliver exceptional results. Whether you're looking to remove unwanted hair, brighten your complexion, or reduce signs of aging, our face treatments are tailored to meet your unique needs.",
    services: [
      { name: "Facial Waxing", description: "Professional hair removal using premium wax for smooth, hair-free skin" },
      { name: "Face Detanning", description: "Advanced treatments to remove tan and restore your natural skin tone" },
      { name: "Anti-Aging Mesotherapy", description: "Revolutionary mesotherapy treatments to reduce fine lines and wrinkles" },
      { name: "Skin Brightening", description: "Specialized treatments to lighten and brighten your complexion" },
      { name: "Acne Treatment", description: "Targeted solutions for acne-prone skin with visible results" },
    ],
    benefits: ["Smoother skin texture", "Reduced signs of aging", "Brighter complexion", "Professional care"],
    duration: "60-90 minutes",
    image: "/facce.jpg",
  },
  {
    id: "arms",
    name: "Arms",
    shortDescription: "Complete arm care services for smooth, glowing arms.",
    description: "Transform your arms with our comprehensive care services. Our arm treatments include professional hair removal, advanced detanning, and skin rejuvenation therapies. We use gentle yet effective techniques to ensure your arms are silky smooth and beautifully radiant. Our treatments are perfect for special occasions or regular maintenance, leaving you with confidence in every gesture.",
    services: [
      { name: "Arm Waxing", description: "Complete arm hair removal for silky smooth skin" },
      { name: "Arm Detanning", description: "Remove tan and even out skin tone on your arms" },
      { name: "Skin Lightening", description: "Brighten and lighten your arm skin naturally" },
      { name: "Exfoliation", description: "Deep exfoliation to remove dead skin cells" },
      { name: "Moisturizing Treatment", description: "Intensive hydration for soft, supple arms" },
    ],
    benefits: ["Hair-free smooth skin", "Even skin tone", "Improved texture", "Long-lasting results"],
    duration: "45-60 minutes",
    image: "/arm.jpg",
  },
  {
    id: "legs",
    name: "Legs",
    shortDescription: "Professional leg treatments for silky smooth skin.",
    description: "Achieve beautifully smooth and radiant legs with our professional treatment services. Our leg care includes comprehensive waxing services, advanced detanning treatments, and specialized skin polishing techniques. We also offer cellulite reduction and intensive hydration therapies to keep your legs looking and feeling their absolute best. Perfect for summer or year-round confidence.",
    services: [
      { name: "Leg Waxing", description: "Full leg hair removal for smooth, touchable skin" },
      { name: "Leg Detanning", description: "Remove tan lines and achieve even skin tone" },
      { name: "Skin Polishing", description: "Exfoliation and polishing for glowing legs" },
      { name: "Cellulite Treatment", description: "Reduce appearance of cellulite with specialized techniques" },
      { name: "Hydration Therapy", description: "Deep moisturizing for soft, supple legs" },
    ],
    benefits: ["Smooth, hair-free legs", "Even skin tone", "Reduced cellulite", "Glowing appearance"],
    duration: "60-75 minutes",
    image: "/legs.jpg",
  },
  {
    id: "neck",
    name: "Neck",
    shortDescription: "Specialized neck care treatments for youthful radiance.",
    description: "Give your neck the attention it deserves with our specialized care treatments. Our neck services focus on reducing signs of aging, improving skin texture, and enhancing natural radiance. We offer professional waxing, advanced detanning, and targeted anti-aging treatments including firming therapy and brightening care. Our neck treatments help you maintain a youthful, elegant appearance.",
    services: [
      { name: "Neck Waxing", description: "Gentle hair removal for a clean, smooth neckline" },
      { name: "Neck Detanning", description: "Remove tan and restore natural neck skin tone" },
      { name: "Anti-Aging Treatment", description: "Targeted treatments to reduce fine lines and wrinkles" },
      { name: "Firming Therapy", description: "Tighten and firm the neck area for a youthful look" },
      { name: "Brightening Care", description: "Lighten and brighten neck skin for even tone" },
    ],
    benefits: ["Reduced fine lines", "Firmer appearance", "Even skin tone", "Youthful radiance"],
    duration: "45-60 minutes",
    image: "/neck.jpg",
  },
];

export default function BeautyEssentialsExperience() {
  const [activeArea, setActiveArea] = useState(serviceAreas[0]);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Hero Section - Video */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            src="/0_Facial_Treatment_Spa_3840x2160.mp4"
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="mx-auto max-w-7xl px-6 text-center text-white md:px-12">
            <p className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.5em] text-pink-300">
              <span className="text-pink-400 text-xl">❀</span> Beauty Essentials
            </p>
            <h1 className="mb-6 text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl" style={{ fontFamily: "serif" }}>
              Beauty Essentials
            </h1>
            <p className="mx-auto max-w-4xl text-lg leading-relaxed text-white/90 md:text-xl">
              Discover a wide array of services offered by SCENT, including our exclusive Bikini & Brazilian waxing services using peel-off wax or our soothing cartridge wax. Enhance your skin's radiance with our luxurious detanning treatments and indulge in our meticulously crafted anti-aging regimens featuring mesotherapy and other rejuvenating techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Containers - Premium Large Layout */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fafafa] to-white py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,182,193,0.08),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,transparent_0%,rgba(255,182,193,0.03)_50%,transparent_100%)]" />
        
        <div className="relative mx-auto w-full max-w-[1600px] px-6 md:px-12 lg:px-16">
          <div className="mb-20 md:mb-24 text-center">
            <p className="mb-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.5em] text-pink-400 font-semibold">
              <span className="text-pink-500 text-2xl">❀</span> Premium Services
            </p>
            <h2 className="text-4xl font-semibold text-[#1f1f2e] md:text-5xl lg:text-6xl mb-6" style={{ fontFamily: "serif" }}>
              Our Services
            </h2>
            <p className="mx-auto max-w-3xl text-[#6f6f7a] text-lg md:text-xl leading-relaxed">
              Click on any service area to view detailed information
            </p>
          </div>

          {/* Premium Large Grid Layout - Perfect for 4 Containers */}
          <div className="grid gap-8 md:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((area, idx) => {
              const isActive = activeArea.id === area.id;
              
              return (
                <div
                  key={area.id}
                  onClick={() => setActiveArea(area)}
                  className={`group relative overflow-hidden rounded-[40px] border-2 transition-all duration-700 ease-out cursor-pointer ${
                    isActive
                      ? "border-pink-500 shadow-[0_20px_60px_rgba(236,72,153,0.3)] scale-[1.03] z-10 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100"
                      : "border-gray-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:border-pink-400 hover:shadow-[0_20px_60px_rgba(236,72,153,0.2)] hover:-translate-y-3 bg-white"
                  }`}
                  style={{
                    animation: `slideInScale 0.8s ease-out ${idx * 0.15}s both`,
                  }}
                >
                  {/* Premium Shimmer Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1200 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-10" />
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-rose-100/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image Section - Larger */}
                  <div className="relative h-80 md:h-96 lg:h-[420px] overflow-hidden">
                    <Image
                      src={area.image}
                      alt={area.name}
                      fill
                      className={`object-cover transition-all duration-1000 ${
                        isActive 
                          ? "scale-115 brightness-110" 
                          : "group-hover:scale-130 group-hover:brightness-110"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                    
                    {/* Premium Badge */}
                    <div className={`absolute top-6 left-6 rounded-full backdrop-blur-lg px-5 py-3 border-2 transition-all duration-500 shadow-xl ${
                      isActive
                        ? "bg-pink-500/95 border-pink-300 text-white scale-110"
                        : "bg-white/25 border-white/40 text-white group-hover:bg-pink-500/90 group-hover:border-pink-300 group-hover:scale-105"
                    }`}>
                      <span className="text-base font-bold tracking-wide">{area.name}</span>
                    </div>
                    
                    {/* Active Indicator - Enhanced */}
                    {isActive && (
                      <div className="absolute top-6 right-6 animate-pulse z-20">
                        <div className="rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 px-4 py-2 text-xs font-bold text-white shadow-2xl flex items-center gap-2 border-2 border-white/30">
                          <span className="inline-block w-2 h-2 bg-white rounded-full animate-ping" />
                          <span>Active</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Section - More Spacious */}
                  <div className="relative p-8 md:p-10">
                    <h3 className={`font-bold text-[#1f1f2e] mb-4 transition-all duration-300 ${
                      isActive ? "text-3xl" : "text-2xl group-hover:text-3xl"
                    }`} style={{ fontFamily: "serif" }}>
                      {area.name}
                    </h3>
                    <p className="text-base text-[#555] leading-relaxed line-clamp-3 mb-6 min-h-[72px]">
                      {area.shortDescription}
                    </p>
                    
                    {/* Services Preview - Enhanced */}
                    <div className="space-y-3 mb-6">
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#1f1f2e] mb-3">
                        Services:
                      </p>
                      <ul className="space-y-2.5">
                        {area.services.slice(0, 2).map((service, i) => (
                          <li 
                            key={i} 
                            className="flex items-start gap-3 text-sm text-[#444] group/item"
                          >
                            <span className="text-pink-400 text-lg leading-none mt-1 group-hover/item:text-pink-500 transition-colors">❀</span>
                            <span className="leading-relaxed font-medium">{service.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Click Indicator - Premium */}
                    <div className="mt-6 pt-6 border-t-2 border-gray-200/50">
                      <p className={`text-sm font-bold text-center transition-all duration-300 ${
                        isActive 
                          ? "text-pink-600" 
                          : "text-gray-400 group-hover:text-pink-500"
                      }`}>
                        {isActive ? "✓ Selected" : "Click for details →"}
                      </p>
                    </div>
                  </div>
                  
                  {/* Active Glow Effect - Enhanced */}
                  {isActive && (
                    <>
                      <div className="absolute inset-0 rounded-[40px] border-2 border-pink-400/60 shadow-[0_0_50px_rgba(236,72,153,0.5)] pointer-events-none animate-pulse" />
                      <div className="absolute -inset-1 rounded-[40px] bg-gradient-to-r from-pink-400/20 via-rose-400/20 to-pink-400/20 blur-xl pointer-events-none" />
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Detailed Description Section - Appears on Click */}
          <div 
            className={`mt-12 md:mt-16 overflow-hidden transition-all duration-700 ease-out ${
              activeArea ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="rounded-3xl border-2 border-pink-200/80 bg-gradient-to-br from-[#fef9fb] via-white to-[#fef9fb] p-6 md:p-8 lg:p-10 shadow-xl">
              <div className="grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-2 md:items-stretch">
                {/* Image Section - Left Side - Larger */}
                <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={activeArea.image}
                    alt={activeArea.name}
                    fill
                    className="object-cover object-center w-full h-full"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-pink-500/90 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                      <span>✨</span> Premium Treatment
                    </div>
                  </div>
                </div>

                {/* Content Section - Right Side */}
                <div className="space-y-5">
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-600">
                      <span>❀</span> {activeArea.name} Services
                    </div>
                    <h3 className="text-3xl md:text-4xl font-semibold text-[#1f1f2e] mb-3" style={{ fontFamily: "serif" }}>
                      {activeArea.name} Care
                    </h3>
                    <p className="text-base leading-relaxed text-[#555] mb-5">
                      {activeArea.description}
                    </p>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">⏱</span>
                      <div>
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="text-sm font-semibold text-[#1f1f2e]">{activeArea.duration}</p>
                      </div>
                    </div>
                  </div>

                  {/* All Services */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#1f1f2e] mb-3">
                      All Services Included:
                    </p>
                    <div className="space-y-2.5">
                      {activeArea.services.map((service, i) => (
                        <div 
                          key={i} 
                          className="p-3 rounded-lg bg-gradient-to-r from-pink-50/50 via-white to-transparent border border-pink-100/50 hover:from-pink-100/50 hover:border-pink-200 transition-all duration-300"
                          style={{
                            animation: `fadeInLeft 0.5s ease-out ${i * 0.1}s both`,
                          }}
                        >
                          <div className="flex items-start gap-2.5">
                            <span className="text-pink-400 text-lg mt-0.5">❀</span>
                            <div className="flex-1">
                              <h4 className="text-sm font-semibold text-[#1f1f2e] mb-0.5">{service.name}</h4>
                              <p className="text-xs text-[#666] leading-relaxed">{service.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#1f1f2e] mb-3">
                      Key Benefits:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {activeArea.benefits.map((benefit, i) => (
                        <div 
                          key={i}
                          className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-gray-100"
                          style={{
                            animation: `fadeInUp 0.5s ease-out ${i * 0.1}s both`,
                          }}
                        >
                          <span className="text-pink-400 text-sm">✓</span>
                          <span className="text-xs text-[#444]">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking Button */}
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          const event = new CustomEvent("openBookAppointment", { detail: { service: `${activeArea.name} Treatment` } });
                          window.dispatchEvent(event);
                        }
                      }}
                      className="w-full rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform"
                    >
                      Book {activeArea.name} Treatment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyScent />
      <PowerTeam />
      
      {/* Add CSS animations */}
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
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInScale {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
      `}</style>
    </div>
  );
}

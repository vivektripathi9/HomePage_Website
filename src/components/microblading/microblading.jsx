"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import PowerTeam from "../Thepower/thepower";
import WhyScent from "../why/why";

export default function MicrobladingExperience() {
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
            src="/blading.mp4"
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
              <span className="text-pink-400 text-xl">❀</span> Permanent Makeup
            </p>
            <h1 className="mb-6 text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl" style={{ fontFamily: "serif" }}>
              Eyebrow Microblading
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
              A semi-permanent solution for perfectly shaped and fuller eyebrows. Our skilled technicians use precise, hair-like strokes to create a natural look that lasts up to two years. Achieve your ideal brow shape with minimal maintenance and wake up every day with flawless brows.
            </p>
          </div>
        </div>
      </section>

      {/* Eyebrow Microblading in Bangalore - Main Content Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fef9fb] to-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,182,193,0.05),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-50/30 rounded-full blur-3xl" />
        
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12">
          {/* Header Section */}
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-pink-100 px-5 py-2 text-xs font-semibold text-pink-600 shadow-lg">
              <span className="text-pink-500 text-lg">❀</span> Professional Microblading Services
            </div>
            <h2 className="text-4xl font-semibold leading-tight text-[#1f1f2e] md:text-5xl lg:text-6xl mb-6" style={{ fontFamily: "serif" }}>
              Eyebrow Microblading in Bangalore
            </h2>
            <div className="mx-auto w-24 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
          </div>

          {/* Main Content - Single Column with Better Spacing */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-8 text-base leading-relaxed text-[#555] md:text-lg">
              <p>
                Achieve perfectly defined and natural-looking brows effortlessly with <span className="font-semibold text-pink-600">Eyebrow Microblading</span>. This semi-permanent cosmetic treatment employs a specialized handheld tool to craft fine, hair-like strokes on your skin, enhancing and shaping your eyebrows with precision.
              </p>
              
              <p>
                Our expert technicians are dedicated to meticulously enhancing your brows, ensuring results that are both long-lasting and beautifully shaped. Tailored to your unique style, each treatment is designed to complement your natural beauty, giving you the perfect brows you've always desired.
              </p>
              
              <p>
                Say goodbye to daily brow maintenance and hello to flawless, natural-looking eyebrows with our professional microblading services. Whether you desire subtle definition or a bold, striking look, our skilled technicians will create a customized brow shape that enhances your facial features and fits your personal aesthetic.
              </p>
              
              <p>
                Experience the confidence that comes with expertly shaped brows and enjoy the convenience of a low-maintenance beauty routine with our premier eyebrow microblading service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Image Section - Between Content and Features */}
      <section className="relative bg-white py-0 overflow-hidden">
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
          <Image
            src="/young-woman-getting-beauty-treatment-her-eyebrows.jpg"
            alt="Professional microblading treatment in progress"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full bg-gradient-to-t from-black/80 via-black/60 to-transparent p-8 md:p-12 lg:p-16">
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white border border-white/30">
                  <span className="text-pink-300 text-lg">❀</span> Professional Treatment
                </div>
                <h2 className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl mb-4" style={{ fontFamily: "serif" }}>
                  Expert Precision & Care
                </h2>
                <p className="text-base leading-relaxed text-white/90 md:text-lg max-w-2xl mx-auto">
                  Our skilled technicians use specialized tools and techniques to create natural, hair-like strokes that enhance your natural beauty with precision and artistry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Features Section */}
      <section className="relative bg-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-white to-[#fafafa]" />
        
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-xs font-semibold text-pink-600">
              <span className="text-pink-500 text-lg">❀</span> Key Features
            </div>
            <h2 className="text-3xl font-semibold text-[#1f1f2e] md:text-4xl lg:text-5xl mb-4" style={{ fontFamily: "serif" }}>
              Why Choose Our Microblading
            </h2>
            <p className="mx-auto max-w-2xl text-[#6f6f7a] text-base md:text-lg">
              Discover what makes our microblading services exceptional
            </p>
          </div>

          {/* Floating Feature Cards - Enhanced Design */}
          <div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Natural Hair-Like Strokes",
                description: "Precise, fine strokes that mimic natural brow hair for a realistic appearance that blends seamlessly with your existing brows.",
                icon: "Precision",
              },
              {
                title: "Long-Lasting Results",
                description: "Semi-permanent solution that lasts up to two years with proper care, giving you beautiful brows for an extended period.",
                icon: "Durability",
              },
              {
                title: "Minimal Maintenance",
                description: "Wake up every day with flawless brows, no daily makeup needed. Save time and enjoy effortless beauty every morning.",
                icon: "Convenience",
              },
              {
                title: "Expert Technicians",
                description: "Our skilled professionals are trained in the latest microblading techniques, ensuring safe and beautiful results every time.",
                icon: "Expertise",
              },
              {
                title: "Customized Design",
                description: "Each treatment is tailored to your unique facial features and personal style, creating brows that perfectly complement your look.",
                icon: "Personalization",
              },
              {
                title: "Premium Materials",
                description: "We use only the highest quality pigments and tools to ensure safe, long-lasting, and beautiful results.",
                icon: "Quality",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative rounded-[32px] border-2 border-pink-100/80 bg-white p-8 md:p-10 shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 hover:border-pink-300 hover:scale-[1.02]"
                style={{
                  animation: `floatIn 0.8s ease-out ${idx * 0.1}s both`,
                }}
              >
                {/* Premium Background Gradient */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white via-[#fef9fb] to-white opacity-100 group-hover:from-pink-50/30 group-hover:via-rose-50/20 group-hover:to-pink-50/30 transition-all duration-500" />
                
                {/* Animated Border Glow */}
                <div className="absolute -inset-0.5 rounded-[32px] bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 rounded-[32px] -translate-x-full group-hover:translate-x-full transition-transform duration-1200 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />
                
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100/40 to-transparent rounded-bl-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-rose-100/40 to-transparent rounded-tr-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Elegant Number Badge */}
                  <div className="mb-6 relative inline-flex items-center justify-center">
                    {/* Outer Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-pink-200 group-hover:border-pink-400 transition-colors duration-300" />
                    {/* Inner Circle */}
                    <div className="relative w-16 h-16 rounded-full bg-white border-2 border-pink-100 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                      <span className="text-2xl font-bold text-[#1f1f2e] group-hover:text-pink-600 transition-colors duration-300" style={{ fontFamily: "serif" }}>
                        {idx + 1}
                      </span>
                    </div>
                    {/* Decorative Dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-[#1f1f2e] mb-4 group-hover:text-pink-600 transition-colors duration-300" style={{ fontFamily: "serif" }}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-base leading-relaxed text-[#666] mb-6 group-hover:text-[#555] transition-colors duration-300 min-h-[72px]">
                    {feature.description}
                  </p>
                  
                  {/* Enhanced Decorative Element */}
                  <div className="pt-6 border-t-2 border-pink-100 group-hover:border-pink-300 transition-colors duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-pink-500 uppercase tracking-wider">
                        {feature.icon}
                      </span>
                      <div className="w-8 h-px bg-gradient-to-r from-pink-300 to-transparent group-hover:w-12 transition-all duration-300" />
                    </div>
                  </div>
                </div>

                {/* Active Glow on Hover */}
                <div className="absolute inset-0 rounded-[32px] shadow-[0_0_30px_rgba(236,72,153,0.15)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="mt-20 text-center">
            <div className="relative inline-block rounded-[40px] border-2 border-pink-200/80 bg-gradient-to-br from-pink-50 via-white to-rose-50 p-10 md:p-12 shadow-2xl max-w-4xl">
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-100/30 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-rose-100/30 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-pink-100 px-5 py-2 text-xs font-semibold text-pink-600 shadow-lg">
                  <span className="text-pink-500 text-lg">❀</span> Book Your Appointment
                </div>
                <h3 className="text-3xl font-semibold text-[#1f1f2e] mb-5 md:text-4xl" style={{ fontFamily: "serif" }}>
                  Ready to Transform Your Brows?
                </h3>
                <p className="text-base leading-relaxed text-[#555] mb-8 md:text-lg max-w-2xl mx-auto">
                  Experience the confidence that comes with expertly shaped brows and enjoy the convenience of a low-maintenance beauty routine.
                </p>
                <button
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      const event = new CustomEvent("openBookAppointment", { detail: { service: "Microblading" } });
                      window.dispatchEvent(event);
                    }
                  }}
                  className="rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 px-12 py-5 text-base font-semibold text-white shadow-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] hover:scale-110 transform"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyScent />
      <PowerTeam />
      
      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}


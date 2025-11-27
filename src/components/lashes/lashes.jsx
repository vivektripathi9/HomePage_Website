"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import PowerTeam from "../Thepower/thepower";
import WhyScent from "../why/why";

export default function LashesExperience() {
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
            src="/lashes.mp4"
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
              <span className="text-pink-400 text-xl">❀</span> Luxury Lashes
            </p>
            <h1 className="mb-6 text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl" style={{ fontFamily: "serif" }}>
              Luxury Lashes
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
              Volume fans, classics, and keratin lifts for expressive eyes. From subtle lifts to Hollywood drama, 
              our lash stylists customise curl, thickness, and mapping to complement your eye shape.
            </p>
          </div>
        </div>
      </section>

      {/* SCENT Feature Section - Bangalore's Leading Destination */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fef9fb] to-white py-20 md:py-28">
        {/* Background Image - Left Half Only */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 overflow-hidden">
          <Image
            src="/elegant-makeup-portrait.jpg"
            alt="Elegant makeup portrait"
            fill
            className="object-cover"
            style={{ opacity: 0.5, objectPosition: 'right center' }}
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,182,193,0.05),transparent_50%)]" />
        
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="grid gap-12 md:grid-cols-2 md:items-center lg:gap-16">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-xs font-semibold text-pink-600">
                  <span>✨</span> Bangalore's Leading Destination
                </div>
                <h2 className="text-3xl font-semibold leading-tight text-[#1f1f2e] md:text-4xl lg:text-5xl mb-4" style={{ fontFamily: "serif" }}>
                  SCENT - Bangalore's Leading Destination for Eyelash Extensions
                </h2>
                <p className="text-base leading-relaxed text-[#555] md:text-lg">
                  In the bustling city of Bangalore, where fashion and beauty trends are constantly evolving, enhancing one's natural beauty has become a popular pursuit. One of the most sought-after beauty treatments today is eyelash extensions.
                </p>
              </div>

              <div className="space-y-6 rounded-2xl border border-pink-100 bg-white/50 p-6 md:p-8">
                <div>
                  <h3 className="text-2xl font-semibold text-[#1f1f2e] mb-4" style={{ fontFamily: "serif" }}>
                    What are Eyelash Extensions?
                  </h3>
                  <p className="text-base leading-relaxed text-[#555] mb-4">
                    Eyelash extensions are semi-permanent fibers attached to your natural lashes to create a fuller, longer, and more voluminous look. Unlike false lashes, which are applied in strips, individual extensions are meticulously placed on each natural lash, resulting in a more natural and customizable appearance.
                  </p>
                  <p className="text-base leading-relaxed text-[#555]">
                    The <span className="font-semibold text-pink-600">Eye Lash Extensions in Bangalore at SCENT</span> are expertly applied by trained professionals who use high-quality materials and advanced techniques to ensure stunning and long-lasting results.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 pt-4 border-t border-gray-200">
                  <div className="flex items-start gap-3">
                    <span className="text-pink-400 text-xl mt-1">❀</span>
                    <div>
                      <p className="font-semibold text-[#1f1f2e] mb-1">Customizable Styles</p>
                      <p className="text-sm text-[#666]">Suit different styles, from subtle enhancement to dramatic transformation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-pink-400 text-xl mt-1">❀</span>
                    <div>
                      <p className="font-semibold text-[#1f1f2e] mb-1">Time-Saving</p>
                      <p className="text-sm text-[#666]">Eliminate daily mascara application and reduce morning makeup routine</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-pink-400 text-xl mt-1">❀</span>
                    <div>
                      <p className="font-semibold text-[#1f1f2e] mb-1">Long-Lasting</p>
                      <p className="text-sm text-[#666]">With proper care, extensions can last several weeks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-pink-400 text-xl mt-1">❀</span>
                    <div>
                      <p className="font-semibold text-[#1f1f2e] mb-1">Low Maintenance</p>
                      <p className="text-sm text-[#666]">Convenient and low-maintenance beauty solution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - SCENT Experience */}
            <div className="space-y-6">
              <div className="rounded-3xl border-2 border-pink-200 bg-gradient-to-br from-[#fef9fb] to-white p-8 md:p-10 shadow-xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-[#1f1f2e] mb-4" style={{ fontFamily: "serif" }}>
                    The SCENT Experience: Eye Lash Extensions in Bangalore
                  </h3>
                  <p className="text-base leading-relaxed text-[#555] mb-6">
                    At SCENT, the <span className="font-semibold text-pink-600">Eye Lash Extensions in Bangalore</span> experience is designed to be luxurious and relaxing. From the moment you step into the elegant salon, you're greeted with a warm and welcoming ambiance that sets the stage for an exceptional beauty treatment.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-pink-100">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center text-white font-bold text-lg">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1f1f2e] mb-2">Luxurious Ambiance</h4>
                      <p className="text-sm text-[#666] leading-relaxed">
                        The salon's soothing decor, calming music, and pleasant scents create a tranquil environment where you can unwind and enjoy a pampering session.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-pink-100">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center text-white font-bold text-lg">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1f1f2e] mb-2">Thorough Consultation</h4>
                      <p className="text-sm text-[#666] leading-relaxed">
                        The process begins with a thorough consultation to understand your desired look and style preferences. Our skilled technicians take the time to discuss various options.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-pink-100">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center text-white font-bold text-lg">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1f1f2e] mb-2">Personalized Approach</h4>
                      <p className="text-sm text-[#666] leading-relaxed">
                        This personalized approach ensures that your eyelash extensions are tailored to complement your unique features and enhance your natural beauty.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 rounded-full bg-pink-50 text-pink-600 text-sm font-semibold">Lash Length</span>
                    <span className="px-4 py-2 rounded-full bg-pink-50 text-pink-600 text-sm font-semibold">Curl Options</span>
                    <span className="px-4 py-2 rounded-full bg-pink-50 text-pink-600 text-sm font-semibold">Thickness</span>
                    <span className="px-4 py-2 rounded-full bg-pink-50 text-pink-600 text-sm font-semibold">Custom Design</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SCENT - Premium Minimal Section */}
      <section className="relative bg-black py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)]" />
        
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-12">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <div className="h-px w-16 bg-white/30 mx-auto mb-4" />
              <h2 className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl" style={{ fontFamily: "serif" }}>
                Why Choose SCENT?
              </h2>
              <div className="h-px w-16 bg-white/30 mx-auto mt-4" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Renowned Wellness Center",
                description: "A trusted name in beauty and wellness with years of excellence",
              },
              {
                title: "Exceptional Services",
                description: "Premium eyelash extension services tailored to your unique style",
              },
              {
                title: "Diverse Styles",
                description: "Caters to all preferences from subtle to dramatic transformations",
              },
              {
                title: "Expert Professionals",
                description: "Expertly trained technicians with years of experience",
              },
              {
                title: "Premium Materials",
                description: "High-quality materials and advanced techniques for lasting results",
              },
              {
                title: "Luxury Experience",
                description: "Indulge in a pampering session in our elegant, tranquil salon",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-500 hover:bg-white/10 hover:border-white/20"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                {/* Subtle hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="mb-3">
                    <div className="w-12 h-px bg-white/40 mb-3 group-hover:w-16 transition-all duration-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-white/5 group-hover:border-white/20 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyScent />
      <PowerTeam />
      
      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}


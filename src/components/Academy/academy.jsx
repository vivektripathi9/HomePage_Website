"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const benefits = [
  {
    title: "Expert-Led Training",
    description: "Learn from industry-leading professionals with years of experience in beauty and wellness.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Exclusive Schwarzkopf Partnership",
    description: "The only academy in Southeast Asia offering exclusive access to Schwarzkopf Professional Connect resources.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "State-of-the-Art Facilities",
    description: "Train in modern, fully equipped studios designed to provide a hands-on learning experience.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Comprehensive Curriculum",
    description: "Gain expertise in hairstyling, beauty treatments, and wellness services with a diverse range of courses.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Career-Focused Approach",
    description: "Our programs are designed to help you build a successful career with practical skills and real-world exposure.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Vibrant Community",
    description: "Be part of a supportive network of like-minded individuals passionate about beauty and personal growth.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Flexible Learning Options",
    description: "With personalized schedules and course formats, you can balance your learning journey with other commitments.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Industry Recognition",
    description: "Certifications from ScentLifestyle Academy are widely recognized and respected in the beauty industry.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const academyImages = [
  "/m (1).jpg",
  "/m (2).jpg",
  "/m (3).jpg",
  "/m (5).jpg",
  "/m (6).jpg",
];

export default function AcademySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [enrollFormData, setEnrollFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    message: "",
  });
  const [isSubmittingEnroll, setIsSubmittingEnroll] = useState(false);
  const [showEnrollSuccess, setShowEnrollSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you! We'll contact you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1000);
  };

  const handleEnrollChange = (e) => {
    setEnrollFormData({
      ...enrollFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEnrollSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingEnroll(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: enrollFormData.name,
          email: enrollFormData.email,
          phone: enrollFormData.phone,
          subject: `Academy Enrollment - ${enrollFormData.course}`,
          message: `Academy Enrollment Request:\n\nCourse Interest: ${enrollFormData.course}\nExperience Level: ${enrollFormData.experience}\n\nMessage: ${enrollFormData.message || "No additional message"}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setEnrollFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          experience: "",
          message: "",
        });
        setIsEnrollModalOpen(false);
        setShowEnrollSuccess(true);
        // Redirect to home page after 4 seconds
        setTimeout(() => {
          window.location.href = "/";
        }, 4000);
      } else {
        alert(`Error: ${data.error || "Failed to submit enrollment. Please try again."}`);
        setIsSubmittingEnroll(false);
      }
    } catch (error) {
      console.error("Enrollment submission error:", error);
      alert("Something went wrong. Please try again later or contact us directly.");
      setIsSubmittingEnroll(false);
    }
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isEnrollModalOpen) {
        setIsEnrollModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isEnrollModalOpen]);

  return (
    <section className="bg-[#f7f7f7] text-[#1f1f2e]">
      {/* Hero Video Section */}
      <div className="relative w-full overflow-hidden">
        <video
          src="/Beauty_video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-[40vh] min-h-[300px] sm:h-[50vh] sm:min-h-[400px] md:min-h-[500px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 sm:px-6 md:px-12 lg:px-20 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: "serif" }}>
            ScentLifestyle Academy
          </h1>
          <p className="max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90">
            Empowering Creativity, Shaping Lifestyles.
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-4">
            <span className="h-px w-12 sm:w-20 bg-white/50" />
            <span className="text-pink-400 text-lg sm:text-xl">❀</span>
            <span className="h-px w-12 sm:w-20 bg-white/50" />
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20">
        {/* Introduction Section */}
        <div className="mb-12 sm:mb-16 text-center">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#444] max-w-4xl mx-auto mb-8">
            Discover your beauty ambitions through specialized training, state-of-the-art facilities, and the unique Schwarzkopf Professional Connect platform in Southeast Asia. Become part of our dynamic community and transform your passion into a successful career. Sign up today to realize your full potential!
          </p>
          <button
            onClick={() => {
              const enquireSection = document.getElementById("enquire");
              if (enquireSection) {
                enquireSection.scrollIntoView({ behavior: "smooth", block: "start" });
                // Small delay to ensure scroll happens, then open modal
                setTimeout(() => {
                  setIsEnrollModalOpen(true);
                }, 500);
              } else {
                setIsEnrollModalOpen(true);
              }
            }}
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 px-8 py-3 text-sm sm:text-base font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 hover:scale-105 hover:shadow-2xl transform"
          >
            <span className="relative z-10">Enroll Now</span>
            <svg className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></span>
          </button>
        </div>

        {/* Why Choose Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1f1f2e] mb-4" style={{ fontFamily: "serif" }}>
              Why Choose SCENTLifestyle Academy
            </h2>
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
              <span className="h-px w-12 sm:w-20 bg-[#1f1f2e]" />
              <span className="text-pink-400 text-lg sm:text-xl">❀</span>
              <span className="h-px w-12 sm:w-20 bg-[#1f1f2e]" />
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {benefits.map((benefit, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex flex-col`}
                >
                  {/* Icon Section */}
                  <div className={`flex-shrink-0 ${isEven ? 'md:w-1/4' : 'md:w-1/4'} w-full bg-gradient-to-br ${isEven ? 'from-black to-[#1a1a1a]' : 'from-gray-900 to-black'} p-6 sm:p-8 md:p-12 flex items-center justify-center`}>
                    <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {benefit.icon}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className={`flex-1 p-6 sm:p-8 md:p-10 ${isEven ? 'md:border-l-0 md:border-r' : 'md:border-l'} border-t md:border-t-0 border-gray-200`}>
                    <h3 className="mb-4 text-xl sm:text-2xl md:text-3xl font-semibold text-[#1f1f2e]" style={{ fontFamily: "serif" }}>
                      {benefit.title}
                    </h3>
                    <div className={`h-1 w-16 ${isEven ? 'bg-black' : 'bg-black'} mb-4`} />
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#555]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mb-12 sm:mb-16 rounded-3xl bg-gradient-to-br from-black via-[#1a1a1a] to-black p-8 sm:p-12 md:p-16 text-center text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative z-10">
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white/90 max-w-3xl mx-auto mb-8">
              Begin your journey to success at SCENT Academy, where we equip you with innovative programs and unwavering support to build a flourishing career in the hair and beauty industry.
            </p>
            <a
              href="#enquire"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-sm sm:text-base font-semibold uppercase tracking-wide text-black transition-all hover:bg-gray-100"
            >
              ENQUIRE NOW
            </a>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12 sm:mb-16">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
            {academyImages.map((image, index) => (
              <div
                key={index}
                className="relative h-64 sm:h-80 overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={image}
                  alt={`SCENT Academy ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Schwarzkopf Partnership Section */}
        <div className="mb-12 sm:mb-16">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 md:p-12 shadow-lg">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1f1f2e] mb-6" style={{ fontFamily: "serif" }}>
                  Immerse yourself in professional hairstyling excellence
                </h2>
                <p className="text-base sm:text-lg leading-relaxed text-[#555] mb-4">
                  at SCENT Academy, proudly partnered with <span className="font-semibold text-[#1f1f2e]">Schwarzkopf Professional Academy</span> in India since 2022. As a hub of innovation and professionalism, our academy paves the way for you to gain recognition and prestige in the dynamic world of hairstyling.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-[#555]">
                  Led by instructors trained by experts from the Schwarzkopf Professional Academy, we deliver unmatched industry knowledge and expertise. Through this partnership, we offer an immersive learning experience featuring the exclusive hair Cut and Colour techniques, celebrated for their precision and artistic mastery.
                </p>
              </div>
              <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src="/m (1).jpg"
                  alt="SCENT Academy Training"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SCENT ACADEMY Highlight Section */}
        <div className="mb-12 sm:mb-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-black via-[#1a1a1a] to-black p-8 sm:p-12 md:p-16 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wider" style={{ fontFamily: "serif" }}>
              SCENT
              <br />
              ACADEMY
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white/90 max-w-3xl mx-auto mb-8">
              Experience the pinnacle of luxury, sophistication, and world-class training at SCENT Academy. Elevate your career with our prestigious curriculum and master the advanced techniques crafted by the renowned Schwarzkopf Professional Academy. Stand out as an exceptional hairstylist in the competitive beauty industry.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-white/90 mb-8">
              Join SCENT Academy today and turn your passion into a thriving profession.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="text-center sm:text-left">
                <p className="text-sm sm:text-base text-white/70 mb-1">Training Manager</p>
                <a
                  href="tel:+919148542700"
                  className="text-lg sm:text-xl font-semibold text-white hover:text-white/80 transition-colors"
                >
                  +91 91485 42700
                </a>
              </div>
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    const event = new CustomEvent("openBookAppointment", { detail: { service: "Academy Enquiry" } });
                    window.dispatchEvent(event);
                  }
                }}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-sm sm:text-base font-semibold uppercase tracking-wide text-black transition-all hover:bg-gray-100"
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </div>

        {/* Rating Section */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-sm sm:text-base text-[#555]">
            Rated 5 star rating based on <span className="font-semibold text-[#1f1f2e]">2847 reviews</span>
          </p>
        </div>

        {/* Model Sign-Up Section */}
        <div className="mb-12 sm:mb-16 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 md:p-12 shadow-lg">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1f1f2e] mb-6" style={{ fontFamily: "serif" }}>
                Experience a Glamorous Makeover at SCENT Academy!
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-[#555] mb-4">
                Step into the spotlight as a model at SCENT Academy in Bangalore, where you'll undergo a complete beauty transformation! From expert haircuts and styling to flawless makeup, skincare, and nail art, our talented students will treat you to a unique, personalized look.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-[#555] mb-6">
                Not only will you leave looking fabulous, but you'll also be helping future beauty professionals hone their skills in a real-world setting. Join us for a creative session that promises precision, innovation, and a fresh new you—all while supporting the next generation of stylists and beauty experts.
              </p>
              <a
                href="#enquire"
                className="inline-flex items-center gap-2 rounded-lg bg-black px-8 py-3 text-sm sm:text-base font-semibold uppercase tracking-wide text-white transition-all hover:bg-black/80"
              >
                SIGN UP
              </a>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/m (2).jpg"
                alt="SCENT Academy Model Makeover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Enquiry Form Section */}
        <div id="enquire" className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1f1f2e] mb-4" style={{ fontFamily: "serif" }}>
              Enquire Now
            </h2>
            <p className="text-sm sm:text-base text-[#555]">
              Fill out the form below and we'll get back to you with more information about our programs.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5 sm:space-y-6">
            <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1f1f2e] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#1f1f2e] focus:border-black focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1f1f2e] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#1f1f2e] focus:border-black focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#1f1f2e] mb-2">
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#1f1f2e] focus:border-black focus:outline-none transition-colors"
                placeholder="+91 1234567890"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#1f1f2e] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#1f1f2e] focus:border-black focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your interest in our academy..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-black px-6 py-3 text-sm sm:text-base font-semibold uppercase tracking-wide text-white transition-all hover:bg-black/80 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </button>

            {submitMessage && (
              <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                <p className="text-sm text-green-800 font-medium">{submitMessage}</p>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Enrollment Modal */}
      {isEnrollModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="relative bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 rounded-3xl shadow-2xl max-w-2xl w-full mx-4 border border-purple-100/50 overflow-hidden animate-zoomIn">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-400/20 to-red-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            {/* Close Button */}
            <button
              onClick={() => setIsEnrollModalOpen(false)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-gray-600 transition-all hover:bg-white hover:scale-110 hover:rotate-90 shadow-lg"
              aria-label="Close"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative z-10 p-6 sm:p-8 md:p-10">
              {/* Header */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 mb-4 shadow-lg animate-zoomIn">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1f1f2e] mb-2" style={{ fontFamily: "serif" }}>
                  Enroll at SCENT Academy
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Start your journey to becoming a beauty professional
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleEnrollSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="enroll-name" className="block text-sm font-medium text-[#1f1f2e] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="enroll-name"
                      name="name"
                      required
                      value={enrollFormData.name}
                      onChange={handleEnrollChange}
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-[#1f1f2e] focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="enroll-email" className="block text-sm font-medium text-[#1f1f2e] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="enroll-email"
                      name="email"
                      required
                      value={enrollFormData.email}
                      onChange={handleEnrollChange}
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-[#1f1f2e] focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="enroll-phone" className="block text-sm font-medium text-[#1f1f2e] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="enroll-phone"
                      name="phone"
                      required
                      value={enrollFormData.phone}
                      onChange={handleEnrollChange}
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-[#1f1f2e] focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="enroll-course" className="block text-sm font-medium text-[#1f1f2e] mb-2">
                      Course Interest *
                    </label>
                    <select
                      id="enroll-course"
                      name="course"
                      required
                      value={enrollFormData.course}
                      onChange={handleEnrollChange}
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-[#1f1f2e] focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                    >
                      <option value="">Select a course</option>
                      <option value="Hair Styling & Cutting">Hair Styling & Cutting</option>
                      <option value="Hair Coloring">Hair Coloring</option>
                      <option value="Beauty Treatments">Beauty Treatments</option>
                      <option value="Makeup Artistry">Makeup Artistry</option>
                      <option value="Nail Art">Nail Art</option>
                      <option value="Skincare">Skincare</option>
                      <option value="Complete Beauty Program">Complete Beauty Program</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="enroll-experience" className="block text-sm font-medium text-[#1f1f2e] mb-2">
                      Experience Level *
                    </label>
                    <select
                      id="enroll-experience"
                      name="experience"
                      required
                      value={enrollFormData.experience}
                      onChange={handleEnrollChange}
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-[#1f1f2e] focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                    >
                      <option value="">Select experience level</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                      <option value="Professional">Professional</option>
                    </select>
                  </div>
                  
                  <div className="sm:col-span-2">
                    <label htmlFor="enroll-message" className="block text-sm font-medium text-[#1f1f2e] mb-2">
                      Additional Message
                    </label>
                    <textarea
                      id="enroll-message"
                      name="message"
                      rows={4}
                      value={enrollFormData.message}
                      onChange={handleEnrollChange}
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-[#1f1f2e] focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                      placeholder="Tell us about your goals and aspirations..."
                    />
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmittingEnroll}
                    className="flex-1 group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 px-6 py-4 text-sm sm:text-base font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmittingEnroll ? (
                        <>
                          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Enrollment
                          <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEnrollModalOpen(false)}
                    className="px-6 py-4 text-sm sm:text-base font-medium text-gray-700 border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Enrollment Success Modal */}
      {showEnrollSuccess && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 p-8 sm:p-10 text-center animate-zoomIn">
            {/* Success Icon */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full animate-ping opacity-75"></div>
                <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
                  <svg className="h-12 w-12 sm:h-14 sm:w-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Success Message */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1f1f2e] mb-3" style={{ fontFamily: "serif" }}>
              Enrollment Submitted!
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              Thank you for your interest in SCENT Academy. We've received your enrollment request and will contact you soon to discuss your journey with us.
            </p>

            {/* Countdown */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <svg className="h-4 w-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Redirecting to home page in a moment...</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


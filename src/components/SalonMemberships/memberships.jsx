"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Animated counter component
const AnimatedCounter = ({ value, duration = 2000, prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = parseInt(value.replace(/[₹,]/g, ""));
    if (isNaN(numericValue)) {
      setCount(value);
      return;
    }

    const increment = numericValue / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  if (typeof count === "string") {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString("en-IN")}
    </span>
  );
};

const headingPhrases = [
  "Exclusive Salon Memberships in Bangalore",
  "Premium Membership Plans for Regular Clients",
  "Unlock Unlimited Beauty Benefits",
  "Join SCENT Membership Program",
];

const membershipPlans = [
  {
    id: "platinum",
    title: "Platinum",
    description:
      "The ultimate luxury membership for our most valued clients. Enjoy maximum benefits with the highest credit load and extended validity period.",
    image: "/young-woman-relaxing-spa-salon.jpg",
    pay: "₹100,000",
    load: "₹160,000",
    extraBenefits: "₹60,000",
    validity: "3 YEARS",
    popular: false,
  },
  {
    id: "sapphire",
    title: "Sapphire",
    description:
      "Premium membership tier offering exceptional value with substantial credit load and extended benefits for dedicated beauty enthusiasts.",
    image: "/beautiful-woman-with-towel-holding-lily.jpg",
    pay: "₹75,000",
    load: "₹110,000",
    extraBenefits: "₹35,000",
    validity: "2 YEARS",
    popular: true,
  },
  {
    id: "diamond",
    title: "Diamond",
    description:
      "A prestigious membership plan designed for regular clients who seek premium services with excellent value and extended validity.",
    image: "/woman-relaxing-with-facial-mask-spa.jpg",
    pay: "₹50,000",
    load: "₹75,000",
    extraBenefits: "₹25,000",
    validity: "2 YEARS",
    popular: false,
  },
  {
    id: "gold",
    title: "Gold",
    description:
      "Perfect for frequent visitors who want to enjoy premium services with great savings and exclusive benefits throughout the year.",
    image: "/hairdresser-taking-care-her-client.jpg",
    pay: "₹30,000",
    load: "₹45,000",
    extraBenefits: "₹15,000",
    validity: "1 YEAR",
    popular: false,
  },
  {
    id: "ruby",
    title: "Ruby",
    description:
      "An ideal membership for regular clients who visit the salon frequently and want to maximize their savings with added benefits.",
    image: "/female-hairdresser-using-hairbrush-hair-dryer.jpg",
    pay: "₹20,000",
    load: "₹27,000",
    extraBenefits: "₹7,000",
    validity: "1 YEAR",
    popular: false,
  },
  {
    id: "silver",
    title: "Silver",
    description:
      "A great starting point for new members who want to experience our premium services with added benefits and savings.",
    image: "/young-woman-getting-beauty-treatment-her-eyebrows.jpg",
    pay: "₹10,000",
    load: "₹11,000",
    extraBenefits: "₹1,000",
    validity: "1 YEAR",
    popular: false,
  },
];

export default function SalonMembershipsSection() {
  const [headingIndex, setHeadingIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [activeMembership, setActiveMembership] = useState(null);
  const [cartMessage, setCartMessage] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [sortBy, setSortBy] = useState("default");
  const [compareMode, setCompareMode] = useState(false);
  const [selectedForCompare, setSelectedForCompare] = useState([]);
  const cartTimeoutRef = useRef(null);

  const handleBookAppointment = (event, label = "Membership") => {
    event?.stopPropagation();
    if (cartTimeoutRef.current) {
      clearTimeout(cartTimeoutRef.current);
    }
    setCartMessage(`${label} booked successfully`);
    cartTimeoutRef.current = setTimeout(() => setCartMessage(""), 3000);
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

  // Sort membership plans
  const sortedPlans = [...membershipPlans].sort((a, b) => {
    if (sortBy === "price-low") {
      return parseInt(a.pay.replace(/[₹,]/g, "")) - parseInt(b.pay.replace(/[₹,]/g, ""));
    } else if (sortBy === "price-high") {
      return parseInt(b.pay.replace(/[₹,]/g, "")) - parseInt(a.pay.replace(/[₹,]/g, ""));
    } else if (sortBy === "value") {
      const aValue = parseInt(a.load.replace(/[₹,]/g, "")) + parseInt(a.extraBenefits.replace(/[₹,]/g, ""));
      const bValue = parseInt(b.load.replace(/[₹,]/g, "")) + parseInt(b.extraBenefits.replace(/[₹,]/g, ""));
      return bValue - aValue;
    }
    return 0;
  });

  const toggleCompare = (planId) => {
    if (selectedForCompare.includes(planId)) {
      setSelectedForCompare(selectedForCompare.filter((id) => id !== planId));
    } else if (selectedForCompare.length < 3) {
      setSelectedForCompare([...selectedForCompare, planId]);
    }
  };

  return (
    <section id="memberships" className="bg-[#f7f7f7] text-[#1f1f2e]">
      {/* Hero Video - Full Width */}
      <div className="relative w-full overflow-hidden">
        <video
          src="/service_video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-[60vh] min-h-[500px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 px-4 sm:px-10 py-12 text-white md:px-20 lg:px-32">
          <h1 className="text-3xl sm:text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl" style={{ fontFamily: "serif" }}>
            Salon Memberships
          </h1>
          <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-white/90 md:text-lg lg:text-xl">
            Join SCENT's exclusive membership program and unlock premium benefits, exclusive discounts, and priority access to our expert stylists. Your journey to consistent beauty starts here!
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-8 px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12">

        {/* Header */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-[#1f1f2e] lg:text-[56px]"
            style={{ fontFamily: "serif" }}
          >
            <span
              key={mounted ? headingIndex : 0}
              className="inline-block"
              style={mounted ? { animation: "fadeIn 1s ease forwards" } : {}}
            >
              {headingPhrases[mounted ? headingIndex : 0]}
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-12 sm:w-16 bg-[#1f1f2e]" />
            <span className="text-pink-400 text-lg sm:text-xl">❀</span>
            <span className="h-px w-12 sm:w-16 bg-[#1f1f2e]" />
          </div>
          <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-[#555] md:text-lg px-2">
            Choose the perfect membership plan that fits your lifestyle and beauty needs. Each plan is designed to offer maximum value and exclusive benefits.
          </p>
        </div>

        {/* Membership Introduction Section */}
        <div className="w-full">
          <div className="mb-6 sm:mb-8 text-center">
            <h2
              className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-semibold text-[#1f1f2e] md:text-4xl lg:text-5xl"
              style={{ fontFamily: "serif" }}
            >
              Membership
            </h2>
            <div className="mx-auto mb-4 sm:mb-6 flex items-center justify-center gap-3 sm:gap-4">
              <span className="h-px w-10 sm:w-12 bg-[#1f1f2e]" />
              <span className="text-pink-400 text-lg sm:text-xl">❀</span>
              <span className="h-px w-10 sm:w-12 bg-[#1f1f2e]" />
            </div>
          </div>

          {/* Introduction Text */}
          <div className="mx-auto mb-8 sm:mb-12 max-w-4xl">
            <p className="text-center text-base sm:text-lg leading-relaxed text-[#444] md:text-xl lg:text-2xl">
              Introducing the <span className="font-semibold text-[#1f1f2e]">SCENT Membership</span> – your key to unlocking a world of beauty and relaxation. With our exclusive membership program, you'll enjoy a host of benefits designed to enhance your salon and spa experience.
            </p>
          </div>

          {/* Benefits Grid - New Layout */}
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {/* Priority Booking */}
              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute top-0 right-0 h-32 w-32 bg-black/5 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-lg bg-black text-white">
                      <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-[#1f1f2e]" style={{ fontFamily: "serif" }}>
                        Priority Booking
                      </h3>
                      <div className="mb-3 h-0.5 w-12 bg-black/20" />
                    </div>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-[#555]">
                    As a member, you'll receive priority booking for appointments, ensuring you always get the time and services you desire. Say goodbye to waiting in line – our members are our top priority.
                  </p>
                </div>
              </div>

              {/* Special Discounts */}
              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute top-0 right-0 h-32 w-32 bg-black/5 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-lg bg-black text-white">
                      <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-[#1f1f2e]" style={{ fontFamily: "serif" }}>
                        Special Discounts
                      </h3>
                      <div className="mb-3 h-0.5 w-12 bg-black/20" />
                    </div>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-[#555]">
                    Enjoy special discounts on all our services, including haircuts, spa treatments, nail services, and more. Whether you're in need of a quick trim or a full day of pampering, our membership ensures you get the best value for your money.
                  </p>
                </div>
              </div>

              {/* Exclusive Events */}
              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute top-0 right-0 h-32 w-32 bg-black/5 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-lg bg-black text-white">
                      <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-[#1f1f2e]" style={{ fontFamily: "serif" }}>
                        Exclusive Events
                      </h3>
                      <div className="mb-3 h-0.5 w-12 bg-black/20" />
                    </div>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-[#555]">
                    Members also have access to exclusive events, workshops, and product launches. Stay up-to-date with the latest trends and techniques in beauty and wellness, all while mingling with fellow members and our expert staff.
                  </p>
                </div>
              </div>

              {/* Easy Sign Up */}
              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute top-0 right-0 h-32 w-32 bg-black/5 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-lg bg-black text-white">
                      <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-[#1f1f2e]" style={{ fontFamily: "serif" }}>
                        Easy Sign Up
                      </h3>
                      <div className="mb-3 h-0.5 w-12 bg-black/20" />
                    </div>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-[#555]">
                    Joining the SCENT Membership is easy and hassle-free. Simply sign up at any of our salon locations and start reaping the rewards of membership today.
                  </p>
                </div>
              </div>
            </div>

            {/* Closing Statement - Eye-catching Design */}
            <div className="relative mt-10 sm:mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-black via-[#1a1a1a] to-black p-8 sm:p-12 md:p-16 shadow-2xl">
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-white blur-3xl" />
                <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white blur-3xl" />
              </div>
              
              {/* Decorative Lines */}
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center gap-6 text-center">
                {/* Decorative Icon/Quote Mark */}
                <div className="flex items-center justify-center gap-4 mb-2">
                  <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm">
                    <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </div>
                
                {/* Main Text */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white" style={{ fontFamily: "serif" }}>
                  Experience the difference of being a{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-white">SCENT</span>
                    <span className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </span>{" "}
                  member
                </h3>
                
                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-white/90 max-w-3xl">
                  Where beauty meets relaxation, and luxury becomes a way of life.
                </p>
                
                {/* Decorative Divider */}
                <div className="flex items-center justify-center gap-3 mt-4">
                  <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-white/50 to-white/50" />
                  <div className="h-2 w-2 rounded-full bg-white/60" />
                  <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent via-white/50 to-white/50" />
                </div>
                
                {/* Call to Action Hint */}
                <div className="mt-4 flex items-center gap-2 text-sm sm:text-base text-white/70">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="font-medium">Explore membership plans below</span>
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* Filter and Sort Controls */}
        <div className="flex w-full flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-xl sm:rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <label className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#1f1f2e]">Sort By:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#1f1f2e] focus:border-black focus:outline-none"
            >
              <option value="default" className="bg-white text-[#1f1f2e]">Default</option>
              <option value="price-low" className="bg-white text-[#1f1f2e]">Price: Low to High</option>
              <option value="price-high" className="bg-white text-[#1f1f2e]">Price: High to Low</option>
              <option value="value" className="bg-white text-[#1f1f2e]">Best Value</option>
            </select>
          </div>
          <button
            onClick={() => {
              setCompareMode(!compareMode);
              if (!compareMode) setSelectedForCompare([]);
            }}
            className={`rounded-lg border-2 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-all ${
              compareMode
                ? "border-black bg-black text-white hover:bg-black/80"
                : "border-gray-300 bg-white text-[#1f1f2e] hover:border-black hover:text-black"
            }`}
          >
            {compareMode ? "Exit Compare" : "Compare Plans"}
          </button>
        </div>

        {/* Membership Highlight */}
        <div className="w-full rounded-2xl sm:rounded-[28px] border border-gray-200 bg-white px-6 sm:px-10 py-6 sm:py-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-1">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#C06C84]" style={{ fontFamily: "serif" }}>
            Exclusive Membership Benefits
          </p>
          <h3
            className="mt-2 sm:mt-3 text-xl sm:text-2xl font-semibold text-[#1f1f2e] md:text-[30px] transition-all duration-700 ease-out hover:scale-[1.02]"
            style={{ fontFamily: "serif" }}
          >
            Six exclusive membership tiers — from Silver to Platinum luxury.
          </h3>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#555] md:text-lg">
            Whether you're a regular visitor or a beauty enthusiast, we have a membership plan tailored just for you. Pay once, get loaded credit, enjoy extra benefits, and use your membership for the entire validity period.
          </p>
        </div>

        {/* Membership Plans Grid */}
        <div className="grid w-full gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedPlans.map((plan, index) => {
            const isActive = activeMembership === plan.id;
            const isHovered = hoveredCard === plan.id;
            const isSelected = selectedForCompare.includes(plan.id);
            const isCompareMode = compareMode;
            const cardClasses = [
              "group relative flex flex-col cursor-pointer overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0px_25px_70px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0px_35px_90px_rgba(0,0,0,0.12)]",
              plan.popular && "border-black",
              !plan.popular && isSelected && "border-black bg-gray-50",
              isActive && "ring-4 ring-black/10",
            ]
              .filter(Boolean)
              .join(" ");
            
            return (
              <div
                key={plan.id}
                id={plan.id}
                className={cardClasses}
                onClick={() => {
                  if (isCompareMode) {
                    toggleCompare(plan.id);
                  } else {
                    setActiveMembership(plan.id);
                  }
                }}
                onMouseEnter={() => setHoveredCard(plan.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={mounted ? {
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease forwards",
                } : {}}
              >
                {plan.popular && (
                  <div className="absolute right-4 top-4 z-10 rounded-full border border-black bg-black px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    Most Popular
                  </div>
                )}
                {isCompareMode && (
                  <div
                    className={`absolute left-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border transition-all ${
                      isSelected
                        ? "border-black bg-black text-white"
                        : "border-gray-300 bg-white text-[#1f1f2e]"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCompare(plan.id);
                    }}
                  >
                    {isSelected && "✓"}
                  </div>
                )}
                
                {/* Image Section */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover transition-all duration-700 ${
                      isHovered ? "scale-110 brightness-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p 
                      className="pointer-events-auto cursor-pointer text-sm tracking-[0.3em] uppercase text-pink-100 transition-all hover:scale-110 hover:text-white" 
                      style={{ fontFamily: "serif" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMembership(plan.id);
                      }}
                    >
                      {plan.title}
                    </p>
                    <p 
                      className="pointer-events-auto cursor-pointer text-xs leading-relaxed text-white/80 transition-all hover:text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMembership(plan.id);
                      }}
                    >
                      {isCompareMode ? "Select to compare" : "Click to view full membership details"}
                    </p>
                    {!isCompareMode && (
                      <button
                        className="pointer-events-auto rounded-full border border-white/80 bg-white/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black hover:border-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMembership(plan.id);
                        }}
                      >
                        View Details
                      </button>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col gap-3 sm:gap-4 px-4 sm:px-6 pb-6 sm:pb-8 pt-8 sm:pt-12">
                  <div className="flex items-center justify-between">
                    <h3
                      className="text-lg sm:text-xl font-semibold text-[#1f1f2e]"
                      style={{ fontFamily: "serif" }}
                    >
                      {plan.title}
                    </h3>
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gray-400">
                      {isActive ? "Hide" : "View"}
                    </span>
                  </div>
                  
                  {/* Membership Details */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2 transition-all duration-300 hover:border-gray-300">
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">Pay</span>
                      <span className="text-lg font-bold text-[#1f1f2e]">
                        ₹<AnimatedCounter value={plan.pay} />
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2 transition-all duration-300 hover:border-gray-300">
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">Load</span>
                      <span className="text-lg font-bold text-[#1f1f2e]">
                        ₹<AnimatedCounter value={plan.load} />
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2 transition-all duration-300 hover:border-gray-300">
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">Extra Benefits</span>
                      <span className="text-lg font-bold text-[#1f1f2e]">
                        ₹<AnimatedCounter value={plan.extraBenefits} />
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">Validity</span>
                      <span className="text-sm font-semibold text-[#1f1f2e]">{plan.validity}</span>
                    </div>
                  </div>

                  {/* Value Indicator */}
                  <div className="mt-4 rounded-lg border border-gray-100 bg-gray-50 p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Total Value</span>
                      <span className="text-sm font-bold text-[#1f1f2e]">
                        {parseInt(plan.load.replace(/[₹,]/g, "")) + parseInt(plan.extraBenefits.replace(/[₹,]/g, "")) > parseInt(plan.pay.replace(/[₹,]/g, ""))
                          ? `+₹${(parseInt(plan.load.replace(/[₹,]/g, "")) + parseInt(plan.extraBenefits.replace(/[₹,]/g, "")) - parseInt(plan.pay.replace(/[₹,]/g, ""))).toLocaleString("en-IN")}`
                          : plan.pay}
                      </span>
                    </div>
                    <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white">
                      <div
                        className="h-full bg-black transition-all duration-1000"
                        style={{
                          width: `${Math.min(100, ((parseInt(plan.load.replace(/[₹,]/g, "")) + parseInt(plan.extraBenefits.replace(/[₹,]/g, ""))) / parseInt(plan.pay.replace(/[₹,]/g, ""))) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className={`space-y-3 text-sm text-[#555] transition-all duration-500 ${
                      isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <p className="leading-relaxed pt-2">{plan.description}</p>
                    <button
                      className="w-fit rounded-full border border-black px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black transition-all hover:bg-black hover:text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMembership(plan.id);
                      }}
                    >
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison View */}
        {compareMode && selectedForCompare.length > 0 && (
          <div className="w-full rounded-[28px] border border-gray-200 bg-white p-8 shadow-lg">
            <h3 className="mb-6 text-2xl font-semibold text-[#1f1f2e]" style={{ fontFamily: "serif" }}>
              Compare Plans
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {selectedForCompare.map((planId) => {
                const plan = membershipPlans.find((p) => p.id === planId);
                if (!plan) return null;
                return (
                  <div
                    key={planId}
                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
                  >
                    <h4 className="mb-3 text-lg font-semibold text-[#1f1f2e]">{plan.title}</h4>
                    <div className="space-y-2 text-sm text-[#555]">
                      <div className="flex justify-between">
                        <span>Pay:</span>
                        <span className="font-bold text-[#1f1f2e]">{plan.pay}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Load:</span>
                        <span className="font-bold text-[#1f1f2e]">{plan.load}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Benefits:</span>
                        <span className="font-bold text-[#1f1f2e]">{plan.extraBenefits}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Validity:</span>
                        <span className="font-bold text-[#1f1f2e]">{plan.validity}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Fullscreen Modal */}
        {activeMembership && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm">
            <div className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-[40px] border border-gray-200 bg-white shadow-[0px_40px_120px_rgba(0,0,0,0.25)] md:flex-row">
              {(() => {
                const activePlan = membershipPlans.find((item) => item.id === activeMembership);
                if (!activePlan) return null;
                return (
                  <>
                    <button
                      aria-label="Close modal"
                      className="absolute right-5 top-5 z-10 rounded-full border border-gray-200 bg-white/80 p-2 text-gray-700 transition hover:bg-black hover:text-white"
                      onClick={() => setActiveMembership(null)}
                    >
                      ✕
                    </button>
                    <div className="relative h-64 w-full md:h-auto md:w-1/2">
                      <Image
                        src={activePlan.image}
                        alt={activePlan.title}
                        fill
                        className="object-cover"
                        sizes="(max-width:768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm uppercase tracking-[0.4em]" style={{ fontFamily: "serif" }}>
                          {activePlan.title}
                        </p>
                        <p className="text-xs text-white/80">Exclusive membership benefits</p>
                      </div>
                    </div>
                    <div className="flex w-full flex-col gap-5 px-8 py-10 md:w-1/2">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-baseline gap-2">
                          <h3 className="text-3xl font-semibold text-[#1f1f2e]" style={{ fontFamily: "serif" }}>
                            {activePlan.title} Membership
                          </h3>
                          {activePlan.popular && (
                            <span className="rounded-full border border-black bg-black px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-sm leading-relaxed text-[#555]">{activePlan.description}</p>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                          Membership Details
                        </p>
                        <div className="grid grid-cols-1 gap-3">
                          <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4">
                            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">Pay</span>
                            <span className="text-2xl font-bold text-[#1f1f2e]">
                              ₹<AnimatedCounter value={activePlan.pay} />
                            </span>
                          </div>
                          <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4">
                            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">Load</span>
                            <span className="text-2xl font-bold text-[#1f1f2e]">
                              ₹<AnimatedCounter value={activePlan.load} />
                            </span>
                          </div>
                          <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4">
                            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">Extra Benefits</span>
                            <span className="text-2xl font-bold text-[#1f1f2e]">
                              ₹<AnimatedCounter value={activePlan.extraBenefits} />
                            </span>
                          </div>
                          <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4">
                            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">Validity</span>
                            <span className="text-xl font-bold text-[#1f1f2e]">{activePlan.validity}</span>
                          </div>
                        </div>
                        <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4">
                          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">Total Value</p>
                          <p className="text-lg font-bold text-[#1f1f2e]">
                            Pay {activePlan.pay} → Get {activePlan.load} + {activePlan.extraBenefits} Benefits
                          </p>
                          <p className="text-xs text-gray-500 mt-1">Valid for {activePlan.validity}</p>
                        </div>
                      </div>
                      <div className="mt-auto flex flex-wrap gap-3">
                        <button
                          className="rounded-full bg-black px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-black/80"
                          onClick={(e) => handleBookAppointment(e, activePlan.title)}
                        >
                          Join Membership
                        </button>
                        <button
                          className="rounded-full border border-black px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#1f1f2e] transition hover:bg-black hover:text-white"
                          onClick={() => setActiveMembership(null)}
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
        <div className="mt-8 sm:mt-12 flex flex-col items-center gap-4 sm:gap-6 text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-10 sm:w-12 bg-[#1f1f2e]" />
            <span className="text-pink-400 text-lg sm:text-xl">❀</span>
            <span className="h-px w-10 sm:w-12 bg-[#1f1f2e]" />
          </div>
          <h3 
            className="text-xl sm:text-2xl font-semibold text-[#1f1f2e] md:text-3xl"
            style={{ fontFamily: "serif" }}
          >
            Ready to Join SCENT Membership?
          </h3>
          <p className="max-w-2xl text-sm sm:text-base text-[#555] px-2">
            Choose your perfect plan and start enjoying exclusive benefits, discounts, and priority access today.
          </p>
          <button
            className="rounded-md border border-black bg-black px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-medium uppercase tracking-wide text-white transition-all hover:bg-transparent hover:text-black"
            onClick={(e) => handleBookAppointment(e, "Membership Plan")}
          >
            View All Plans
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


"use client";

import { useState } from "react";
import Image from "next/image";

const membershipPlans = [
  {
    id: "platinum",
    title: "Platinum",
    pay: "₹100,000",
    load: "₹160,000",
    extraBenefits: "₹60,000",
    validity: "3 YEARS",
    description: "the ultimate luxury membership for our most valued clients. Enjoy maximum benefits with the highest credit load and extended validity period.",
    image: "/Platinum Gift Card - SCENT.png",
  },
  {
    id: "sapphire",
    title: "Sapphire",
    pay: "₹75,000",
    load: "₹110,000",
    extraBenefits: "₹35,000",
    validity: "2 YEARS",
    description: "premium membership tier offering exceptional value with substantial credit load and extended benefits for dedicated beauty enthusiasts.",
    image: "/Sapphire Gift Card - SCENT.png",
  },
  {
    id: "diamond",
    title: "Diamond",
    pay: "₹50,000",
    load: "₹75,000",
    extraBenefits: "₹25,000",
    validity: "2 YEARS",
    description: "a prestigious membership plan designed for regular clients who seek premium services with excellent value and extended validity.",
    image: "/Diamond Gift Card - SCENT.png",
  },
  {
    id: "gold",
    title: "Gold",
    pay: "₹30,000",
    load: "₹45,000",
    extraBenefits: "₹15,000",
    validity: "1 YEAR",
    description: "perfect for frequent visitors who want to enjoy premium services with great savings and exclusive benefits throughout the year.",
    image: "/Gold Gift Card - SCENT.png",
  },
  {
    id: "ruby",
    title: "Ruby",
    pay: "₹20,000",
    load: "₹27,000",
    extraBenefits: "₹7,000",
    validity: "1 YEAR",
    description: "an ideal membership for regular clients who visit the salon frequently and want to maximize their savings with added benefits.",
    image: "/Ruby Gift Card - SCENT.png",
  },
  {
    id: "silver",
    title: "Silver",
    pay: "₹10,000",
    load: "₹11,000",
    extraBenefits: "₹1,000",
    validity: "1 YEAR",
    description: "a great starting point for new members who want to experience our premium services with added benefits and savings.",
    image: "/Silver Gift Card - SCENT.png",
  },
];

// Get background color and text colors based on gift card image
const getCardColors = (id) => {
  const colors = {
    platinum: {
      background: "#f5f5f5", // Light grey/silvery from Platinum card
      textColor: "#111",
      labelColor: "#777",
      accentColor: "#111",
    },
    sapphire: {
      background: "#1a1a2e", // Deep blue from Sapphire card
      textColor: "#ffffff",
      labelColor: "#b0b0b0",
      accentColor: "#ffffff",
    },
    diamond: {
      background: "#e8e8e8", // Silver-grey metallic from Diamond card
      textColor: "#111",
      labelColor: "#777",
      accentColor: "#111",
    },
    gold: {
      background: "#000000", // Black from Gold card
      textColor: "#D4AF37", // Gold text
      labelColor: "#b0b0b0",
      accentColor: "#D4AF37",
    },
    ruby: {
      background: "#8B0000", // Deep red from Ruby card
      textColor: "#ffffff",
      labelColor: "#e0e0e0",
      accentColor: "#ffffff",
    },
    silver: {
      background: "#1a1a1a", // Dark charcoal from Silver card
      textColor: "#ffffff",
      labelColor: "#b0b0b0",
      accentColor: "#ffffff",
    },
  };
  return colors[id] || colors.silver;
};

export default function SalonMembershipsSection() {
  const [flippedCards, setFlippedCards] = useState(new Set());

  const toggleFlip = (cardId) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  const openBookAppointment = (serviceName) => {
    if (typeof window !== "undefined") {
      const event = new CustomEvent("openBookAppointment", { detail: { service: serviceName || "" } });
      window.dispatchEvent(event);
    }
  };

  return (
    <section id="memberships" className="relative bg-white" style={{ paddingTop: "90px", paddingBottom: "110px" }}>
      <div className="mx-auto" style={{ maxWidth: "1200px", paddingLeft: "16px", paddingRight: "16px" }}>
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2
            className="mb-4 text-3xl font-light tracking-[0.2em] text-[#1a1a1a] sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'none' }}
          >
            Membership plans
          </h2>
          <div className="decorative-flower-divider mx-auto flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#1a1a1a]/30 sm:w-16" />
            <span className="text-pink-400 text-lg sm:text-xl">❀</span>
            <span className="h-px w-12 bg-[#1a1a1a]/30 sm:w-16" />
          </div>
        </div>

        {/* Membership Cards - Luxury Flip Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12" style={{ width: "100%" }}>
          {membershipPlans.map((plan) => {
            const isFlipped = flippedCards.has(plan.id);
            const cardColors = getCardColors(plan.id);
            
            return (
              <div
                key={plan.id}
                className="relative"
                style={{ 
                  perspective: "1000px",
                  WebkitPerspective: "1000px",
                  aspectRatio: "1.9 / 1",
                  minHeight: "240px",
                  width: "100%",
                }}
              >
                {/* Card Container with 3D Flip */}
                <div
                  className={`relative h-full w-full cursor-pointer membership-card-flip-container ${isFlipped ? "is-flipped" : ""}`}
                  style={{
                    transformStyle: "preserve-3d",
                    WebkitTransformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    WebkitTransform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    transition: "transform 0.7s ease",
                    WebkitTransition: "transform 0.7s ease",
                    width: "100%",
                    height: "100%",
                    touchAction: "manipulation",
                  }}
                  onClick={() => toggleFlip(plan.id)}
                  onTouchStart={(e) => {
                    // Prevent double-tap zoom on mobile
                    if (e.touches.length > 1) {
                      e.preventDefault();
                    }
                  }}
                >
                  {/* Front of Card - Only Image */}
                  <div
                    className="absolute inset-0 overflow-hidden membership-card-front"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(0deg)",
                      WebkitTransform: "rotateY(0deg)",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  >
                    <Image
                      src={plan.image}
                      alt={`${plan.title} Membership Card`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      priority={plan.id === "platinum" || plan.id === "gold" || plan.id === "silver"}
                    />
                  </div>

                  {/* Back of Card - Membership Details */}
                  <div
                    className="absolute inset-0 flex flex-col overflow-hidden membership-card-back"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      WebkitTransform: "rotateY(180deg)",
                      padding: "14px 10px",
                      justifyContent: "space-between",
                      backgroundColor: cardColors.background,
                      width: "100%",
                      height: "100%",
                      touchAction: "manipulation",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  >
                    <div className="flex-1 flex flex-col justify-between overflow-hidden">
                      {/* Top Section */}
                      <div className="overflow-hidden flex-1 min-h-0">
                        {/* Title */}
                        <h3
                          className="text-base sm:text-lg md:text-xl"
                          style={{
                            fontSize: "16px",
                            letterSpacing: "0.12em",
                            fontWeight: 700,
                            color: cardColors.textColor,
                            marginBottom: "12px",
                            fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif',
                          }}
                        >
                          {plan.title} MEMBERSHIP
                        </h3>

                        {/* Details */}
                        <div className="space-y-2">
                          {/* Pay */}
                  <div className="flex items-center justify-between">
                            <span
                              style={{
                                fontSize: "12px",
                                letterSpacing: "0.18em",
                                color: cardColors.labelColor,
                                fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                              }}
                            >
                              PAY
                            </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: 500,
                                color: cardColors.textColor,
                                fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif',
                              }}
                            >
                              {plan.pay}
                    </span>
                  </div>
                  
                          {/* Luxury Divider */}
                          <div
                        style={{
                              height: "1px",
                              background: "linear-gradient(to right, transparent, #d9d9d9, transparent)",
                            }}
                          />

                          {/* Load */}
                          <div className="flex items-center justify-between">
                            <span
                              style={{
                                fontSize: "12px",
                                letterSpacing: "0.18em",
                                color: cardColors.labelColor,
                                fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                              }}
                            >
                              LOAD
                            </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: 500,
                                color: cardColors.textColor,
                                fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif',
                              }}
                            >
                              {plan.load}
                            </span>
                          </div>

                          {/* Luxury Divider */}
                          <div
                            style={{
                              height: "1px",
                              background: `linear-gradient(to right, transparent, ${cardColors.labelColor}40, transparent)`,
                            }}
                          />

                          {/* Benefits */}
                          <div className="flex items-center justify-between">
                            <span
                              style={{
                                fontSize: "12px",
                                letterSpacing: "0.18em",
                                color: cardColors.labelColor,
                                fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                              }}
                            >
                              BENEFITS
                            </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: 500,
                                color: cardColors.textColor,
                                fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif',
                              }}
                            >
                              {plan.extraBenefits}
                            </span>
                          </div>

                          {/* Luxury Divider */}
                          <div
                            style={{
                              height: "1px",
                              background: `linear-gradient(to right, transparent, ${cardColors.labelColor}40, transparent)`,
                            }}
                          />

                          {/* Validity */}
                          <div className="flex items-center justify-between">
                            <span
                              style={{
                                fontSize: "12px",
                                letterSpacing: "0.18em",
                                color: cardColors.labelColor,
                                fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif',
                                fontWeight: 300,
                              }}
                            >
                              VALIDITY
                            </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: 500,
                                color: cardColors.textColor,
                                fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif',
                              }}
                            >
                              {plan.validity}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p
                          className="description-main mt-3 !text-left"
                          style={{
                            fontSize: "12px",
                            lineHeight: "1.4",
                            color: cardColors.labelColor,
                          }}
                        >
                          {plan.description}
                        </p>
                      </div>

                      {/* Bottom Section */}
                      <div className="mt-3 flex justify-center flex-shrink-0">
                        {/* Luxury CTA Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openBookAppointment(`${plan.title} Membership`);
                          }}
                          className="luxury-cta-button text-xs sm:text-sm"
                          style={{
                            height: "32px",
                            borderRadius: "999px",
                            border: `1px solid ${cardColors.accentColor}`,
                            background: "transparent",
                            letterSpacing: "0.15em",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: cardColors.textColor,
                            cursor: "pointer",
                            fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif',
                            textTransform: "uppercase",
                            transition: "all 0.35s ease",
                            padding: "0 12px",
                            maxWidth: "calc(100% - 8px)",
                            width: "auto",
                            display: "inline-block",
                            whiteSpace: "nowrap",
                            boxSizing: "border-box",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = cardColors.accentColor;
                            e.currentTarget.style.color = cardColors.background === "#000000" || cardColors.background === "#1a1a1a" || cardColors.background === "#1a1a2e" || cardColors.background === "#8B0000" ? cardColors.background : "#fff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = cardColors.textColor;
                          }}
                        >
                          BOOK NOW
                        </button>
                      </div>
                    </div>
            </div>
          </div>
          </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

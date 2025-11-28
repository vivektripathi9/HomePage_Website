"use client";

import { useState } from "react";
import Image from "next/image";

const advantages = [
  {
    title: "Brand Recognition",
    description: "SCENT is already a well-known name in the beauty industry, recognized for its exceptional quality and customer service. Your salon franchise in Bangalore will benefit from this established reputation, attracting clients from day one.",
  },
  {
    title: "Comprehensive Training",
    description: "We provide extensive training programs for you and your staff, ensuring that your Salon Franchise in Bangalore operates smoothly and meets our high standards. From hair styling and skincare techniques to customer service and management, we cover it all.",
  },
  {
    title: "Marketing and Promotional Support",
    description: "Our marketing team will help you create buzz around your new Salon Franchise in Bangalore through strategic campaigns, social media promotions, and local events. This ensures a steady stream of customers eager to experience SCENT's renowned services.",
  },
  {
    title: "Proven Business Model",
    description: "With years of experience in the industry, we have developed a successful business model that reduces risk and increases profitability. When you choose a Salon Franchise in Bangalore with SCENT, you're leveraging a proven formula that works.",
  },
  {
    title: "Exclusive Access to Premium Products",
    description: "SCENT franchises have access to exclusive, high-quality beauty products that are not available to other salons. This unique offering sets your Salon Franchise in Bangalore apart, ensuring customer loyalty and repeat business.",
  },
];

const steps = [
  {
    number: "1",
    title: "Initial Consultation",
    description: "Our team will discuss your goals, budget, and location preferences to determine the best strategy for your salon franchise.",
  },
  {
    number: "2",
    title: "Franchise Agreement",
    description: "Once the terms are agreed upon, we will sign a franchise agreement that outlines your responsibilities, the support you will receive, and other key details.",
  },
  {
    number: "3",
    title: "Site Selection and Setup",
    description: "Our experts will help you choose the ideal location for your Salon Franchise in Bangalore, ensuring maximum visibility and foot traffic. We will also assist with the interior design, layout, and equipment setup to create a space that reflects the SCENT brand.",
  },
  {
    number: "4",
    title: "Training and Staffing",
    description: "Comprehensive training will be provided for you and your staff, covering all aspects of salon management, customer service, and beauty treatments.",
  },
  {
    number: "5",
    title: "Grand Opening",
    description: "We will support you with a grand opening event to create buzz and attract your first clients. From there, you will have ongoing support from our marketing, operations, and training teams.",
  },
];

export default function FranchiseSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you! We'll contact you soon.");
      setFormData({ name: "", email: "", phone: "", details: "" });
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1000);
  };

  return (
    <section className="bg-[#f7f7f7] text-[#1f1f2e]">
      {/* Hero Video Section */}
      <div className="relative w-full overflow-hidden">
        <video
          src="/service_video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-[60vh] min-h-[500px] sm:min-h-[600px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 sm:px-6 md:px-12 lg:px-20 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: "serif" }}>
            Unlock the Opportunity
          </h1>
          <p className="max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90">
            Start Your Own Salon Franchise in Bangalore with SCENT
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-4">
            <span className="h-px w-12 sm:w-20 bg-white/50" />
            <span className="text-pink-400 text-lg sm:text-xl">❀</span>
            <span className="h-px w-12 sm:w-20 bg-white/50" />
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20">
        {/* Introduction */}
        <div className="mb-12 sm:mb-16">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#444] max-w-4xl mx-auto text-center">
            If you're dreaming of owning a business that combines creativity, style, and a thriving market, look no further than a Salon Franchise in Bangalore with SCENT. As one of the most cosmopolitan cities in India, Bangalore is a hub of fashion and beauty, making it the ideal location to start your journey in the lucrative salon industry. At SCENT, we offer a unique opportunity to tap into this ever-growing demand by partnering with a renowned brand that is synonymous with quality, innovation, and customer satisfaction.
          </p>
        </div>

        {/* Why Choose Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1f1f2e] mb-4" style={{ fontFamily: "serif" }}>
              Why Choose a Salon Franchise in Bangalore?
            </h2>
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
              <span className="h-px w-12 sm:w-20 bg-[#1f1f2e]" />
              <span className="text-pink-400 text-lg sm:text-xl">❀</span>
              <span className="h-px w-12 sm:w-20 bg-[#1f1f2e]" />
            </div>
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-[#555] max-w-4xl mx-auto text-center">
            Choosing a Salon Franchise in Bangalore with SCENT provides you with a proven business model, industry expertise, and a strong brand reputation. The beauty and wellness industry in Bangalore is booming, with a steady influx of young professionals, expats, and fashion-conscious consumers who seek the best in beauty treatments. A salon franchise with SCENT allows you to cater to this dynamic market with confidence, offering premium services that are trusted by thousands.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="mb-12 sm:mb-16 grid gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1f1f2e] mb-6" style={{ fontFamily: "serif" }}>
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1f1f2e] mb-2">
                  Name
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
                  Email
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
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#1f1f2e] mb-2">
                  Phone
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
                <label htmlFor="details" className="block text-sm font-medium text-[#1f1f2e] mb-2">
                  Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#1f1f2e] focus:border-black focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your interest in franchising..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-black px-6 py-3 text-sm sm:text-base font-semibold uppercase tracking-wide text-white transition-all hover:bg-black/80 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              {submitMessage && (
                <p className="text-sm text-green-600 font-medium">{submitMessage}</p>
              )}
            </form>
          </div>

          <div className="order-1 md:order-2 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-6 sm:p-8 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1f1f2e] mb-6" style={{ fontFamily: "serif" }}>
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-black text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                  <a href="mailto:franchisee@scentlifestyle.com" className="text-base sm:text-lg font-semibold text-[#1f1f2e] hover:text-black transition-colors">
                    franchisee@scentlifestyle.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-black text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Phone</p>
                  <a href="tel:+919591522700" className="text-base sm:text-lg font-semibold text-[#1f1f2e] hover:text-black transition-colors">
                    +91 9591522700
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SCENT Advantage Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1f1f2e] mb-4" style={{ fontFamily: "serif" }}>
              The SCENT Advantage for Your Salon Franchise in Bangalore
            </h2>
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
              <span className="h-px w-12 sm:w-20 bg-[#1f1f2e]" />
              <span className="text-pink-400 text-lg sm:text-xl">❀</span>
              <span className="h-px w-12 sm:w-20 bg-[#1f1f2e]" />
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-[#555] max-w-3xl mx-auto">
              When you decide to open a Salon Franchise in Bangalore with SCENT, you're not just opening a salon; you're becoming part of a brand that is synonymous with luxury, style, and cutting-edge beauty trends. Our franchise model comes with numerous benefits:
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute top-0 right-0 h-24 w-24 bg-black/5 rounded-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-black text-white">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#1f1f2e]" style={{ fontFamily: "serif" }}>
                      {advantage.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-[#555]">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1f1f2e] mb-4" style={{ fontFamily: "serif" }}>
              Steps to Open Your Salon Franchise in Bangalore with SCENT
            </h2>
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
              <span className="h-px w-12 sm:w-20 bg-[#1f1f2e]" />
              <span className="text-pink-400 text-lg sm:text-xl">❀</span>
              <span className="h-px w-12 sm:w-20 bg-[#1f1f2e]" />
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-[#555] max-w-3xl mx-auto">
              Opening a Salon Franchise in Bangalore with SCENT is a straightforward process designed to get you up and running quickly:
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 sm:gap-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 items-center justify-center rounded-full bg-black text-2xl sm:text-3xl font-bold text-white">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1f1f2e] mb-3" style={{ fontFamily: "serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-[#555]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="mb-12 sm:mb-16 rounded-3xl bg-gradient-to-br from-black via-[#1a1a1a] to-black p-8 sm:p-12 md:p-16 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4" style={{ fontFamily: "serif" }}>
              Success Stories from Our Salon Franchise in Bangalore
            </h2>
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
              <span className="h-px w-12 sm:w-20 bg-white/50" />
              <span className="text-pink-400 text-lg sm:text-xl">❀</span>
              <span className="h-px w-12 sm:w-20 bg-white/50" />
            </div>
          </div>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90 max-w-4xl mx-auto text-center">
            Many entrepreneurs have found tremendous success by opening a Salon Franchise in Bangalore with SCENT. Our franchisees come from diverse backgrounds – from beauty professionals to corporate executives – all united by their passion for the beauty industry and commitment to excellence. With SCENT's guidance, they have transformed their dreams into reality, enjoying financial success and personal fulfillment.
          </p>
        </div>

        {/* What Makes SCENT Best Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1f1f2e] mb-4" style={{ fontFamily: "serif" }}>
              What Makes SCENT the Best Choice for Your Salon Franchise in Bangalore?
            </h2>
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
              <span className="h-px w-12 sm:w-20 bg-[#1f1f2e]" />
              <span className="text-pink-400 text-lg sm:text-xl">❀</span>
              <span className="h-px w-12 sm:w-20 bg-[#1f1f2e]" />
            </div>
          </div>
          <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
            <p className="text-base sm:text-lg leading-relaxed text-[#555]">
              Bangalore is a vibrant city, full of opportunities for growth and innovation in the beauty sector. By partnering with SCENT, you are choosing a brand that understands the nuances of this market and has a track record of success. Our Salon Franchise in Bangalore is tailored to suit the unique needs of Bangalore's clientele, providing premium services that include hair styling, skincare, nail art, spa treatments, and more.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[#555]">
              At SCENT, we believe in empowering our franchisees. That's why we provide you with the tools, training, and support necessary to make your Salon Franchise in Bangalore a success. From the moment you sign the franchise agreement, you become a valued partner in our network, benefiting from our reputation, resources, and expertise.
            </p>
          </div>
        </div>

        {/* Profitable Opportunity Section */}
        <div className="mb-12 sm:mb-16 rounded-2xl border-l-4 border-black bg-gradient-to-r from-gray-50 to-white p-6 sm:p-8 md:p-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1f1f2e] mb-4" style={{ fontFamily: "serif" }}>
            A Profitable Business Opportunity Awaits
          </h3>
          <p className="text-base sm:text-lg leading-relaxed text-[#555]">
            The demand for high-quality beauty services in Bangalore continues to grow, making now the perfect time to invest in a Salon Franchise in Bangalore. With SCENT's support, you can enter this booming market with confidence, knowing you have a trusted brand backing you every step of the way.
          </p>
        </div>

        {/* Final CTA Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black via-[#1a1a1a] to-black p-8 sm:p-12 md:p-16 text-center text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "serif" }}>
              How to Get Started
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto mb-8">
              If you're ready to take the first step toward owning a Salon Franchise in Bangalore, contact us today! Our team will provide you with all the information you need to make an informed decision and guide you through the process of becoming a SCENT franchisee. Don't miss this opportunity to be part of a brand that is redefining the beauty industry.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white/90 max-w-4xl mx-auto italic">
              Owning a Salon Franchise in Bangalore with SCENT is more than just a business opportunity – it's a chance to be part of a growing community of beauty enthusiasts, entrepreneurs, and professionals who are passionate about delivering exceptional services. With our proven business model, strong brand reputation, and ongoing support, you can turn your dream of owning a salon into a profitable reality. Join us and experience the SCENT difference today!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:franchisee@scentlifestyle.com"
                className="rounded-lg bg-white px-8 py-3 text-base font-semibold uppercase tracking-wide text-black transition-all hover:bg-gray-100"
              >
                Contact Us Now
              </a>
              <a
                href="tel:+919591522700"
                className="rounded-lg border-2 border-white px-8 py-3 text-base font-semibold uppercase tracking-wide text-white transition-all hover:bg-white hover:text-black"
              >
                Call Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


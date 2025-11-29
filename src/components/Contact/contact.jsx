"use client";

import { useState } from "react";
import Image from "next/image";

const contactInfo = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Phone",
    content: "1-800-915-6270",
    link: "tel:18009156270",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    content: "info@scentlifestyle.com",
    link: "mailto:info@scentlifestyle.com",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Location",
    content: "Lavelle Road, Bengaluru",
    link: "https://www.google.com/maps/search/?api=1&query=Scent+Salon+Lavelle+Road+Bengaluru",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Hours",
    content: "Mon-Sat: 9:00 AM - 6:00 PM",
    link: "#",
  },
];

const openingHours = [
  { day: "Monday - Tuesday", time: "9:00 AM - 6:00 PM" },
  { day: "Wednesday - Friday", time: "8:00 AM - 5:00 PM" },
  { day: "Saturday", time: "9:00 AM - 3:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const socialLinks = [
  { name: "Facebook", icon: "/x1.png", href: "https://www.facebook.com/ScentSalonSpas/" },
  { name: "X (Twitter)", icon: "/x2.png", href: "https://x.com/scentlifestyle" },
  { name: "Instagram", icon: "/x3.png", href: "https://www.instagram.com/scentlifestyle/" },
  { name: "Pinterest", icon: "/x4.png", href: "https://in.pinterest.com/scentlifestyle/" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setShowSuccessModal(true);
        // Redirect to home page after 4 seconds
        setTimeout(() => {
          window.location.href = "/";
        }, 4000);
      } else {
        setSubmitMessage(`Error: ${data.error || "Failed to send message. Please try again."}`);
        setIsSubmitting(false);
        setTimeout(() => setSubmitMessage(""), 8000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage("Something went wrong. Please try again later or contact us directly.");
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 8000);
    }
  };

  return (
    <section className="bg-[#fafafa] text-[#1f1f2e]">
      {/* Hero Section - Simplified */}
      <div className="relative w-full bg-gradient-to-br from-black via-[#1a1a1a] to-black py-16 sm:py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4" style={{ fontFamily: "serif" }}>
            Get in Touch
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-white/80">
            We'd love to hear from you. Reach out to us and let's start a conversation.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 -mt-4 sm:-mt-8 md:-mt-12 lg:-mt-16">
        {/* Contact Info Cards - Compact Horizontal Layout */}
        <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 sm:mb-12 md:mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : undefined}
              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-black text-white transition-all duration-300 group-hover:bg-red-600 group-hover:scale-110">
                  {info.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm font-semibold text-[#1f1f2e] mb-1" style={{ fontFamily: "serif" }}>
                    {info.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555] leading-tight break-words">{info.content}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 mb-8 sm:mb-12 md:mb-16">
          {/* Contact Form - Left Column */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1f1f2e] mb-2" style={{ fontFamily: "serif" }}>
              Send Us a Message
            </h2>
            <p className="text-sm sm:text-base text-[#555] mb-6 sm:mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-[#1f1f2e] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm sm:text-base text-[#1f1f2e] focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-[#1f1f2e] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm sm:text-base text-[#1f1f2e] focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-[#1f1f2e] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm sm:text-base text-[#1f1f2e] focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-colors"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-[#1f1f2e] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm sm:text-base text-[#1f1f2e] focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-[#1f1f2e] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm sm:text-base text-[#1f1f2e] focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-black px-6 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-wide text-white transition-all hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitMessage && (
                <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                  <p className="text-sm text-green-800 font-medium">{submitMessage}</p>
                </div>
              )}
            </form>
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-6 sm:space-y-8">
            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-black to-[#1a1a1a] rounded-2xl border border-gray-200 p-6 sm:p-8 text-white shadow-sm">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ fontFamily: "serif" }}>
                Need Immediate Assistance?
              </h3>
              <p className="text-sm text-white/80 mb-6 leading-relaxed">
                Call us directly or visit one of our locations for instant help.
              </p>
              <a
                href="tel:+919742232700"
                className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-white px-6 py-3.5 text-sm sm:text-base font-semibold text-black transition-all hover:bg-red-600 hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call +91 9742232700
              </a>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1f1f2e] mb-6" style={{ fontFamily: "serif" }}>
                Opening Hours
              </h3>
              <div className="space-y-3">
                {openingHours.map((hour, index) => (
                  <div key={index} className="flex items-center justify-between pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-[#1f1f2e]">{hour.day}</span>
                    <span className="text-sm text-[#555]">{hour.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1f1f2e] mb-6" style={{ fontFamily: "serif" }}>
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-gray-200 bg-white overflow-hidden transition-all hover:border-red-600 hover:scale-110"
                    aria-label={social.name}
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section - Full Width */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8 lg:p-10 shadow-sm mb-8 sm:mb-12 md:mb-16">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1f1f2e] mb-4" style={{ fontFamily: "serif" }}>
              Find Us
            </h3>
            <div className="mb-6">
              <p className="text-sm sm:text-base text-[#555] mb-2">
                <span className="font-semibold text-[#1f1f2e]">Address:</span>
              </p>
              <p className="text-sm sm:text-base text-[#555] leading-relaxed">
                Scent Salon | Lavelle Road, No. 67/2, 1st Floor, Opposite. 3rd Cross Lavelle Road, Bengaluru, Karnataka 560001
              </p>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden rounded-xl bg-gray-100 mb-6">
            <iframe
              src="https://www.google.com/maps?q=Scent+Salon+Lavelle+Road+No+67/2+1st+Floor+Opposite+3rd+Cross+Lavelle+Road+Bengaluru+Karnataka+560001&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="SCENT Salon Location - Lavelle Road, Bengaluru"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Scent+Salon+Lavelle+Road+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-black bg-white px-6 py-3 text-sm sm:text-base font-semibold text-black transition-all hover:bg-black hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open in Google Maps
            </a>
            <a
              href="https://maps.apple.com/?q=Scent+Salon+Lavelle+Road+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-sm sm:text-base font-semibold text-[#1f1f2e] transition-all hover:border-black hover:bg-gray-50"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Open in Apple Maps
            </a>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 p-8 sm:p-10 text-center animate-zoomIn">
            {/* Success Icon */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
                <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600">
                  <svg className="h-12 w-12 sm:h-14 sm:w-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Success Message */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1f1f2e] mb-3" style={{ fontFamily: "serif" }}>
              Message Sent Successfully!
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              Thank you for contacting us. We've received your message and will get back to you soon.
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


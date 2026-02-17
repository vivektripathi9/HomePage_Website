"use client";

import { useState, useEffect } from "react";

export default function BookNowSection() {
  const [appointmentForm, setAppointmentForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appointmentMessage, setAppointmentMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setAppointmentForm({
      ...appointmentForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleAppointmentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAppointmentMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: appointmentForm.name,
          email: appointmentForm.email,
          phone: appointmentForm.phone,
          subject: `Appointment Booking - ${appointmentForm.service}`,
          message: `Appointment Booking Request:\n\nService: ${appointmentForm.service}\nDate: ${appointmentForm.date}\nTime: ${appointmentForm.time}\n\nMessage: ${appointmentForm.message || "No additional message"}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setAppointmentForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          message: "",
        });
        setAppointmentMessage("Thank you! Your appointment request has been sent. We'll confirm your booking soon.");
        setTimeout(() => setAppointmentMessage(""), 8000);
      } else {
        setAppointmentMessage(`Error: ${data.error || "Failed to send appointment request. Please try again."}`);
        setTimeout(() => setAppointmentMessage(""), 8000);
      }
    } catch (error) {
      console.error("Appointment submission error:", error);
      setAppointmentMessage("Something went wrong. Please try again later or contact us directly.");
      setTimeout(() => setAppointmentMessage(""), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Listen for service name from sessionStorage and other components
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check sessionStorage for service name
      const serviceName = sessionStorage.getItem("bookNowService");
      if (serviceName) {
        setAppointmentForm(prev => ({
          ...prev,
          service: serviceName,
        }));
        // Clear sessionStorage after using it
        sessionStorage.removeItem("bookNowService");
      }

      // Scroll to top of section on mount
      setTimeout(() => {
        const element = document.getElementById("book-now");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  return (
    <section id="book-now" className="relative bg-gradient-to-b from-white via-[#fafafa] to-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-10 text-center">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1f1f2e] mb-3 uppercase tracking-[0.05em]"
            style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}
          >
            Book Your Appointment
          </h2>
          <div className="mx-auto mb-4 flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-10 sm:w-12 bg-[#1f1f2e]" />
            <span className="text-pink-400 text-lg sm:text-xl">❀</span>
            <span className="h-px w-10 sm:w-12 bg-[#1f1f2e]" />
          </div>
          <p className="text-sm sm:text-base text-gray-600 font-light max-w-2xl mx-auto" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
            Fill in your details and we'll confirm your booking
          </p>
        </div>

        {/* Form */}
        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleAppointmentSubmit} className="space-y-4 sm:space-y-5 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 md:p-10 shadow-lg">
            <div>
              <label htmlFor="book-name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="book-name"
                name="name"
                required
                value={appointmentForm.name}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="book-email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="book-email"
                name="email"
                required
                value={appointmentForm.email}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="book-phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="book-phone"
                name="phone"
                required
                value={appointmentForm.phone}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                placeholder="+91 9876543210"
              />
            </div>
            
            <div>
              <label htmlFor="book-service" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Service *
              </label>
              <select
                id="book-service"
                name="service"
                required
                value={appointmentForm.service}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
              >
                <option value="">Select a service</option>
                <option value="Hair Services">Hair Services</option>
                <option value="Beauty Treatments">Beauty Treatments</option>
                <option value="Nail Services">Nail Services</option>
                <option value="Skincare">Skincare</option>
                <option value="Makeup">Makeup</option>
                <option value="Massage Therapy">Massage Therapy</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="book-date" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="book-date"
                  name="date"
                  required
                  value={appointmentForm.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full rounded-md border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                />
              </div>
              
              <div>
                <label htmlFor="book-time" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Preferred Time *
                </label>
                <input
                  type="time"
                  id="book-time"
                  name="time"
                  required
                  value={appointmentForm.time}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="book-message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Additional Message
              </label>
              <textarea
                id="book-message"
                name="message"
                rows={3}
                value={appointmentForm.message}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 resize-none"
                placeholder="Any special requests or notes..."
              />
            </div>
            
            {appointmentMessage && (
              <div className={`rounded-lg p-3 text-xs sm:text-sm ${
                appointmentMessage.includes("Thank you") 
                  ? "bg-green-50 border border-green-200 text-green-800" 
                  : "bg-red-50 border border-red-200 text-red-800"
              }`}>
                {appointmentMessage}
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 rounded-md bg-red-600 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Book Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

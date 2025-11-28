"use client";

import Image from "next/image";
import { useState } from "react";

const menuItems = [
  "Home",
  "Service",
  "Salon Memberships",
  "Shops",
  "Franchise",
  "Academy",
  "Contact",
];

const services = [
  { name: "Hair Services", href: "/services" },
  { name: "Beauty Treatments", href: "/new-service" },
  { name: "Nail Services", href: "/nails" },
  { name: "Skincare", href: "/new-service" },
  { name: "Makeup", href: "/bridal" },
  { name: "Massage Therapy", href: "/spa" },
];

const franchiseItems = [
  { name: "Why Choose SCENT", href: "/franchise#why-choose" },
  { name: "The SCENT Advantage", href: "/franchise#advantage" },
  { name: "Steps to Get Started", href: "/franchise#steps" },
  { name: "Success Stories", href: "/franchise#success" },
  { name: "Contact Franchise Team", href: "/franchise#contact" },
];

const shopCategories = [
  {
    name: "Beauty Garage",
    products: [
      { name: "Shea Butter Retention Treatment Hair Oil 50ml", price: "₹1,950" },
      { name: "Shea Butter Retention Treatment Hair butter 250ml", price: "₹2,220" },
      { name: "Shea Butter Retention Treatment Shampoo 300ml", price: "₹1,500" },
      { name: "K9 Botoplexx Conditioner 300ml", price: "₹1,500" },
      { name: "K9 Botoplexx Shampoo 300ml", price: "₹1,500" },
      { name: "K9 Botoplexx Retention Masque 300ml", price: "₹2,040" },
      { name: "K9 Frizz Dismiss Hair Oil with Morocco Argan 50ml", price: "₹1,140" },
      { name: "Botoliss Acidic Bonding Concentrate Shampoo 300ml", price: "₹1,860" },
      { name: "Botoliss Acidic Bonding Concentrate Hair Mask 200ml", price: "₹1,860" },
      { name: "Botoliss Smooth sheild Hair Serum 50ml", price: "₹1,950" },
      { name: "Botoliss Gloss Like Glass Shine Spray 30ml", price: "₹1,500" },
      { name: "Scalp Sense Hydra Soothe for Dry Scalp Shampoo 200ml", price: "₹1,320" },
      { name: "Scalp Sense Oil Out Shampoo 200ml", price: "₹1,320" },
      { name: "Scalp Sense Dandruff Defense Shampoo 200ml", price: "₹1,590" },
      { name: "Scalp Sense Hairfall Defense Shampoo 200ml", price: "₹1,590" },
      { name: "Scalp Sense Hair & Scalp Conditioner 200ml", price: "₹1,320" },
      { name: "Scalp Sense Leave In Treatment 60ml", price: "₹2,400" },
    ],
  },
  {
    name: "Olaplex",
    products: [
      { name: "Repair and Protect", price: "View Price" },
      { name: "Hydration Supreme", price: "View Price" },
      { name: "Bond Smoother", price: "View Price" },
    ],
  },
  {
    name: "Schwarzkopf",
    products: [
      { name: "Colour Freeze Shampoo", price: "View Price" },
      { name: "Colour Freeze Wax", price: "View Price" },
      { name: "Mess Up", price: "View Price" },
      { name: "THRILL", price: "View Price" },
      { name: "Session Label-The Flexible", price: "View Price" },
      { name: "Session Label-The Strong", price: "View Price" },
      { name: "Fiber Clinix Fortifying Shampoo", price: "View Price" },
      { name: "Fiber Clinix Hydrating Shampoo", price: "View Price" },
      { name: "Fiber Clinix Tame Shampoo", price: "View Price" },
      { name: "Fiber Clinix Tame Treatment", price: "View Price" },
      { name: "Fiber Clinix Vibrancy Shampoo", price: "View Price" },
      { name: "Fiber Clinix Vibrancy Treatment", price: "View Price" },
      { name: "Moisture Kick Spray Conditioner", price: "View Price" },
      { name: "Flewax", price: "View Price" },
      { name: "Grip", price: "View Price" },
      { name: "Goodbye Yellow", price: "View Price" },
      { name: "Frizz Away Smoothing Oil", price: "View Price" },
      { name: "Root Activating Shampoo", price: "View Price" },
      { name: "Anti Dandruff Shampoo", price: "View Price" },
      { name: "Bounty Balm", price: "View Price" },
      { name: "Repair Rescue Sealed Ends", price: "View Price" },
    ],
  },
];

const contactItems = [
  { name: "Phone", value: "+91 9742232700", href: "tel:+919742232700", icon: "phone" },
  { name: "Email", value: "info@scentlifestyle.com", href: "mailto:info@scentlifestyle.com", icon: "email" },
  { name: "Location", value: "Lavelle Road, Bengaluru", href: "https://www.google.com/maps/search/?api=1&query=Scent+Salon+Lavelle+Road+Bengaluru", icon: "location" },
  { name: "Hours", value: "Mon-Sat: 9:00 AM - 6:00 PM", href: "/contact#hours", icon: "clock" },
];

export default function Navbar() {
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isFranchiseOpen, setIsFranchiseOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isBookAppointmentOpen, setIsBookAppointmentOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [appointmentForm, setAppointmentForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleAppointmentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission - you can integrate with your backend or WhatsApp
    const whatsappMessage = `Hello! I would like to book an appointment:\n\nName: ${appointmentForm.name}\nEmail: ${appointmentForm.email}\nPhone: ${appointmentForm.phone}\nService: ${appointmentForm.service}\nDate: ${appointmentForm.date}\nTime: ${appointmentForm.time}\nMessage: ${appointmentForm.message}`;
    const whatsappUrl = `https://wa.me/919742232700?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsBookAppointmentOpen(false);
    setAppointmentForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setAppointmentForm({
      ...appointmentForm,
      [e.target.name]: e.target.value,
    });
  };

  // Search functionality
  const searchItems = [
    { name: "Hair Services", href: "/services", category: "Service" },
    { name: "Beauty Treatments", href: "/new-service", category: "Service" },
    { name: "Nail Services", href: "/nails", category: "Service" },
    { name: "Skincare", href: "/new-service", category: "Service" },
    { name: "Makeup", href: "/bridal", category: "Service" },
    { name: "Massage Therapy", href: "/spa", category: "Service" },
    { name: "Salon Memberships", href: "/salon-memberships", category: "Page" },
    { name: "Franchise", href: "/franchise", category: "Page" },
    { name: "Academy", href: "/academy", category: "Page" },
    { name: "Contact", href: "/contact", category: "Page" },
    { name: "Shops", href: "/shops", category: "Page" },
    { name: "Haircut & Styling", href: "/services", category: "Service" },
    { name: "Hair Coloring", href: "/services", category: "Service" },
    { name: "Hair Treatment", href: "/services", category: "Service" },
    { name: "Beard Styling", href: "/services", category: "Service" },
    { name: "Facial Care", href: "/new-service", category: "Service" },
    { name: "Olaplex", href: "/shops", category: "Product" },
    { name: "Schwarzkopf", href: "/shops", category: "Product" },
    { name: "Beauty Garage", href: "/shops", category: "Product" },
  ];

  const filteredResults = searchQuery.trim()
    ? searchItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (filteredResults.length > 0) {
      window.location.href = filteredResults[0].href;
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      {/* Top Bar */}
      <div className="w-full border-b border-gray-200 px-4 sm:px-6 md:px-12 lg:px-20 py-2 text-xs sm:text-sm text-gray-700">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
          <div className="flex items-center gap-1 sm:gap-2">
            <Image src="/icons/phone-red.svg" alt="phone icon" width={14} height={14} className="sm:w-4 sm:h-4" />
            <span className="font-medium text-xs sm:text-sm">Contact:</span>
            <a href="tel:18009156270" className="text-gray-600 hover:text-red-500 text-xs sm:text-sm">
              1-800-915-6270
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Image src="/icons/clock-red.svg" alt="clock icon" width={16} height={16} />
            <span className="font-medium">Work time:</span>
            <span>9:00–18:00</span>
          </div>
          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <Image src="/icons/cart.svg" width={18} height={18} alt="cart" className="sm:w-5 sm:h-5 cursor-pointer hover:opacity-70 transition" />
            <Image src="/icons/user.svg" width={18} height={18} alt="user" className="sm:w-5 sm:h-5 cursor-pointer hover:opacity-70 transition" />
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="relative"
              aria-label="Search"
            >
              <Image src="/icons/search.svg" width={18} height={18} alt="search" className="sm:w-5 sm:h-5 cursor-pointer hover:opacity-70 transition" />
            </button>
          </div>
        </div>
      </div>

      {/* Search Dropdown */}
      {isSearchOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => {
              setIsSearchOpen(false);
              setSearchQuery("");
            }}
          />
          <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl mx-4 sm:mx-auto">
            <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
              <form onSubmit={handleSearchSubmit} className="flex items-center border-b border-gray-200">
                <div className="flex-1 flex items-center px-4 sm:px-6">
                  <svg className="h-5 w-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for services, products, or pages..."
                    className="w-full py-4 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none"
                    autoFocus
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="ml-2 p-1 hover:bg-gray-100 rounded-full transition"
                      aria-label="Clear search"
                    >
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
                <button
                  type="submit"
                  className="px-4 sm:px-6 py-4 bg-red-600 text-white hover:bg-red-700 transition-colors font-medium text-sm sm:text-base"
                >
                  Search
                </button>
              </form>
              
              {searchQuery.trim() && (
                <div className="max-h-96 overflow-y-auto">
                  {filteredResults.length > 0 ? (
                    <div className="p-2">
                      {filteredResults.map((result, index) => (
                        <a
                          key={index}
                          href={result.href}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors group"
                        >
                          <div className="flex-1">
                            <p className="text-sm sm:text-base font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                              {result.name}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5">{result.category}</p>
                          </div>
                          <svg className="h-5 w-5 text-gray-400 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center">
                      <svg className="h-12 w-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <p className="text-sm text-gray-500">No results found for "{searchQuery}"</p>
                      <p className="text-xs text-gray-400 mt-1">Try searching for services, products, or pages</p>
                    </div>
                  )}
                </div>
              )}
              
              {!searchQuery.trim() && (
                <div className="p-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Popular Searches</p>
                  <div className="flex flex-wrap gap-2">
                    {["Hair Services", "Beauty Treatments", "Salon Memberships", "Franchise", "Academy", "Shops"].map((item, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          const searchItem = searchItems.find((s) => s.name === item);
                          if (searchItem) {
                            window.location.href = searchItem.href;
                            setIsSearchOpen(false);
                            setSearchQuery("");
                          }
                        }}
                        className="px-3 py-1.5 text-xs sm:text-sm bg-gray-100 hover:bg-red-600 hover:text-white text-gray-700 rounded-full transition-colors"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Main Navigation */}
      <div className="flex w-full items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-3 sm:py-4">
        <a href="/" className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] transition-opacity hover:opacity-80" style={{ fontFamily: "serif" }}>
          scent
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block ml-auto">
          <ul className="flex items-center gap-6 xl:gap-8 text-sm xl:text-[15px] text-gray-700">
            {menuItems.map((item) => (
              <li
                key={item}
                className={`relative cursor-pointer transition-colors hover:text-red-500 ${
                  item === "Contact" ? "font-medium text-red-600" : ""
                }`}
                onMouseEnter={() => {
                  if (item === "Service") setIsServiceOpen(true);
                  if (item === "Franchise") setIsFranchiseOpen(true);
                  if (item === "Shops") setIsShopOpen(true);
                  if (item === "Contact") setIsContactOpen(true);
                }}
                onMouseLeave={() => {
                  if (item === "Service") setIsServiceOpen(false);
                  if (item === "Franchise") setIsFranchiseOpen(false);
                  if (item === "Shops") setIsShopOpen(false);
                  if (item === "Contact") setIsContactOpen(false);
                }}
              >
                {item === "Service" ? (
                  <a href="/new-service" onClick={() => setIsServiceOpen(false)}>
                    {item}
                  </a>
                ) : item === "Home" ? (
                  <a href="/">{item}</a>
                ) : item === "Salon Memberships" ? (
                  <a href="/salon-memberships">{item}</a>
                ) : item === "Shops" ? (
                  <a href="/shops" onClick={() => setIsShopOpen(false)}>
                    {item}
                  </a>
                ) : item === "Franchise" ? (
                  <a href="/franchise" onClick={() => setIsFranchiseOpen(false)}>
                    {item}
                  </a>
                ) : item === "Academy" ? (
                  <a href="/academy">{item}</a>
                ) : item === "Contact" ? (
                  <a href="/contact" onClick={() => setIsContactOpen(false)}>
                    {item}
                  </a>
                ) : (
                  item
                )}
                {item === "Service" && isServiceOpen && (
                  <>
                    <div 
                      className="absolute left-0 top-full z-50 h-2 w-56"
                      onMouseEnter={() => setIsServiceOpen(true)}
                      onMouseLeave={() => setIsServiceOpen(false)}
                    />
                    <div 
                      className="absolute left-0 top-full z-50 mt-2 w-56 rounded-md bg-white shadow-lg border border-gray-200 py-2"
                      onMouseEnter={() => setIsServiceOpen(true)}
                      onMouseLeave={() => setIsServiceOpen(false)}
                    >
                      {services.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-red-500"
                          onClick={() => setIsServiceOpen(false)}
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  </>
                )}
                {item === "Franchise" && isFranchiseOpen && (
                  <>
                    <div 
                      className="absolute left-0 top-full z-50 h-2 w-56"
                      onMouseEnter={() => setIsFranchiseOpen(true)}
                      onMouseLeave={() => setIsFranchiseOpen(false)}
                    />
                    <div 
                      className="absolute left-0 top-full z-50 mt-2 w-56 rounded-md bg-white shadow-lg border border-gray-200 py-2"
                      onMouseEnter={() => setIsFranchiseOpen(true)}
                      onMouseLeave={() => setIsFranchiseOpen(false)}
                    >
                      {franchiseItems.slice(0, 3).map((franchiseItem) => (
                        <a
                          key={franchiseItem.name}
                          href={franchiseItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-red-500"
                          onClick={() => setIsFranchiseOpen(false)}
                        >
                          {franchiseItem.name}
                        </a>
                      ))}
                      <div className="px-4 py-2 mt-1 border-t border-gray-100">
                        <a
                          href="/franchise"
                          className="block w-full text-center rounded-md bg-red-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-700"
                          onClick={() => setIsFranchiseOpen(false)}
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </>
                )}
                {item === "Shops" && isShopOpen && (
                  <>
                    <div 
                      className="absolute left-0 top-full z-50 h-2 w-64"
                      onMouseEnter={() => setIsShopOpen(true)}
                      onMouseLeave={() => setIsShopOpen(false)}
                    />
                    <div 
                      className="absolute left-0 top-full z-50 mt-2 w-64 rounded-md bg-white shadow-lg border border-gray-200 py-3"
                      onMouseEnter={() => setIsShopOpen(true)}
                      onMouseLeave={() => setIsShopOpen(false)}
                    >
                      {shopCategories.map((category) => (
                        <div key={category.name} className="px-4 py-2 border-b border-gray-100 last:border-0">
                          <a
                            href="/shops"
                            className="block text-sm font-semibold text-gray-800 hover:text-red-600 transition-colors"
                            onClick={() => setIsShopOpen(false)}
                          >
                            {category.name}
                          </a>
                          <p className="text-xs text-gray-500 mt-1">{category.products.length} products</p>
                        </div>
                      ))}
                      <div className="px-4 pt-2 mt-2 border-t border-gray-100">
                        <a
                          href="/shops"
                          className="block w-full text-center rounded-md bg-red-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-700"
                          onClick={() => setIsShopOpen(false)}
                        >
                          View All Products
                        </a>
                      </div>
                    </div>
                  </>
                )}
                {item === "Contact" && isContactOpen && (
                  <>
                    <div 
                      className="absolute right-0 top-full z-50 h-2 w-56"
                      onMouseEnter={() => setIsContactOpen(true)}
                      onMouseLeave={() => setIsContactOpen(false)}
                    />
                    <div 
                      className="absolute right-0 top-full z-50 mt-2 w-56 rounded-md bg-white shadow-lg border border-gray-200 py-2"
                      onMouseEnter={() => setIsContactOpen(true)}
                      onMouseLeave={() => setIsContactOpen(false)}
                    >
                      {contactItems.slice(0, 3).map((contactItem) => (
                        <a
                          key={contactItem.name}
                          href={contactItem.href}
                          target={contactItem.href.startsWith("http") ? "_blank" : "_self"}
                          rel={contactItem.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 transition-colors hover:text-red-500 hover:bg-gray-50"
                          onClick={() => setIsContactOpen(false)}
                        >
                          <div className="flex-shrink-0">
                            {contactItem.icon === "phone" && (
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            )}
                            {contactItem.icon === "email" && (
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            )}
                            {contactItem.icon === "location" && (
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            )}
                            {contactItem.icon === "clock" && (
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-gray-500">{contactItem.name}</p>
                            <p className="text-xs text-gray-700 truncate">{contactItem.value}</p>
                          </div>
                        </a>
                      ))}
                      <div className="px-4 pt-2 mt-2 border-t border-gray-100">
                        <a
                          href="/contact"
                          className="block w-full text-center rounded-md bg-red-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-700"
                          onClick={() => setIsContactOpen(false)}
                        >
                          View Full Contact Page
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Book Button */}
        <div className="hidden lg:flex items-center gap-4 ml-4 relative">
          <button
            onClick={() => setIsBookAppointmentOpen(!isBookAppointmentOpen)}
            className="rounded-md bg-red-600 px-4 xl:px-5 py-2 text-xs xl:text-sm font-medium text-white transition hover:bg-red-700"
          >
            Book Appointment
          </button>
          
          {/* Book Appointment Dropdown (Desktop Only) */}
          {isBookAppointmentOpen && (
            <>
              <div
                className="fixed inset-0 z-40 hidden lg:block"
                onClick={() => setIsBookAppointmentOpen(false)}
              />
              <div className="absolute right-0 top-full z-50 mt-2 w-96 max-w-[calc(100vw-2rem)] rounded-md bg-white shadow-2xl border border-gray-200 py-6 px-6 hidden lg:block">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-[#1f1f2e] mb-1" style={{ fontFamily: "serif" }}>
                    Book Your Appointment
                  </h3>
                  <p className="text-xs text-gray-600">
                    Fill in your details and we'll confirm your booking
                  </p>
                </div>
                
                <form onSubmit={handleAppointmentSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={appointmentForm.name}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={appointmentForm.email}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={appointmentForm.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-xs font-medium text-gray-700 mb-1">
                      Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={appointmentForm.service}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
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
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="date" className="block text-xs font-medium text-gray-700 mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={appointmentForm.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-xs font-medium text-gray-700 mb-1">
                        Preferred Time *
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        required
                        value={appointmentForm.time}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                      Additional Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={appointmentForm.message}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                      placeholder="Any special requests or notes..."
                    />
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 rounded-md bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
                    >
                      Book Now
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsBookAppointmentOpen(false)}
                      className="px-4 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden ml-auto flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-4">
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item}>
                  {item === "Service" ? (
                    <div>
                      <button
                        onClick={() => setIsServiceOpen(!isServiceOpen)}
                        className="w-full text-left py-2 text-base text-gray-700 transition-colors hover:text-red-500"
                      >
                        {item} {isServiceOpen ? '−' : '+'}
                      </button>
                      {isServiceOpen && (
                        <ul className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                          {services.map((service) => (
                            <li key={service.name}>
                              <a
                                href={service.href}
                                className="block py-2 text-sm text-gray-600 transition-colors hover:text-red-500"
                                onClick={() => {
                                  setIsServiceOpen(false);
                                  setIsMobileMenuOpen(false);
                                }}
                              >
                                {service.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : item === "Franchise" ? (
                    <div>
                      <button
                        onClick={() => setIsFranchiseOpen(!isFranchiseOpen)}
                        className="w-full text-left py-2 text-base text-gray-700 transition-colors hover:text-red-500"
                      >
                        {item} {isFranchiseOpen ? '−' : '+'}
                      </button>
                      {isFranchiseOpen && (
                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                          <div className="pb-2 mb-2 border-b border-gray-200">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Franchise Opportunity</p>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              Start your own salon franchise in Bangalore with SCENT
                            </p>
                          </div>
                          <ul className="space-y-2">
                            {franchiseItems.map((franchiseItem) => (
                              <li key={franchiseItem.name}>
                                <a
                                  href={franchiseItem.href}
                                  className="block py-2 text-sm text-gray-600 transition-colors hover:text-red-500"
                                  onClick={() => {
                                    setIsFranchiseOpen(false);
                                    setIsMobileMenuOpen(false);
                                  }}
                                >
                                  {franchiseItem.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                          <div className="pt-2 mt-2 border-t border-gray-200 space-y-2">
                            <a
                              href="/franchise"
                              className="block w-full text-center rounded-md bg-red-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-700"
                              onClick={() => {
                                setIsFranchiseOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              Learn More
                            </a>
                            <div className="text-xs text-gray-500 space-y-1">
                              <p>
                                <span className="font-medium">Email:</span>{" "}
                                <a href="mailto:franchisee@scentlifestyle.com" className="text-red-600 hover:underline">
                                  franchisee@scentlifestyle.com
                                </a>
                              </p>
                              <p>
                                <span className="font-medium">Phone:</span>{" "}
                                <a href="tel:+919591522700" className="text-red-600 hover:underline">
                                  +91 9591522700
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : item === "Shops" ? (
                    <div>
                      <button
                        onClick={() => setIsShopOpen(!isShopOpen)}
                        className="w-full text-left py-2 text-base text-gray-700 transition-colors hover:text-red-500"
                      >
                        {item} {isShopOpen ? '−' : '+'}
                      </button>
                      {isShopOpen && (
                        <div className="pl-4 mt-2 space-y-3 border-l-2 border-gray-200">
                          <div className="pb-2 mb-2 border-b border-gray-200">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Best Hair Treatment Products</p>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              Premium hair care products from trusted brands
                            </p>
                          </div>
                          {shopCategories.map((category) => (
                            <div key={category.name} className="space-y-2">
                              <h4 className="text-sm font-semibold text-gray-800">
                                {category.name}
                              </h4>
                              <ul className="space-y-1">
                                {category.products.slice(0, 5).map((product, index) => (
                                  <li key={index} className="text-xs text-gray-600">
                                    <span className="font-medium">{product.name}</span>
                                    <span className="text-gray-500 ml-2">{product.price}</span>
                                  </li>
                                ))}
                              </ul>
                              {category.products.length > 5 && (
                                <a
                                  href="/shops"
                                  className="text-xs text-red-600 hover:underline font-medium"
                                  onClick={() => {
                                    setIsShopOpen(false);
                                    setIsMobileMenuOpen(false);
                                  }}
                                >
                                  View All {category.products.length} Products →
                                </a>
                              )}
                            </div>
                          ))}
                          <div className="pt-2 mt-2 border-t border-gray-200">
                            <a
                              href="/shops"
                              className="block w-full text-center rounded-md bg-red-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-700"
                              onClick={() => {
                                setIsShopOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              View All Products
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : item === "Home" ? (
                    <a
                      href="/"
                      className="block py-2 text-base text-gray-700 transition-colors hover:text-red-500"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ) : item === "Salon Memberships" ? (
                    <a
                      href="/salon-memberships"
                      className="block py-2 text-base text-gray-700 transition-colors hover:text-red-500"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ) : item === "Franchise" ? (
                    <a
                      href="/franchise"
                      className="block py-2 text-base text-gray-700 transition-colors hover:text-red-500"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ) : item === "Academy" ? (
                    <a
                      href="/academy"
                      className="block py-2 text-base text-gray-700 transition-colors hover:text-red-500"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ) : item === "Contact" ? (
                    <div>
                      <button
                        onClick={() => setIsContactOpen(!isContactOpen)}
                        className="w-full text-left py-2 text-base text-gray-700 font-medium text-red-600 transition-colors hover:text-red-500"
                      >
                        {item} {isContactOpen ? '−' : '+'}
                      </button>
                      {isContactOpen && (
                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                          <div className="pb-2 mb-2 border-b border-gray-200">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Get In Touch</p>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              Reach out to us for inquiries and appointments
                            </p>
                          </div>
                          <div className="space-y-2">
                            {contactItems.map((contactItem) => (
                              <a
                                key={contactItem.name}
                                href={contactItem.href}
                                target={contactItem.href.startsWith("http") ? "_blank" : "_self"}
                                rel={contactItem.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="flex items-start gap-3 py-2 text-sm text-gray-600 transition-colors hover:text-red-500"
                                onClick={() => {
                                  setIsContactOpen(false);
                                  setIsMobileMenuOpen(false);
                                }}
                              >
                                <div className="flex-shrink-0 mt-0.5">
                                  {contactItem.icon === "phone" && (
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                  )}
                                  {contactItem.icon === "email" && (
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                  )}
                                  {contactItem.icon === "location" && (
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                  )}
                                  {contactItem.icon === "clock" && (
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-medium text-gray-500">{contactItem.name}</p>
                                  <p className="text-xs text-gray-700">{contactItem.value}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="pt-2 mt-2 border-t border-gray-200 space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-medium text-gray-500">Follow Us:</span>
                              <div className="flex gap-2">
                                <a href="https://www.facebook.com/ScentSalonSpas/" target="_blank" rel="noopener noreferrer" className="h-5 w-5 rounded-full overflow-hidden hover:opacity-80 transition">
                                  <Image src="/x1.png" alt="Facebook" width={20} height={20} className="h-full w-full object-cover" />
                                </a>
                                <a href="https://x.com/scentlifestyle" target="_blank" rel="noopener noreferrer" className="h-5 w-5 rounded-full overflow-hidden hover:opacity-80 transition">
                                  <Image src="/x2.png" alt="X" width={20} height={20} className="h-full w-full object-cover" />
                                </a>
                                <a href="https://www.instagram.com/scentlifestyle/" target="_blank" rel="noopener noreferrer" className="h-5 w-5 rounded-full overflow-hidden hover:opacity-80 transition">
                                  <Image src="/x3.png" alt="Instagram" width={20} height={20} className="h-full w-full object-cover" />
                                </a>
                                <a href="https://in.pinterest.com/scentlifestyle/" target="_blank" rel="noopener noreferrer" className="h-5 w-5 rounded-full overflow-hidden hover:opacity-80 transition">
                                  <Image src="/x4.png" alt="Pinterest" width={20} height={20} className="h-full w-full object-cover" />
                                </a>
                              </div>
                            </div>
                            <a
                              href="/contact"
                              className="block w-full text-center rounded-md bg-red-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-700"
                              onClick={() => {
                                setIsContactOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              View Full Contact Page
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <span className="block py-2 text-base text-gray-700">
                      {item}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <button
              className="mt-4 w-full rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
              onClick={() => {
                setIsBookAppointmentOpen(true);
                setIsMobileMenuOpen(false);
              }}
            >
              Book Appointment
            </button>
          </nav>
        </div>
      )}

      {/* Book Appointment Modal (Mobile & Desktop) */}
      {isBookAppointmentOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-white rounded-xl sm:rounded-2xl shadow-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsBookAppointmentOpen(false)}
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-4 sm:p-6">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1f1f2e] mb-2" style={{ fontFamily: "serif" }}>
                  Book Your Appointment
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Fill in your details and we'll confirm your booking
                </p>
              </div>
              
              <form onSubmit={handleAppointmentSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    required
                    value={appointmentForm.name}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="modal-email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    required
                    value={appointmentForm.email}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="modal-phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="modal-phone"
                    name="phone"
                    required
                    value={appointmentForm.phone}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    placeholder="+91 9876543210"
                  />
                </div>
                
                <div>
                  <label htmlFor="modal-service" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Service *
                  </label>
                  <select
                    id="modal-service"
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
                    <label htmlFor="modal-date" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="modal-date"
                      name="date"
                      required
                      value={appointmentForm.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full rounded-md border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="modal-time" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      id="modal-time"
                      name="time"
                      required
                      value={appointmentForm.time}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="modal-message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Additional Message
                  </label>
                  <textarea
                    id="modal-message"
                    name="message"
                    rows={3}
                    value={appointmentForm.message}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 resize-none"
                    placeholder="Any special requests or notes..."
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 rounded-md bg-red-600 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-red-700"
                  >
                    Book Now
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsBookAppointmentOpen(false)}
                    className="px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


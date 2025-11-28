"use client";

import { useState } from "react";
import Image from "next/image";

const shopCategories = [
  {
    name: "Beauty Garage",
    products: [
      { name: "Shea Butter Retention Treatment Hair Oil 50ml", price: "₹1,950", image: "/closed-glass-oil-bottle-two-textured-backdrop.jpg" },
      { name: "Shea Butter Retention Treatment Hair butter 250ml", price: "₹2,220", image: "/minimalist-olive-oil-bottle-glass.jpg" },
      { name: "Shea Butter Retention Treatment Shampoo 300ml", price: "₹1,500", image: "/three-bottles-oil-stand-clean-background-label-mockup.jpg" },
      { name: "K9 Botoplexx Conditioner 300ml", price: "₹1,500", image: "/3d-rendering-personal-care-products-fondant-pink.jpg" },
      { name: "K9 Botoplexx Shampoo 300ml", price: "₹1,500", image: "/high-angle-arrangement-with-bottles-oil.jpg" },
      { name: "K9 Botoplexx Retention Masque 300ml", price: "₹2,040", image: "/skincare-oil-serum-face-woman-studio-wellness-health-product-dermatology-aesthetic-salon-female-with-liquid-pipette-vial-dropper-moisturizer-cosmetics-beauty.jpg" },
      { name: "K9 Frizz Dismiss Hair Oil with Morocco Argan 50ml", price: "₹1,140", image: "/closed-glass-oil-bottle-two-textured-backdrop.jpg" },
      { name: "Botoliss Acidic Bonding Concentrate Shampoo 300ml", price: "₹1,860", image: "/three-bottles-oil-stand-clean-background-label-mockup.jpg" },
      { name: "Botoliss Acidic Bonding Concentrate Hair Mask 200ml", price: "₹1,860", image: "/high-angle-arrangement-with-bottles-oil.jpg" },
      { name: "Botoliss Smooth sheild Hair Serum 50ml", price: "₹1,950", image: "/young-brazilian-woman-isolated-white-background-holding-serum-close-up-portrait.jpg" },
      { name: "Botoliss Gloss Like Glass Shine Spray 30ml", price: "₹1,500", image: "/close-up-woman-with-beauty-product.jpg" },
      { name: "Scalp Sense Hydra Soothe for Dry Scalp Shampoo 200ml", price: "₹1,320", image: "/3d-cartoon-beauty-products.jpg" },
      { name: "Scalp Sense Oil Out Shampoo 200ml", price: "₹1,320", image: "/three-bottles-oil-stand-clean-background-label-mockup.jpg" },
      { name: "Scalp Sense Dandruff Defense Shampoo 200ml", price: "₹1,590", image: "/high-angle-arrangement-with-bottles-oil.jpg" },
      { name: "Scalp Sense Hairfall Defense Shampoo 200ml", price: "₹1,590", image: "/closed-glass-oil-bottle-two-textured-backdrop.jpg" },
      { name: "Scalp Sense Hair & Scalp Conditioner 200ml", price: "₹1,320", image: "/3d-rendering-personal-care-products-fondant-pink.jpg" },
      { name: "Scalp Sense Leave In Treatment 60ml", price: "₹2,400", image: "/skincare-oil-serum-face-woman-studio-wellness-health-product-dermatology-aesthetic-salon-female-with-liquid-pipette-vial-dropper-moisturizer-cosmetics-beauty.jpg" },
    ],
  },
  {
    name: "Olaplex",
    products: [
      { name: "Repair and Protect", price: "View Price", image: "/skincare-oil-serum-face-woman-studio-wellness-health-product-dermatology-aesthetic-salon-female-with-liquid-pipette-vial-dropper-moisturizer-cosmetics-beauty.jpg" },
      { name: "Hydration Supreme", price: "View Price", image: "/young-brazilian-woman-isolated-white-background-holding-serum-close-up-portrait.jpg" },
      { name: "Bond Smoother", price: "View Price", image: "/close-up-woman-with-beauty-product.jpg" },
    ],
  },
  {
    name: "Schwarzkopf",
    products: [
      { name: "Colour Freeze Shampoo", price: "View Price", image: "/three-bottles-oil-stand-clean-background-label-mockup.jpg" },
      { name: "Colour Freeze Wax", price: "View Price", image: "/high-angle-arrangement-with-bottles-oil.jpg" },
      { name: "Mess Up", price: "View Price", image: "/cosmetic-male-beauty-products-with-display.jpg" },
      { name: "THRILL", price: "View Price", image: "/creative-display-makeup-products.jpg" },
      { name: "Session Label-The Flexible", price: "View Price", image: "/top-view-assortment-beauty-accessories.jpg" },
      { name: "Session Label-The Strong", price: "View Price", image: "/3d-cartoon-beauty-products.jpg" },
      { name: "Fiber Clinix Fortifying Shampoo", price: "View Price", image: "/closed-glass-oil-bottle-two-textured-backdrop.jpg" },
      { name: "Fiber Clinix Hydrating Shampoo", price: "View Price", image: "/minimalist-olive-oil-bottle-glass.jpg" },
      { name: "Fiber Clinix Tame Shampoo", price: "View Price", image: "/three-bottles-oil-stand-clean-background-label-mockup.jpg" },
      { name: "Fiber Clinix Tame Treatment", price: "View Price", image: "/high-angle-arrangement-with-bottles-oil.jpg" },
      { name: "Fiber Clinix Vibrancy Shampoo", price: "View Price", image: "/3d-rendering-personal-care-products-fondant-pink.jpg" },
      { name: "Fiber Clinix Vibrancy Treatment", price: "View Price", image: "/skincare-oil-serum-face-woman-studio-wellness-health-product-dermatology-aesthetic-salon-female-with-liquid-pipette-vial-dropper-moisturizer-cosmetics-beauty.jpg" },
      { name: "Moisture Kick Spray Conditioner", price: "View Price", image: "/young-brazilian-woman-isolated-white-background-holding-serum-close-up-portrait.jpg" },
      { name: "Flewax", price: "View Price", image: "/close-up-woman-with-beauty-product.jpg" },
      { name: "Grip", price: "View Price", image: "/cosmetic-male-beauty-products-with-display.jpg" },
      { name: "Goodbye Yellow", price: "View Price", image: "/creative-display-makeup-products.jpg" },
      { name: "Frizz Away Smoothing Oil", price: "View Price", image: "/closed-glass-oil-bottle-two-textured-backdrop.jpg" },
      { name: "Root Activating Shampoo", price: "View Price", image: "/minimalist-olive-oil-bottle-glass.jpg" },
      { name: "Anti Dandruff Shampoo", price: "View Price", image: "/three-bottles-oil-stand-clean-background-label-mockup.jpg" },
      { name: "Bounty Balm", price: "View Price", image: "/high-angle-arrangement-with-bottles-oil.jpg" },
      { name: "Repair Rescue Sealed Ends", price: "View Price", image: "/skincare-oil-serum-face-woman-studio-wellness-health-product-dermatology-aesthetic-salon-female-with-liquid-pipette-vial-dropper-moisturizer-cosmetics-beauty.jpg" },
    ],
  },
];

export default function ShopSection() {
  const [selectedCategory, setSelectedCategory] = useState("Beauty Garage");
  const [cartMessage, setCartMessage] = useState("");

  const handleBuy = (productName) => {
    setCartMessage(`${productName} added to cart`);
    setTimeout(() => setCartMessage(""), 3000);
  };

  const currentCategory = shopCategories.find((cat) => cat.name === selectedCategory) || shopCategories[0];

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-black via-[#1a1a1a] to-black py-12 sm:py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 text-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white mb-4"
            style={{ fontFamily: "serif" }}
          >
            Best Hair Treatment Products
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Premium hair care products from trusted brands
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 border-b border-gray-200">
          {shopCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all border-b-2 ${
                selectedCategory === category.name
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-600 hover:text-red-500 hover:border-gray-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {currentCategory.products.map((product, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-4 sm:p-6 shadow-[0px_25px_70px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0px_35px_90px_rgba(0,0,0,0.12)]"
            >
              {/* Product Image */}
              <div className="relative h-48 sm:h-56 w-full mb-4 rounded-lg bg-gray-100 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={product.image || "/hairdresser-taking-care-her-client.jpg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Product Info */}
              <div className="flex-1 space-y-2">
                <h3 className="text-sm sm:text-base font-semibold text-[#22223b] leading-tight" style={{ fontFamily: "serif" }}>
                  {product.name}
                </h3>
                <p className="text-lg sm:text-xl font-bold text-red-600">
                  {product.price}
                </p>
              </div>

              {/* Buy Button */}
              <button
                onClick={() => handleBuy(product.name)}
                className="mt-4 w-full rounded-md bg-black px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-red-600 hover:scale-105"
              >
                Buy
              </button>
            </div>
          ))}
        </div>

        {/* Category Info */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Showing {currentCategory.products.length} products from {currentCategory.name}
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-10 sm:w-12 bg-black" />
            <span className="text-pink-400 text-lg sm:text-xl">❀</span>
            <span className="h-px w-10 sm:w-12 bg-black" />
          </div>
        </div>
      </div>

      {/* Cart Message */}
      {cartMessage && (
        <div className="fixed bottom-6 right-6 z-50 rounded-full bg-black px-6 py-3 text-sm text-white shadow-2xl animate-slideInUp">
          {cartMessage}
        </div>
      )}
    </section>
  );
}


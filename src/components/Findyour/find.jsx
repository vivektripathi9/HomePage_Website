"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const salons = [
  "/A1.png",
  "/A2.png",
  "/A3.png",
  "/A4.png",
  "/A5.png",
];

export default function FindNearest() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate images automatically every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % salons.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Get rotated array of images based on current index
  const getRotatedSalons = () => {
    return [...salons.slice(currentIndex), ...salons.slice(0, currentIndex)];
  };

  const rotatedSalons = getRotatedSalons();

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="bg-white py-12">
      <div className="flex w-full flex-col items-center gap-4 px-20 text-center">
        <h2 className="text-3xl font-semibold leading-tight text-[#1f1f2e] sm:text-[42px]" style={{ fontFamily: "serif" }}>
          Find Your Nearest SCENT
        </h2>
        <div className="flex items-center justify-center gap-4 text-gray-300">
          <span className="h-px w-12 bg-black" />
          <span className="text-pink-400 text-xl">❀</span>
          <span className="h-px w-12 bg-black" />
        </div>
        <p className="max-w-3xl text-sm text-gray-500 sm:text-base">
          Step into a space where beauty meets expertise — your perfect experience is closer than you think.
        </p>

        <div className="grid w-full gap-6">
          {/* First Row: 3 images */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {rotatedSalons.slice(0, 3).map((image, index) => (
              <div
                key={`salon-${currentIndex}-${index}`}
                onClick={() => openModal(image)}
                className="relative cursor-pointer overflow-hidden shadow-[0px_25px_70px_rgba(0,0,0,0.1)] transition-all duration-700 ease-in-out hover:scale-105"
                style={{
                  animation: "fadeIn 0.8s ease-in-out",
                }}
              >
                <Image
                  src={image}
                  alt={`SCENT location ${index + 1}`}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-all duration-700 ease-in-out hover:scale-110"
                />
              </div>
            ))}
          </div>
          {/* Second Row: 2 images (centered, same size as first row) */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
            {rotatedSalons.slice(3, 5).map((image, index) => (
              <div
                key={`salon-${currentIndex}-${index + 3}`}
                onClick={() => openModal(image)}
                className="relative w-full cursor-pointer overflow-hidden shadow-[0px_25px_70px_rgba(0,0,0,0.1)] transition-all duration-700 ease-in-out hover:scale-105 md:w-1/3"
                style={{
                  animation: "fadeIn 0.8s ease-in-out",
                }}
              >
                <Image
                  src={image}
                  alt={`SCENT location ${index + 4}`}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-all duration-700 ease-in-out hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Modal/Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          >
            <div
              className="relative max-h-[90vh] max-w-6xl"
              style={{ animation: "zoomIn 0.3s ease-out" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -right-4 -top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-black shadow-lg transition hover:bg-gray-100"
                aria-label="Close"
              >
                ×
              </button>
              <Image
                src={selectedImage}
                alt="Zoomed SCENT location"
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

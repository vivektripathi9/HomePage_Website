"use client";

import { useEffect } from "react";
import Image from "next/image";

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string | React.ReactNode;
  image?: string;
  type?: "beauty" | "story" | "blog";
  date?: string;
  author?: string;
}

export default function DetailsModal({
  isOpen,
  onClose,
  title,
  content,
  image,
  type = "beauty",
  date,
  author,
}: DetailsModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" />

      {/* Modal Content */}
      <div
        className={`relative z-10 w-full ${
          type === "beauty" ? "max-w-6xl" : "max-w-4xl"
        } max-h-[98vh] sm:max-h-[95vh] overflow-hidden bg-white ${
          type === "beauty" ? "rounded-xl sm:rounded-3xl" : "rounded-xl sm:rounded-2xl"
        } shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transform transition-all`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-3 right-3 sm:top-6 sm:right-6 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full ${
            type === "beauty" 
              ? "bg-black/80 backdrop-blur-md text-white" 
              : "bg-white/90 backdrop-blur-sm text-gray-700"
          } transition-all hover:scale-110 shadow-xl`}
          aria-label="Close modal"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        {type === "beauty" ? (
          <div className="flex flex-col">
            {/* Premium Hero Section */}
            <div className="relative h-32 sm:h-40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
                  <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
                </div>
              </div>
              <div className="relative z-10 flex items-center justify-center h-full px-6 sm:px-8">
                <div className="text-center text-white">
                  <div className="mb-2">
                    <span className="inline-block h-px w-12 bg-white/30" />
                    <span className="mx-3 text-white/60 text-sm sm:text-base">SCENT</span>
                    <span className="inline-block h-px w-12 bg-white/30" />
                  </div>
                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide mb-2"
                    style={{ fontFamily: "serif" }}
                  >
                    {title}
                  </h2>
                  <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto font-light">
                    Where elegance meets expertise, and beauty becomes an experience
                  </p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4 sm:p-6 md:p-8 lg:p-12 overflow-y-auto max-h-[65vh] sm:max-h-[70vh]">
              <div className="max-w-5xl mx-auto">
                {typeof content === "string" ? (
                  <div className="text-sm sm:text-base md:text-lg whitespace-pre-wrap space-y-4 sm:space-y-6 text-gray-700 leading-relaxed">
                    {content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 sm:mb-6">{paragraph}</p>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4 sm:space-y-6">
                    {content}
                  </div>
                )}
              </div>

              {/* Premium CTA Section */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto">
                  <a
                    href="/contact"
                    className="flex-1 rounded-full bg-black px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white text-center transition-all hover:bg-[#1a1a1a] hover:scale-105 shadow-lg"
                  >
                    Book Appointment
                  </a>
                  <button
                    onClick={onClose}
                    className="flex-1 rounded-full border-2 border-gray-300 bg-transparent px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-400"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            {image && (
              <div className="relative h-64 sm:h-80 md:h-auto md:w-2/5 w-full overflow-hidden md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            )}

            {/* Text Content */}
            <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 overflow-y-auto max-h-[80vh] sm:max-h-[85vh]">
              <div className="mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-200">
                <h2
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1f1f2e] mb-2 sm:mb-3"
                  style={{ fontFamily: "serif" }}
                >
                  {title}
                </h2>
                {type === "blog" && (
                  <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      {author || "SCENT Team"}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                )}
              </div>

              <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed">
                {typeof content === "string" ? (
                  <div className="text-sm sm:text-base md:text-lg whitespace-pre-wrap space-y-4">
                    {content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {content}
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={onClose}
                  className="flex-1 rounded-md border-2 border-gray-300 bg-transparent px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wide text-gray-700 transition hover:bg-gray-100 hover:border-gray-400"
                >
                  Close
                </button>
                <a
                  href="/contact"
                  className="flex-1 rounded-md bg-red-600 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wide text-white text-center transition hover:bg-red-700"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


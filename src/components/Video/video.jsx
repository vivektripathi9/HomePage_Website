"use client";

import { useEffect, useRef, useState } from "react";
import VideoLoader from "@/components/Loading/VideoLoader";

export default function BeautyVideoHero() {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoading(false);
      video.play().catch((error) => {
        console.log("Autoplay prevented:", error);
        setIsLoading(false);
      });
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);
    video.addEventListener("loadstart", handleLoadStart);

    // Lazy load: only load when component is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.load();
            observer.disconnect();
          }
        });
      },
      { rootMargin: "50px" }
    );

    observer.observe(video);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
      video.removeEventListener("loadstart", handleLoadStart);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-white py-4 sm:py-6 md:py-8 lg:py-12">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-900">
        {isLoading && <VideoLoader />}
        {hasError ? (
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <p>Video failed to load</p>
          </div>
        ) : (
          <video
            ref={videoRef}
            src="/eye_videos.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        )}
      </div>
    </section>
  );
}

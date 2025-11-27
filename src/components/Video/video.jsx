"use client";

import { useEffect, useRef } from "react";

export default function BeautyVideoHero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section className="bg-white py-12">
      <div className="relative h-[320px] w-full sm:h-[400px] overflow-hidden">
        <video
          ref={videoRef}
          src="/eye_videos.mp4"
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </section>
  );
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "www.svgrepo.com",
      },
    ],
    // Enable WebP format for better compression
    formats: ["image/webp", "image/avif"],
    // Optimize image quality
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Enable image optimization
    minimumCacheTTL: 60,
  },
  // Enable compression
  compress: true,
  // Note: swcMinify is enabled by default in Next.js 16+ and cannot be disabled
};

export default nextConfig;

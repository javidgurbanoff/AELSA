import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "usercontent.one" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "media.beehiiv.com" },
      { protocol: "https", hostname: "assets.aceternity.com" },
    ],
  },
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
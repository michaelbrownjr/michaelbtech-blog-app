import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "34.145.25.151",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backend.reachdigital.dev',
        pathname: '/media/catalog/product/**', 
      },
    ],
  }
};

export default nextConfig;

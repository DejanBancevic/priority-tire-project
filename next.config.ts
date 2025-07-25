/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backend.reachdigital.dev',
        pathname: '/media/catalog/product/**',
      },
    ],
  },
};

module.exports = nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["good-travel.co.uk"],
    remotePatterns: [
      {
        // protocol: 'https',
        hostname: 'good-travel.co.uk',
        // port: '',
        // pathname: '/account123/**',
        // search: '',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;

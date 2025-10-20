import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio', // Commented out for local development
  trailingSlash: true,
};

export default nextConfig;

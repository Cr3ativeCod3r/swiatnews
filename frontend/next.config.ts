/** @type {import('next').NextConfig} */ 
const nextConfig = {
  images: {
    domains: ["localhost", "127.0.0.1", "admin.swiatnews.pl"],
  },
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    concurrentFeatures: false,
  }
};

module.exports = nextConfig;
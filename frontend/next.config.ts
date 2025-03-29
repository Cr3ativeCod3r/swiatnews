/** @type {import('next').NextConfig} */ 
const nextConfig = {
  images: {
    domains: ["localhost", "127.0.0.1", "your-strapi-domain.com"],
  },
  typescript: {
    ignoreBuildErrors: true
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { 
            key: 'X-Content-Type-Options', 
            value: 'nosniff' 
          },
          { 
            key: 'X-Frame-Options', 
            value: 'DENY' 
          },
          { 
            key: 'Content-Security-Policy', 
            value: "default-src 'self'" 
          }
        ]
      }
    ]
  }
};

module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    return new Date().getTime().toString()
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'nextjs-marketplace-rho.vercel.app',
      },
    ],
  },
}

module.exports = nextConfig

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
        hostname: process.env.NEXT_PUBLIC_SERVER_URL,
      },
    ],
  },
}

module.exports = nextConfig

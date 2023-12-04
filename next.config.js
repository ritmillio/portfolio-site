/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
  swcMinify: true,
  images: {
    domains: ['cdn-images-1.medium.com', 'zoltanfodor.b-cdn.net',],
    formats: ['image/webp'],
  },
  transpilePackages: ['lucide-react']
}

module.exports = nextConfig

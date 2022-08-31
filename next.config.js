/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
  swcMinify: true,
  images: {
    domains: ['cdn-icons-png.flaticon.com', 'zoltanfodor.b-cdn.net' , 'content.linkedin.com', 'github.githubassets.com' , 'cdn.iconscout.com', 'www.buymeacoffee.com'],
    formats: ['image/webp'],
  },
}

module.exports = nextConfig

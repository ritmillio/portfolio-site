/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn-icons-png.flaticon.com' , 'content.linkedin.com'],
    formats: ['image/webp'],
  },
}

module.exports = nextConfig

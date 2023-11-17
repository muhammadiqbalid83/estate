/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['bayut-production.s3.eu-central-1.amazonaws.com'],
  },
  // other configurations...
}

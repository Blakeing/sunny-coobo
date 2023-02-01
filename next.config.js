/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    scrollRestoration: true,
  },
  images: {
    domains: ['images.unsplash.com', 'cdn.sanity.io'],
  },
}

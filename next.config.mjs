/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/en',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['images.pexels.com', 'images.unsplash.com']
  }
}

export default nextConfig

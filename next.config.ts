import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      { protocol: 'https', hostname: 'res.cloudinary.com' }
    ],
  },
  allowedDevOrigins: ['192.168.10.7'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false,
      },
    ]
  },
}

export default nextConfig

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // assetPrefix: 'https://d3b0fhpuvmp33e.cloudfront.net',
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_CLOUDFRONT_HOSTNAME ?? '',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compress: true,
}

export default nextConfig

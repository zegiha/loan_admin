import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: [
      'image/webp',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'loan-project-mng.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compress: true
};

export default nextConfig;

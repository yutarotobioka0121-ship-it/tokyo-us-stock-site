import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'tokyo-us-stock-site.vercel.app',
          },
        ],
        destination: 'https://tokyo-us-stock.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

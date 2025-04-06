import withBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = bundleAnalyzer({
  eslint: {
    ignoreDuringBuilds: true,  
  },
  poweredByHeader: false, 
  reactStrictMode: true, 
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/uploads/**",
      },
    ],
  },
});

export default nextConfig;

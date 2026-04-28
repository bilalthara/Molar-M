import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [{ source: "/how-it-works", destination: "/", permanent: true }];
  },
};

export default nextConfig;

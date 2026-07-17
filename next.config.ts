import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      { source: "/how-it-works", destination: "/learn", permanent: true },
      { source: "/periodic-table-with-molar-mass", destination: "/periodic-table", permanent: true },
      { source: "/periodic-table-masses", destination: "/periodic-table", permanent: true },
      { source: "/acids-molar-mass-list", destination: "/compounds/acids", permanent: true },
      { source: "/bases-molar-mass-list", destination: "/compounds/bases", permanent: true },
      { source: "/salts-molar-mass-list", destination: "/compounds/salts", permanent: true },
      { source: "/organic-compounds-molar-mass", destination: "/compounds/organic", permanent: true },
      { source: "/inorganic-compounds-molar-mass", destination: "/compounds/inorganic", permanent: true },
      { source: "/molar-mass-practice-worksheet", destination: "/practice", permanent: true },
      { source: "/stoichiometry-guide", destination: "/learn/stoichiometry-basics", permanent: true },
      { source: "/mole-conversion-guide", destination: "/learn/how-to-calculate-molar-mass", permanent: true },
      { source: "/lab-prep-guide", destination: "/articles/why-molar-mass-matters-in-the-lab", permanent: true },
      { source: "/browse", destination: "/compounds", permanent: true },
      { source: "/molar-mass-list-top-500", destination: "/compounds", permanent: true },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Served at the root of scaleterra.ai (GitHub Pages custom domain).
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;

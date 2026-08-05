import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Served from a subpath on GitHub Pages (artfulmovement.github.io/scaleterra).
  // Drop basePath/assetPrefix when a root custom domain (scaleterra.com) lands.
  basePath: "/scaleterra",
  assetPrefix: "/scaleterra",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;

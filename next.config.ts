import type { NextConfig } from "next";
import path from "path";

const githubPages = process.env.GITHUB_PAGES === "true";
const basePath = githubPages ? "/Z1-concepts" : "";

if (basePath) {
  process.env.NEXT_PUBLIC_BASE_PATH = basePath;
}

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;

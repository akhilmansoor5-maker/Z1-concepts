import type { NextConfig } from "next";
import path from "path";

const githubPages = process.env.GITHUB_PAGES === "true";
const basePath = githubPages ? "/Z1-concepts" : "";

if (basePath) {
  process.env.NEXT_PUBLIC_BASE_PATH = basePath;
} else {
  delete process.env.NEXT_PUBLIC_BASE_PATH;
}

const nextConfig: NextConfig = {
  ...(githubPages
    ? {
        output: "export" as const,
        trailingSlash: true,
        images: { unoptimized: true },
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;

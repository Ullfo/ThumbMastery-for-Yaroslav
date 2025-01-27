import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   webpack(config) {
      config.module.rules.push({
         test: /\.svg$/,
         use: ["@svgr/webpack"],
      });
      return config;
   },
   reactStrictMode: true,
   images: {
      domains: ["flagcdn.com", "upload.wikimedia.org"],
   },
};

export default nextConfig;

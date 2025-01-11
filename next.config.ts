import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   webpack(config) {
      config.module.rules.push({
         test: /\.svg$/,
         use: ["@svgr/webpack"],
      });
      return config;
   },
   reactStrictMode: true, // Додаємо строгий режим React для покращення безпеки та продуктивності
};

export default nextConfig;

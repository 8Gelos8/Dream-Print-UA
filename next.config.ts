import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/Dream-Print-UA" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

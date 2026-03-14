import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
  output: "export",
=======
  /* config options here */
  output: "export",
  distDir: "build",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
>>>>>>> 247dc3d (feat: Migrate to `next/image` for displaying new image assets, refine AI model references, and update build configuration for static export.)
};

export default nextConfig;

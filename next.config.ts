/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "tnswp.com",
      },
    ],
    // formats: ["image/avif", "image/webp"], // enable modern formats if you want smaller images
  },

  eslint: {
    ignoreDuringBuilds: true, // optional: lets build pass even with ESLint errors
  },
};

export default nextConfig; // ✅ required since you're using `.mjs` / ESM

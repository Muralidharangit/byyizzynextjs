/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "i.pinimg.com", // ✅ add this
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "i.pinimg.com",
      "tnswp.com",
    ],
    // formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig; // ✅ only in .mjs (or if package.json has "type":"module")


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true, // temporary: don't block build on lint errors
//   },
// };
// module.exports = nextConfig;
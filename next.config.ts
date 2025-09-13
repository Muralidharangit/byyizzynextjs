/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "i.pinimg.com",
      "tnswp.com",                // ✅ add this
      // "www.tnswp.com",          // add if you ever use www
      // "cdn.tnswp.com",          // add if images load via a CDN subdomain
    ],
    // Or use remotePatterns if you want to be explicit:
    // remotePatterns: [
    //   { protocol: "https", hostname: "tnswp.com", pathname: "/**" },
    //   { protocol: "https", hostname: "i.pinimg.com", pathname: "/**" },
    //   { protocol: "https", hostname: "firebasestorage.googleapis.com", pathname: "/**" },
    // ],
  },
};

export default nextConfig;
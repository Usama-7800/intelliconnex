/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.sanity.io" },
      { hostname: "i.imgur.com" },
    ],
  },
};

module.exports = nextConfig;

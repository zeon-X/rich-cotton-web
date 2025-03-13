/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
      {
        protocol: "https",
        hostname: "richcotton.net",
      },
      {
        protocol: "https",
        hostname: "server.richcotton.net",
      },
    ],
  },
};

module.exports = nextConfig;

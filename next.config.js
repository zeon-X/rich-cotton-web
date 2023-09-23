/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      // {
      //   protocol: "https",
      //   hostname: "main.d55funpppxm7e.amplifyapp",
      // },
    ],
  },
};

module.exports = nextConfig;

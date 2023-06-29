/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    domains: ["cdn.imagin.studio"],
  },
};

module.exports = nextConfig;

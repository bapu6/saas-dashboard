/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true, // Optional: To use SWC for minification
  compiler: {
    react: {
      throwIfNamespace: false, // Allow namespaced tags like xlink:href
    },
  },
};

export default nextConfig;

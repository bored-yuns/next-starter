/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.js"],
  ignorePatterns: ["styles.js"],
  compiler: {
    styledComponents: true,
  },
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;

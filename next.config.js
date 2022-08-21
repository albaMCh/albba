const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
  async rewrites() {
    return [
      {
        source: "/sobre-mi",
        destination: "/about-me",
      },
    ];
  },
};

module.exports = nextConfig;

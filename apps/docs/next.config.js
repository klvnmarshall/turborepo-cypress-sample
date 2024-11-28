/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  experimental: {
    swcPlugins: [
      ['swc-plugin-coverage-instrument',
        {
          unstableExclude: ["**/node_modules/**"],
        }
      ]
    ]
  }
};

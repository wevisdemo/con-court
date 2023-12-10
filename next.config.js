/** @type {import('next').NextConfig} */

const basePath = '/con-court';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: basePath,
  images: { unoptimized: true },
  env: {
    basePath: basePath,
  },
};

module.exports = nextConfig;

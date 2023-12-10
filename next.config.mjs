import million from 'million/compiler';

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
  experimental: {
    webpackBuildWorker: true,
  },
};

const millionConfig = {
  auto: true,
  // if you're using RSC:
  // auto: { rsc: true },
};

export default million.next(nextConfig, millionConfig);

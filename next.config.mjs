// @ts-check

import { clear } from 'node:console';

 
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  allowedDevOrigins: ["10.224.211.234"],
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    
    ],
  },
};
export default  nextConfig;
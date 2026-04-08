// @ts-check

import { clear } from 'node:console';

 
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  allowedDevOrigins: ["10.36.142.234"],
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
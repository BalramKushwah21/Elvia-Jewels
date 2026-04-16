// @ts-check

import { clear } from 'node:console';

 
/*n@type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  allowedDevOrigins: ["10.24.197.74"],
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
// @ts-check

import { clear } from 'node:console';


/*n@type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  allowedDevOrigins: ["172.22.116.234"],
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
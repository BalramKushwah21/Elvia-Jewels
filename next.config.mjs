// @ts-check

import { clear } from 'node:console';


/*n@type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
<<<<<<< HEAD
  allowedDevOrigins: ["10.149.117.234"],
=======
  allowedDevOrigins: ["10.149.117.103"],
>>>>>>> dc98684bc12f405520f00e852dacf49a9bbf41d8
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
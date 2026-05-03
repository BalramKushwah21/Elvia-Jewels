// @ts-check

import { clear } from "node:console";

/*n@type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
<<<<<<< HEAD
  allowedDevOrigins: ["10.149.117.207"],
    images: {
=======
  allowedDevOrigins: ["10.85.112.234"],
  images: {
  
>>>>>>> 7bb2f75efd6a099a51ab4264f842313a46f5b175
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};
export default nextConfig;

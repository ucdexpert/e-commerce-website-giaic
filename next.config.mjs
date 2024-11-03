// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// export default {
//     images: {
//       domains: ['e0.pxfuel.com'], // Add other domains if needed
//     },
//   }
  // next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-domain.com', // Replace with the actual domain
        pathname: '/path/to/images/**', // Optional: Specify the path pattern
      },
    ],
  },
};

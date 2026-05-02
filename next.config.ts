// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.fceb2-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'design4users.com',
      },
      {
        protocol: 'https',
        hostname: 'uizard.io',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com',
      },
    ],
  },
};

module.exports = nextConfig;
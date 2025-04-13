/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['localhost', 'avatars.githubusercontent.com'],
    remotePatterns: [
      {
        hostname: 'avatars.githubusercontent.com',
      },
      {
        hostname: 'localhost',
      },
    ],
  },
};

export default nextConfig;

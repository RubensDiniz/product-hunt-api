/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/popular',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;

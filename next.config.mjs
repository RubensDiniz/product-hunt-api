/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/products/popular',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;

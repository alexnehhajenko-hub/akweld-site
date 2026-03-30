/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/about",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/ru/about",
        destination: "/ru",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/contact/services/workforce",
        destination: "/en/services/workforce",
        permanent: true,
      },
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
      {
        source: "/sv/about",
        destination: "/sv",
        permanent: true,
      },
      {
        source: "/fi/about",
        destination: "/fi",
        permanent: true,
      },
      {
        source: "/no/about",
        destination: "/no",
        permanent: true,
      },
      {
        source: "/da/about",
        destination: "/da",
        permanent: true,
      },
      {
        source: "/et/about",
        destination: "/et",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
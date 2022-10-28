/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: [
      "links.papareact.com",
      "ibb.co",
      "jsonkeeper.com",
      "www.jsonkeeper.com",
      "DNS:www.jsonkeeper.com",
    ],
  },
};

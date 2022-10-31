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
  env: {
    mapbox_token:
      "pk.eyJ1IjoiZGFuaWVsZG9vZHkiLCJhIjoiY2w5dDYwN2YyMXI4MzNvcDgwdm5qNXJ4cSJ9.vbmAVnfQ1p45Q9esPofpOA",
  },
};

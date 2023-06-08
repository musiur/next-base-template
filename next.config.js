/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOST: "http://localhost:3000",
    HOST_BACKEND: "http://localhost:8080",
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ["www.google.com", "api.e-vaam.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.e-vaam.com",
      },
    ],
  },
};

export default nextConfig;

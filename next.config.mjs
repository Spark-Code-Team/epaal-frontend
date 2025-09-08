/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      // پروڈاکشن API
      { protocol: 'https', hostname: 'api.e-vaam.com' },

      // لوکال‌ ها (Dev)
      { protocol: 'http', hostname: 'localhost', port: '8000', pathname: '/media/**' },
      { protocol: 'http', hostname: '127.0.0.1', port: '8000', pathname: '/media/**' },
    ],
  },
};

export default nextConfig;

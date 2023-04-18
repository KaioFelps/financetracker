/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = {
  images: {
    remotePatterns: [
      {
        domains: ['github.com']
      },
    ],
  },
}


module.exports = nextConfig

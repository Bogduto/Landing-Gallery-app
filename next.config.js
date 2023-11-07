/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: {
    resolve: {
      extensions: ['.js', '.jsx'],
    }
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["puppeteer-extra", "puppeteer-extra-plugin-stealth", "@sparticuz/chromium", "puppeteer-core"]
  },
}

module.exports = nextConfig

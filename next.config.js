/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["puppeteer-extra", "puppeteer-extra-plugin-stealth", "@sparticuz/chromium", "puppeteer-core"]
  },
}

module.exports = nextConfig

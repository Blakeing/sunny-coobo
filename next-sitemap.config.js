/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://sunny-coobo.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // (optional)
  // ...other options
}

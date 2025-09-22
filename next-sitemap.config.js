/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.ide8.agency',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  outDir: './public', // sitemap will be generated in public/
};

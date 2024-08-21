/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hermenautas.com',
  generateRobotsTxt: true, // (opcional) Genera un archivo robots.txt
  changefreq: 'daily', // Opcional: Frecuencia de cambio de las URLs
  priority: 0.7, // Opcional: Prioridad de las URLs en el sitemap
  sitemapSize: 4000, // Opcional: Tamaño máximo de URLs por archivo sitemap  

  // Opcional: Configurar transformaciones para las URLs
  transform: async (config, path) => {
    return {
      loc: path, // Establece la URL
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [],
    }
  },
}

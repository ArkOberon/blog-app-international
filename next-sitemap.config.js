/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hermenautas.com',
  generateRobotsTxt: true, // (opcional) Genera un archivo robots.txt
  changefreq: 'daily', // Opcional: Frecuencia de cambio de las URLs
  priority: 0.7, // Opcional: Prioridad de las URLs en el sitemap
  sitemapSize: 4000, // Opcional: Tamaño máximo de URLs por archivo sitemap  

  // Opcional: Configurar transformaciones para las URLs
  transform: async (config, url) => {
    // Configuración para transformar la URL dependiendo del idioma
    const locales = ['es', 'en'];
    const defaultLocale = 'es'; // Cambia esto si "es" no es el idioma predeterminado

    // Genera URLs para todos los idiomas
    const urls = locales.map(locale => {
      const isDefaultLocale = locale === defaultLocale;
      const loc = isDefaultLocale ? `${config.siteUrl}${url}` : `${config.siteUrl}/${locale}/${url}`;
      return {
        loc, 
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: locales.map((altLocale) => ({
          href: altLocale === defaultLocale ? `${config.siteUrl}${url}` : `${config.siteUrl}/${altLocale}/${url}`,
          hreflang: altLocale,
        })),
      };
    });

    return urls;
  },
}

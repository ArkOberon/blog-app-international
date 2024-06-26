/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',    
  },
  reactStrictMode: false,
  poweredByHeader: false,  
  experimental: {
    forceSwcTransforms: true,
  },
}

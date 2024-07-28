export const defaultLocale = 'es';
export const locales = ['es', 'en'];

export const pathnames = {
  '/': '/',
  '/404': '/404',
  '/technology': {
    es: '/tecnologia',
    en: '/technology',
  },
  '/technology/[slug]': {
    es: '/tecnologia/[slug]',
    en: '/technology/[slug]',
  },
  '/industry': {
    es: '/industria',
    en: '/industry',
  },
  '/industry/[slug]': {
    es: '/industria/[slug]',
    en: '/industry/[slug]',
  },
  '/health': {
    es: '/salud',
    en: '/health',
  },
  '/health/[slug]': {
    es: '/salud/[slug]',
    en: '/health/[slug]',
  },
  '/science': {
    es: '/ciencia',
    en: '/science',
  },
  '/science/[slug]': {
    es: '/ciencia/[slug]',
    en: '/science/[slug]',
  },
  '/economy': {
    es: '/economia',
    en: '/economy',
  },
  '/economy/[slug]': {
    es: '/economia/[slug]',
    en: '/economy/[slug]',
  },
  '/religion': {
    es: '/religion-es',
    en: '/religion-en',
  },
  '/education': {
    es: '/educacion',
    en: '/education',
  },
  '/education/[slug]': {
    es: '/educacion/[slug]',
    en: '/education/[slug]',
  },
  '/investigations': {
    es: '/investigaciones',
    en: '/investigations',
  },
  '/investigations/[slug]': {
    es: '/investigaciones/[slug]',
    en: '/investigations/[slug]',
  },
  '/authentication/sign-in': {
    es: '/autenticacion/iniciar-sesion',
    en: '/authentication/sign-in',
  },
  '/authentication/sign-up': {
    es: '/autenticacion/registrarse',
    en: '/authentication/sign-up',
  },
};

export const localePrefix = 'never';

export const port = process.env.NEXT_PUBLIC_PORT || 3000;
export const host = process.env.NEXT_PUBLIC_HOST_URL
  ? `https://${process.env.NEXT_PUBLIC_HOST_URL}`
  : `http://localhost:${port}`;

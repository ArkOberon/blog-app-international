export const defaultLocale = 'es';
export const locales = ['es', 'en'];

export const pathnames = {
  '/': '/',
  '/404': '/404',
  '/news': {
    es: '/actualidad',
    en: '/news',
  },
  '/news/[slug]': {
    es: '/actualidad/[slug]',
    en: '/news/[slug]',
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
  '/religion': {
    es: '/religion-es',
    en: '/religion-en',
  },
  '/religion/[slug]': {
    es: '/religion-es/[slug]',
    en: '/religion-en/[slug]',
  },
  '/documentaries': {
    es: '/documentales',
    en: '/documentaries',
  },
  '/documentaries/[slug]': {
    es: '/documentales/[slug]',
    en: '/documentaries/[slug]',
  },
  '/authentication/sign-in': {
    es: '/autenticacion/iniciar-sesion',
    en: '/authentication/sign-in',
  },
  '/authentication/sign-up': {
    es: '/autenticacion/registrarse',
    en: '/authentication/sign-up',
  },
  '/authentication/forget-password': {
    es: '/autenticacion/recuperar-contrasena',
    en: '/authentication/forget-password',
  },
  '/authentication/reset-password': {
    es: '/autenticacion/restaurar-contrasena',
    en: '/authentication/reset-password',
  },
  '/terms-and-conditions': {
    es: '/terminos-y-condiciones',
    en: '/terms-and-conditions',
  },
  '/privacy-policies': {
    es: '/politicas-de-privacidad',
    en: '/privacy-policies',
  },
};

export const localePrefix = 'never';

export const port = process.env.NEXT_PUBLIC_PORT || 3000;
export const host = process.env.NEXT_PUBLIC_HOST_URL
  ? `https://${process.env.NEXT_PUBLIC_HOST_URL}`
  : `http://localhost:${port}`;

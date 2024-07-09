export const defaultLocale = 'es';
export const locales = ['es', 'en'];

export const pathnames = {
  '/': '/',
  '/books': {
    es: '/libros',
    en: '/books'
  },
  '/about-us': {
    es: '/nosotros',
    en: '/about-us'
  },
  '/news': {
    es: '/noticias',
    en: '/news'
  },
  '/blog': {
    es: '/blog',
    en: '/blog'
  },
  '/contact': {
    es: '/contacto',
    en: '/contact'
  },
  '/authentication/sign-in': {
    es: '/autenticacion/iniciar-sesion',
    en: '/authentication/sign-in'
  },
  '/authentication/sign-up': {
    es: '/autenticacion/registrarse',
    en: '/authentication/sign-up'
  }
};
 
export const localePrefix = 'never';

export const port = process.env.NEXT_PUBLIC_PORT || 3000;
export const host = process.env.NEXT_PUBLIC_HOST_URL
? `https://${process.env.NEXT_PUBLIC_HOST_URL}`
: `http://localhost:${port}`;
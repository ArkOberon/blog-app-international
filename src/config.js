import {Pathnames, LocalePrefix} from 'next-intl/routing';

export const defaultLocale = 'es';
export const locales = ['es', 'en'];

export const pathnames = {
  '/': '/',
  '/authentication/sign-in': {
    es: '/autenticacion/iniciar-sesion',
    en: '/authentication/sign-in'
  }
};
 
export const localePrefix = 'never';

export const port = 3000;
export const host = `http://localhost:${port}`;
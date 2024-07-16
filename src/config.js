export const defaultLocale = 'es'
export const locales = ['es', 'en']

export const pathnames = {
  '/': '/',
  '/technology': {
    es: '/tecnologia',
    en: '/technology',
  },
  '/industry': {
    es: '/industria',
    en: '/industry',
  },
  '/health': {
    es: '/salud',
    en: '/health',
  },
  '/science': {
    es: '/ciencia',
    en: '/science',
  },
  '/politic': {
    es: '/politica',
    en: '/politic',
  },
  '/economy': {
    es: '/economia',
    en: '/economy',
  },
  '/religion': {
    es: '/religion',
    en: '/religion',
  },
  '/education': {
    es: '/educacion',
    en: '/education',
  },
  '/investigations': {
    es: '/investigaciones',
    en: '/investigations',
  },
  '/authentication/sign-in': {
    es: '/autenticacion/iniciar-sesion',
    en: '/authentication/sign-in',
  },
  '/authentication/sign-up': {
    es: '/autenticacion/registrarse',
    en: '/authentication/sign-up',
  },
}

export const localePrefix = 'never'

export const port = process.env.NEXT_PUBLIC_PORT || 3000
export const host = process.env.NEXT_PUBLIC_HOST_URL
  ? `https://${process.env.NEXT_PUBLIC_HOST_URL}`
  : `http://localhost:${port}`

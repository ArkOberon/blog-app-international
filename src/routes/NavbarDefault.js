import { v4 as uuid } from 'uuid';

const NavbarDefault = () => {
  const menu = {
    es: [
      {},
      {
        id: uuid(),
        menuitem: 'Actualidad',
        link: '/actualidad',
      },
      {
        id: uuid(),
        menuitem: 'Tecnología',
        link: '/tecnologia',
      },
      {
        id: uuid(),
        menuitem: 'Industria',
        link: '/industria',
      },
      {
        id: uuid(),
        menuitem: 'Salud',
        link: '/salud',
      },
      {
        id: uuid(),
        menuitem: 'Ciencia',
        link: '/ciencia',
      },
      {
        id: uuid(),
        menuitem: 'Economía',
        link: '/economia',
      },
      {
        id: uuid(),
        menuitem: 'Religión',
        link: '/religion',
      },
      {
        id: uuid(),
        menuitem: 'Documentales',
        link: '/documentales',
      },
    ],
    en: [
      {},
      {
        id: uuid(),
        menuitem: 'News',
        link: '/news',
      },
      {
        id: uuid(),
        menuitem: 'Technology',
        link: '/en/technology',
      },
      {
        id: uuid(),
        menuitem: 'Industry',
        link: '/en/industry',
      },
      {
        id: uuid(),
        menuitem: 'Health',
        link: '/en/health',
      },
      {
        id: uuid(),
        menuitem: 'Science',
        link: '/en/science',
      },
      {
        id: uuid(),
        menuitem: 'Economy',
        link: '/en/economy',
      },
      {
        id: uuid(),
        menuitem: 'Religion',
        link: '/en/religion',
      },
      {
        id: uuid(),
        menuitem: 'Documentaries',
        link: '/documentaries',
      },
    ],
  };

  return menu;
};

export default NavbarDefault;

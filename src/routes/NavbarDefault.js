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
        link: '/en/news',
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
        menuitem: 'Religion',
        link: '/en/religion',
      },
      {
        id: uuid(),
        menuitem: 'Documentaries',
        link: '/en/documentaries',
      },
    ],
  };

  return menu;
};

export default NavbarDefault;

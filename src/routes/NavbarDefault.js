import { v4 as uuid } from 'uuid';

const NavbarDefault = () => {
  const menu = {
    es: [
      {},
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
        menuitem: 'Educación',
        link: '/educacion',
      },
      {
        id: uuid(),
        menuitem: 'Investigaciones',
        link: '/investigaciones',
      },
    ],
    en: [
      {},
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
        menuitem: 'Education',
        link: '/en/education',
      },
      {
        id: uuid(),
        menuitem: 'Investigations',
        link: '/en/investigations',
      },
    ],
  };

  return menu;
};

export default NavbarDefault;

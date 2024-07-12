import { v4 as uuid } from 'uuid';

const NavbarDefault = () =>{ 
	const menu = {
		"es": [
			{},
			{
				id: uuid(),
				menuitem: 'Libros',
				link: '/libros'		
			},
			{
				id: uuid(),
				menuitem: 'Nosotros',
				link: '/nosotros'
			},
			{
				id: uuid(),
				menuitem: 'Noticias',
				link: '/noticias',		
			},
			{
				id: uuid(),
				menuitem: 'Blog',
				link: '/blog',	
			},
			{
				id: uuid(),
				menuitem: 'Contacto',
				link: '/contacto',		
			}
		],
		"en": [
			{},
			{
				id: uuid(),
				menuitem: 'Books',
				link: '/en/books'		
			},
			{
				id: uuid(),
				menuitem: 'About us',
				link: '/en/about-us'
			},
			{
				id: uuid(),
				menuitem: 'News',
				link: '/en/news',		
			},	
			{
				id: uuid(),
				menuitem: 'Blog',
				link: '/en/blog',	
			},
			{
				id: uuid(),
				menuitem: 'Contact',
				link: '/en/contact',		
			}
		],
	}

	return menu
};

export default NavbarDefault;

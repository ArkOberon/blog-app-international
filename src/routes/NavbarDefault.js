import { v4 as uuid } from 'uuid';

const NavbarDefault = () =>{ 
	const menu = {
		"es": [
			{},
			{
				id: uuid(),
				menuitem: 'Proyectos',
				link: '/proyectos'		
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
				menuitem: 'Projects',
				link: '/projects'		
			},
			{
				id: uuid(),
				menuitem: 'About us',
				link: '/about-us'
			},
			{
				id: uuid(),
				menuitem: 'News',
				link: '/news',		
			},	
			{
				id: uuid(),
				menuitem: 'Blog',
				link: '/blog',	
			},
			{
				id: uuid(),
				menuitem: 'Contact',
				link: '/contact',		
			}
		],
	}

	return menu
};

export default NavbarDefault;

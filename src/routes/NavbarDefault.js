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
				menuitem: 'Contacto',
				link: '/contacto',		
			}
		],
		"en": [
			{},
			{
				id: uuid(),
				menuitem: 'Projects',
				link: '#'		
			},
			{
				id: uuid(),
				menuitem: 'About us',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'News',
				link: '#',		
			},	
			{
				id: uuid(),
				menuitem: 'Contact',
				link: '#',		
			}
		],
	}

	return menu
};

export default NavbarDefault;

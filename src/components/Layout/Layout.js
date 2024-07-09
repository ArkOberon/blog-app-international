// import node module libraries
import React, { Fragment, useEffect } from 'react';

// import layouts
import { NavbarMegaMenu } from './navbar/NavBarMegaMenu';
import FooterWithLinks from './footer/FooterWithLinks';

const Layout = (props) => {
	useEffect(() => {
		document.body.className = 'bg-light';
	});
	return (
		<Fragment>
			{/* <NavbarMegaMenu login /> */}
			<main>
				{props.children}
			</main>
		{/* 	<FooterWithLinks bgColor="bg-light" /> */}
		</Fragment>
	);
};
 
export default Layout;

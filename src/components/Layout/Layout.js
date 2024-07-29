// import node module libraries
import React, { Fragment, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

// import layouts
import { NavbarMegaMenu } from './navbar/NavBarMegaMenu';
import FooterCenter from './footer/FooterCenter';

const Layout = (props) => {
  useEffect(() => {
    document.body.className = 'bg-light';
  });
  return (
    <Fragment>
      <NavbarMegaMenu login />
      <main>
        {props.children}
        <Analytics />
      </main>
      <FooterCenter bgColor="bg-light" />
    </Fragment>
  );
};

export default Layout;

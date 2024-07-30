// import node module libraries
import React, { Fragment, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
        <SpeedInsights />
      </main>
      <FooterCenter bgColor="bg-light" />
    </Fragment>
  );
};

export default Layout;

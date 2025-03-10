// import node module libraries
import { Fragment, useState } from 'react';
import { Image, Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
/* import { useMediaQuery } from 'react-responsive';*/
import { useRouter } from 'next/router';
/* import { useTranslations } from 'next-intl'; */

// import sub components
import { NavMegaDropdown } from './';
import { DarkLightMode } from '../../ui/darklight';
import { Languages } from '../../ui';
/* import { NavBarCart } from '../../cart'; */

// import data files
import NavbarDefault from '../../../routes/NavbarDefault';

// import hooks
/* import useMounted from '../../../hooks/useMounted'; */

export const NavbarMegaMenu = () => {
  /*   const t = useTranslations('Navbar'); */
  const { locale } = useRouter();
  const [expandedMenu, setExpandedMenu] = useState(false);
  /* const hasMounted = useMounted();
  const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' });

  const isLoged = false; */

  const arrayMenu = NavbarDefault();

  return (
    <Fragment>
      <Navbar
        onToggle={(collapsed) => setExpandedMenu(collapsed)}
        expanded={expandedMenu}
        expand="lg"
        className="navbar-default"
      >
        <Container fluid className="px-0 ps-2">
          <div className="d-flex">
            <Navbar.Brand as={Link} href="/">
              <Image
                src="/images/brand/logo/logo-oficial-hermenautas.svg"
                height={40}
                alt=""
              />
            </Navbar.Brand>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="icon-bar top-bar mt-0"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </Navbar.Toggle>

          <Link
            href="#"
            variant="light-primary"
            className="btn btn-light-primary ms-1 text-primary"
            id="category-dropdown-menu-button-mobile"
          >
            <i className="fe fe-book me-1 align-middle "></i> Visita la Librería
          </Link>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {arrayMenu[locale].slice(1, 100).map((item, index) => {
                if (item.children === undefined) {
                  return (
                    <Nav.Link
                      className="ms-1 dropdown-item fs-4"
                      key={index}
                      as={Link}
                      href={item.link}
                    >
                      {item.menuitem}
                    </Nav.Link>
                  );
                } else {
                  return (
                    <>
                      <NavMegaDropdown
                        item={item}
                        key={index}
                        onClick={(value) => setExpandedMenu(value)}
                      />
                    </>
                  );
                }
              })}
            </Nav>

            {/* Right side quick / shortcut menu  */}

            <div className="ms-auto mt-3 mt-lg-0">
              <div className="d-flex align-items-center">
                <Languages />

                <DarkLightMode />
                {/* TEMPORALMENTE DESACTIVADO HASTA QUE TENGAMOS 
                EL SISTEMA DE SUSCRIPCIÓN DE LA REVISTA ACTIVO */}
                {/*!isLoged ? (
                  <>
                    <Link
                      href={t('link_slug_sign_in')}
                      className="btn btn-outline-dark ms-3"
                    >
                      {t('sign_in')}
                    </Link>
                    <Link
                      href={t('link_slug_sign_up')}
                      className="btn btn-dark ms-1"
                    >
                      {t('sign_up')}
                    </Link>
                  </>
                ) : (
                  <>
                    <ListGroup
                      as="ul"
                      bsPrefix="navbar-nav"
                      className="navbar-right-wrap ms-2 d-flex nav-top-wrap"
                    >
                      <Dropdown as="li" className="ms-2">
                        <Dropdown.Toggle
                          as="a"
                          bsPrefix=" "
                          className="rounded-circle"
                          id="dropdownUser"
                        >
                          <div className="avatar avatar-md avatar-indicators avatar-online">
                            <Image
                              alt="avatar"
                              src="/images/avatar/avatar-1.jpg"
                              className="rounded-circle"
                            />
                          </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="dashboard-dropdown dropdown-menu-end mt-4 py-0"
                          align="end"
                          aria-labelledby="dropdownUser"
                          show={hasMounted && isDesktop ? true : false}
                        >
                          <Dropdown.Item className="mt-3">
                            <div className="d-flex">
                              <div className="avatar avatar-md avatar-indicators avatar-online">
                                <Image
                                  alt="avatar"
                                  src="/images/avatar/avatar-1.jpg"
                                  className="rounded-circle"
                                />
                              </div>
                              <div className="ms-3 lh-1">
                                <h5 className="mb-1">Annette Black</h5>
                                <p className="mb-0 text-muted">
                                  annette@geeksui.com
                                </p>
                              </div>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item eventKey="2">
                            <i className="fe fe-user me-2"></i> Profile
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="3">
                            <i className="fe fe-star me-2"></i> Subscription
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <i className="fe fe-settings me-2"></i> Settings
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item className="mb-3">
                            <i className="fe fe-power me-2"></i> Sign Out
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ListGroup>
                  </>
                ) */}
              </div>
            </div>

            {/* end of right side quick / shortcut menu  */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

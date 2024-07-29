// import node module libraries
import { useState } from 'react';
import { ListGroup, Dropdown, Button } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import items from '../../data/cart/products-cart.json';
import { CartOverviewItem } from './CartOverviewItem';

// import hooks
import useMounted from '../../hooks/useMounted';

export const NavBarCart = () => {
  const hasMounted = useMounted();
  const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="mr-4">
      <ListGroup
        as="ul"
        bsPrefix="navbar-nav"
        className="navbar-right-wrap ms-2 d-flex nav-top-wrap"
      >
        <Dropdown as="li">
          <Dropdown.Toggle
            as="a"
            bsPrefix=" "
            id="dropdownNotification"
            className="text-dark icon-notifications me-lg-1 btn btn-light btn-icon rounded-circle text-muted" // controlar el indicator indicator-primary
          >
            <i className="fe fe-shopping-cart"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="dashboard-dropdown notifications-dropdown dropdown-menu-lg-cart dropdown-menu-end mt-4 py-0"
            aria-labelledby="dropdownNotification"
            align="end"
            show={hasMounted && isDesktop ? true : false}
          >
            <Dropdown.Item className="mt-3" bsPrefix=" " as="div">
              <div className="border-bottom px-3 pt-0 pb-3 d-flex justify-content-between align-items-end">
                <span className="h4 mb-0">Carrito</span>
              </div>

              <div className="p-3">
                <div className="navbar-cart-product-wrapper">
                  {items.map((item, index) => (
                    <CartOverviewItem
                      item={item}
                      key={index}
                      toggleDropdown={toggleDropdown}
                    />
                  ))}
                </div>
                {/* total price*/}
                <div className="navbar-cart-total mt-8 mb-3">
                  <span className="text-uppercase text-muted">Total</span>
                  <strong
                    className="text-uppercase"
                    style={{ marginLeft: '14rem' }}
                  >
                    $240.00
                  </strong>
                </div>
                {/* buttons*/}
                <div className="d-flex justify-content-between">
                  <Button
                    variant="outline-dark"
                    onClick={() => toggleDropdown()}
                  >
                    Ver carrito
                  </Button>
                  <Button
                    variant="outline-dark"
                    onClick={() => toggleDropdown()}
                    className="paddin"
                  >
                    Realizar pedido
                  </Button>
                </div>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ListGroup>
    </div>
  );
};

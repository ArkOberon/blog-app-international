// import node module libraries
import { ListGroup, Dropdown } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive';

// import hooks
import useMounted from '../../hooks/useMounted';

export const Flags = () => {
  const hasMounted = useMounted();
  const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' });
  const lalenguaseleccionada = "Español"

  return (
    <div className="mr-4">
      <ListGroup as="ul" bsPrefix='navbar-nav' className="navbar-right-wrap ms-2 d-flex nav-top-wrap">
        <Dropdown as="li">
          <Dropdown.Toggle 
            as="a"
            bsPrefix=' '
            id="dropdownNotification"
            className="text-dark icon-notifications me-lg-1 btn btn-light btn-icon rounded-circle text-muted" // controlar el indicator indicator-primary
          >
            <i className="fe fe-globe"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="dashboard-dropdown notifications-dropdown dropdown-menu-lg-langs dropdown-menu-end mt-4 py-0"
            aria-labelledby="dropdownNotification"
            align="end"
            show={hasMounted && isDesktop ? true : false}
          >
            <Dropdown.Item className="mt-3" bsPrefix=' ' as="div"  >
              <div className="border-bottom px-3 pt-0 pb-3 d-flex justify-content-between align-items-end">
                <span className="h4 mb-0">{lalenguaseleccionada}</span>                
              </div>
              {/* <Notifications /> */}
              <div className="border-top px-3 pt-3 pb-3">                
                <div className="mt-2 text-link fw-semi-bold">
                  Inglés
                </div>   
                <div className="mt-2 text-link fw-semi-bold">
                  Francés
                </div>   
                <div className="mt-2 text-link fw-semi-bold">
                  Portugués
                </div>            
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ListGroup>  
    </div>
  )
}

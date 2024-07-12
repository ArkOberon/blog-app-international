// import node module libraries
import { useState } from "react"
import { useRouter } from 'next/router';
import { ListGroup, Dropdown } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive';
import Cookies from 'js-cookie';

// import hooks
import useMounted from '../../hooks/useMounted';

export const Languages = () => {  
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const browserLanguage = router.locale;

  const [selectLang, setSelectLang] = useState(browserLanguage)
  const hasMounted = useMounted();
  const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' });
  const regionName = new Intl.DisplayNames([`${selectLang}`], { type: 'language' });

  const languages = [
    { label: "Español", value: "es" },
    { label: "English", value: "en" },
    { label: "Français", value: "fr" },
    { label: "Português", value: "pt" }
  ];

  const handleCookie = (newLang) => {
    Cookies.set('NEXT_LOCALE', newLang, { expires: 365 });
    setSelectLang(newLang);

    // Construye la nueva URL con el prefijo del idioma seleccionado
    const newPath = `/${newLang}${asPath}`;

    // Reemplaza la ruta actual con la nueva, incluyendo el prefijo del idioma
    router.push({ pathname, query }, newPath, { locale: newLang });
  }

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
                <span className="h4 mb-0 text-capitalize">{regionName.of(`${selectLang}`)}</span>                
              </div>            
              <div className="border-top px-3 pt-3 pb-3">
                {
                  languages.filter((lang) => lang.label.toLowerCase() !== regionName.of(`${selectLang}`).toLowerCase()).map((lang, index) => (
                    <div key={index} className="mt-2 text-link fw-semi-bold text-capitalize cursor-pointer" onClick={() => handleCookie(lang.value)}>
                      {lang.label}
                    </div>
                  ))
                }                   
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ListGroup>  
    </div>
  )
}

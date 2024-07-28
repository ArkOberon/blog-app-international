// import node module libraries
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

// import widget/custom components
/* import { SocialLinks } from '../../ui'; */

const FooterCenter = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="py-lg-10 py-5 bg-white">
      <Container>
        <Row className="justify-content-center text-center  ">
          <Col xl={8} md={12} sm={12} className="px-0 ">
            <nav className="nav nav-footer justify-content-center">
              {/* <Link href={t("link_slug_company")} className="nav-link">
								{t("company")}
							</Link>
							<Link href={t("link_slug_about")} className="nav-link">
								{t("about")}
							</Link> */}
              {/* <Link href={t("link_slug_contact")} className="nav-link">
								{t("contact")}
							</Link> */}
              <Link href={t('link_slug_cookies_policies')} className="nav-link">
                {t('cookies_policies')}
              </Link>
              <Link href={t('link_slug_privacy_policies')} className="nav-link">
                {t('privacy_policies')}
              </Link>
              <Link
                href={t('link_slug_terms_of_services')}
                className="nav-link"
              >
                {t('terms_of_services')}
              </Link>
            </nav>
          </Col>
          {/*  Desc  */}
          <Col lg={8} md={12} sm={12}>
            {/* <SocialLinks /> */}
          </Col>
          <Col className="mt-5 fs-6" lg={8} md={12} sm={12}>
            <span>© 2024 Hermenautas SL. {t('all_rights_reserved')}</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterCenter;

// import node module libraries
import { Fragment, useState } from 'react';
import { Col, Row, Card, Form, Button, Toast } from 'react-bootstrap';
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import parse from 'html-react-parser';

// import widget/custom components
import { SocialLinks } from '../../components/ui/SocialLinks';
import { decodeHtml } from '../../utils/decodeHTML';
import { LoaderProcess } from '../../components/ui/loaders';

// import API functions
import { recoverPassword } from '../api/user/recoverPassword';

const ForgotPassword = () => {
  const isAuth = Cookies.get('AUTH_SESSION');
  const t = useTranslations('forgotPassword');
  const [isLoading, setIsLoading] = useState(false);
  const [emailSend, setEmailSend] = useState(false);
  const router = useRouter();
  const [errors, setErrors] = useState(false);
  const { locale } = router;

  if (isAuth) {
    router.push('/');
    return <></>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const asPath = t('asPath');
    const response = await recoverPassword(
      e.target.email.value,
      locale,
      asPath
    );

    if (response.errors) {
      setErrors(response.errors);
    } else {
      setIsLoading(false);
      setEmailSend(true);
    }
  };

  // SEO Info
  const title = t('title');
  const description = t('description');
  const imgUrl = `/images/og/es/og-hermenautas-${locale}.jpg`;
  const pageURL = process.env.NEXT_PUBLIC_HOST_URL + router.asPath;

  return (
    <Fragment>
      {/* SEO settings  */}
      <NextSeo
        title={title}
        description={description}
        canonical={pageURL}
        openGraph={{
          url: pageURL,
          title: title,
          description: description,
          site_name: process.env.NEXT_PUBLIC_SITE_NAME,
          images: [
            {
              url: imgUrl,
              width: 1200,
              height: 630,
            },
          ],
        }}
        twitter={{
          handle: '@hermenautasTM',
          cardType: 'summary_large_image',
        }}
      />

      <Row className="align-items-center justify-content-center g-0 min-vh-100">
        <Col lg={5} md={5} className="py-8 py-xl-0">
          <Card>
            <Card.Body className="p-6">
              {isLoading && !errors ? (
                <LoaderProcess />
              ) : (
                <>
                  <div className="mb-4">
                    <h1 className="mb-1 fw-bold">
                      {t('forgot_your_password')}
                    </h1>

                    {!errors ? (
                      <></>
                    ) : (
                      errors.map((error, idx) => (
                        <Toast
                          key={idx}
                          bg="danger"
                          style={{ color: '#fff' }}
                          className="mt-5 mb-5"
                        >
                          <Toast.Body>
                            {parse(decodeHtml(error.message))}
                          </Toast.Body>
                        </Toast>
                      ))
                    )}

                    {emailSend ? (
                      <Toast
                        bg="success"
                        style={{ color: '#331832' }}
                        className="mt-5 mb-5"
                      >
                        <Toast.Body>{t('send_email')}</Toast.Body>
                      </Toast>
                    ) : (
                      <></>
                    )}
                  </div>

                  {/* Form */}
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col lg={12} md={12} className="mb-3">
                        {/* email */}
                        <Form.Label>{t('email')}</Form.Label>
                        <Form.Control
                          type="email"
                          id="email"
                          placeholder={t('email_here')}
                          required
                        />
                      </Col>

                      <Col lg={12} md={12} className="mb-0 d-grid gap-2">
                        {/* Button */}
                        <Button variant="primary" type="submit">
                          {t('recover_password')}
                        </Button>
                      </Col>
                    </Row>
                  </Form>

                  <hr className="my-4" />

                  <div className="mt-4 text-center">
                    <SocialLinks />
                  </div>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ForgotPassword;

// import node module libraries
import { Fragment, useState } from 'react';
import { Col, Row, Card, Form, Button, Toast } from 'react-bootstrap';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import parse from 'html-react-parser';

// import widget/custom components
import { SocialLinks } from '../../components/ui/SocialLinks';
import { decodeHtml } from '../../utils/decodeHTML';

// import API functions
import { loginUser } from '../../pages/api/user/loginUser';

const SignIn = () => {
  const isAuth = Cookies.get('AUTH_SESSION');
  const t = useTranslations('Sign-in');
  const router = useRouter();
  const [errors, setErrors] = useState(false);
  const { locale } = router;

  if (isAuth) {
    router.push('/');
    return <></>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginUser(
      e.target.email.value,
      e.target.password.value
    );

    if (response.errors) {
      setErrors(response.errors);
    } else {
      const userData = {
        token: response.data.loginUser.authToken,
        id: response.data.loginUser.user.id,
      };

      Cookies.set('AUTH_SESSION', JSON.stringify(userData), {
        expires: 7,
        secure: true,
      });

      const isAuth = Cookies.get('AUTH_SESSION');

      if (isAuth) {
        router.push('/');
      }
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
              <div className="mb-4">
                <h1 className="mb-1 fw-bold">{t('sign_in')}</h1>

                <span>
                  {t('dont_have_account')}{' '}
                  <Link href="/authentication/sign-up" className="ms-1">
                    {t('sign_up')}
                  </Link>
                </span>

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
              </div>
              {/* Form */}
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col lg={12} md={12} className="mb-3">
                    {/* Username or email */}
                    <Form.Label>{t('username_or_email')}</Form.Label>
                    <Form.Control
                      type="text"
                      id="email"
                      placeholder={t('username_or_email_here')}
                      required
                    />
                  </Col>
                  <Col lg={12} md={12} className="mb-3">
                    {/* Password */}
                    <Form.Label>{t('password')}</Form.Label>
                    <Form.Control
                      type="password"
                      id="password"
                      placeholder={t('your_password_here')}
                      required
                    />
                  </Col>
                  <Col lg={12} md={12} className="mb-3">
                    {/* Checkbox */}
                    <div className="d-md-flex justify-content-between align-items-center">
                      <Link href="/authentication/forget-password">
                        {t('forgot_your_password')}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={12} md={12} className="mb-0 d-grid gap-2">
                    {/* Button */}
                    <Button variant="primary" type="submit">
                      {t('sign_in')}
                    </Button>
                  </Col>
                </Row>
              </Form>
              <hr className="my-4" />
              <div className="mt-4 text-center">
                <SocialLinks />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default SignIn;

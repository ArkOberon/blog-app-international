// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

// import widget/custom components
//import { LoaderProcess } from '../../components/ui/loaders';
import { SocialLinks } from '../../components/ui/SocialLinks';

// import API functions
//import { loginUser } from '../../pages/api/user/loginUser';

const SignIn = () => {
  const isAuth = Cookies.get('AUTH_SESSION');
  const t = useTranslations('Sign-in');
  const router = useRouter();
  const { locale } = router;

  if (isAuth) {
    router.push('/');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    //console.log(e.target.email.value)
    //console.log(e.target.password.value)
    //const response = await loginUser(e.target.email.value, e.target.password.value)
    //console.log(response)
    //console.log(response.data.loginUser.authToken)
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
                <Link href="/">
                  <Image
                    src="/images/brand/logo/logo-icon.svg"
                    className="mb-4"
                    alt=""
                  />
                </Link>
                <h1 className="mb-1 fw-bold">Sign in</h1>
                <span>
                  Don’t have an account?{' '}
                  <Link href="/authentication/sign-up" className="ms-1">
                    Sign up
                  </Link>
                </span>
              </div>
              {/* Form */}
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col lg={12} md={12} className="mb-3">
                    {/* Username or email */}
                    <Form.Label>Username or email </Form.Label>
                    <Form.Control
                      type="email"
                      id="email"
                      placeholder="Email address here"
                      required
                    />
                  </Col>
                  <Col lg={12} md={12} className="mb-3">
                    {/* Password */}
                    <Form.Label>Password </Form.Label>
                    <Form.Control
                      type="password"
                      id="password"
                      placeholder="**************"
                      required
                    />
                  </Col>
                  <Col lg={12} md={12} className="mb-3">
                    {/* Checkbox */}
                    <div className="d-md-flex justify-content-between align-items-center">
                      <Form.Group
                        className="mb-3 mb-md-0"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="Remember me" />
                      </Form.Group>
                      <Link href="/authentication/forget-password">
                        Forgot your password?
                      </Link>
                    </div>
                  </Col>
                  <Col lg={12} md={12} className="mb-0 d-grid gap-2">
                    {/* Button */}
                    <Button variant="primary" type="submit">
                      Sign in
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

// import node module libraries
import { Fragment } from 'react'
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

// import widget/custom components
import { HermenautasSEO } from '../../widgets'

// import API functions
import { loginUser } from '../../pages/api/user/loginUser'
import { decodeParameters, generateToken } from '../../utils/ncryptSecure'

const SignIn = () => {
  const t = useTranslations('Sign-in')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await loginUser('ailuro', '1234')

    console.log(response)

    console.log(response.data.loginUser.session)

    const decodeKey = decodeParameters(response.data.loginUser.session)

    console.log(decodeKey)

    const status = await generateToken(
      decodeKey.CLIENT_KEY,
      response.data.loginUser.user.id
    )

    console.log(status)
  }

  return (
    <Fragment>
      {/* SEO settings  */}
      <HermenautasSEO title={t('title')} />

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
                {/* Facebook */}
                <Link
                  href="#"
                  className="btn-social btn-social-outline btn-facebook"
                >
                  <i className="fab fa-facebook"></i>
                </Link>{' '}
                {/* Twitter */}
                <Link
                  href="#"
                  className="btn-social btn-social-outline btn-twitter"
                >
                  <i className="fab fa-twitter"></i>
                </Link>{' '}
                {/* LinkedIn */}
                <Link
                  href="#"
                  className="btn-social btn-social-outline btn-linkedin"
                >
                  <i className="fab fa-linkedin"></i>
                </Link>{' '}
                {/* GitHub */}
                <Link
                  href="#"
                  className="btn-social btn-social-outline btn-github"
                >
                  <i className="fab fa-github"></i>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  }
}

export default SignIn

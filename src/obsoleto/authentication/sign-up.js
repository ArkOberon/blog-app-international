// import node module libraries
import { Fragment, useEffect, useState } from 'react';
import { Col, Row, Card, Form, Button, Image, Toast } from 'react-bootstrap';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import PasswordStrengthBar from 'react-password-strength-bar';

// import widget/custom components
import { HermenautasSEO } from '../../widgets';
import { LoaderProcess } from '../../components/ui/loaders';
import { SocialLinks } from '../../components/ui/SocialLinks';

// import API functions
import { registerUser } from '../../pages/api/user/registerUser';

const SignUp = () => {
  const t = useTranslations('Sign-up');
  const [submit, setSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (submit) {
      router.push(`${t('redirect_link_slug')}`);
    }
  }, [submit]);

  const handleChangeInput = (e) => {
    const { value } = e.target;

    setPasswordStrength(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const response = await registerUser(
      e.target.username.value,
      e.target.email.value,
      e.target.password.value
    );

    if (response.errors) {
      setErrors(response.errors);
      return;
    } else {
      setIsLoading(false);
      setSubmit(true);
    }
  };

  const decodeHtml = (html) => {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = html;
    return textArea.value;
  };

  return (
    <Fragment>
      {/* SEO settings  */}
      <HermenautasSEO title={`${t('title')} | Hermenautas`} />

      <Row className="align-items-center justify-content-center g-0 min-vh-100">
        <Col lg={5} md={5} className="py-8 py-xl-0">
          <Card>
            <Card.Body className="p-6">
              {/* Form */}
              {isLoading && !errors ? (
                <LoaderProcess />
              ) : (
                <>
                  <div className="mb-4">
                    <Link href="/">
                      <Image
                        src="/images/brand/logo/logo-icon.svg"
                        className="mb-4"
                        alt=""
                      />
                    </Link>

                    <h1 className="mb-1 fw-bold">{t('title')}</h1>

                    {!errors ? (
                      <span>
                        {t('already_have_an_account')}{' '}
                        <Link href={t('redirect_link_slug')} className="ms-1">
                          {t('sign_in')}
                        </Link>
                      </span>
                    ) : (
                      errors.map((error, idx) => (
                        <Toast key={idx} bg="danger" style={{ color: '#fff' }}>
                          <Toast.Body>
                            {parse(decodeHtml(error.message))}
                          </Toast.Body>
                        </Toast>
                      ))
                    )}
                  </div>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col lg={12} md={12} className="mb-3">
                        {/* User Name */}
                        <Form.Label>{t('username')}</Form.Label>
                        <Form.Control
                          type="text"
                          id="username"
                          placeholder={t('username')}
                          required
                        />
                      </Col>
                      <Col lg={12} md={12} className="mb-3">
                        {/* email */}
                        <Form.Label>{t('email')}</Form.Label>
                        <Form.Control
                          type="email"
                          id="email"
                          placeholder={t('email_address_here')}
                          required
                        />
                      </Col>
                      <Col lg={12} md={12} className="mb-3">
                        {/* Password */}
                        <Form.Label>{t('password')}</Form.Label>
                        <Form.Control
                          type="password"
                          id="password"
                          onChange={handleChangeInput}
                          placeholder={t('your_password')}
                          required
                        />
                        <PasswordStrengthBar password={passwordStrength} />
                      </Col>
                      <Col lg={12} md={12} className="mb-3">
                        {/* Checkbox */}
                        <Form.Check type="checkbox" id="check-api-checkbox">
                          <Form.Check.Input type="checkbox" required />
                          <Form.Check.Label>
                            {t('i_agree_to_the_terms')}{' '}
                            <Link href="/marketing/specialty/terms-and-conditions/">
                              {t('terms_of_services')}
                            </Link>{' '}
                            {t('and')}{' '}
                            <Link href="/marketing/specialty/terms-and-conditions/">
                              {t('privacy_policy')}.
                            </Link>
                          </Form.Check.Label>
                        </Form.Check>
                      </Col>
                      <Col lg={12} md={12} className="mb-0 d-grid gap-2">
                        {/* Button */}
                        <Button variant="primary" type="submit">
                          {t('sign_up')}
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </>
              )}
              <hr className="my-4" />
              <SocialLinks />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default SignUp;

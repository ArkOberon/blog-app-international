// import node module libraries
import { useState, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useTranslations } from 'next-intl';

// import widget/custom components
import { LoaderProcess } from '../../components/ui/loaders';

// import API functions
import { addSubscriberToList } from '../../pages/api/email/addSubscriber';

export const NewsletterForm = ({ listId = 4, categoryName }) => {
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef(null);
  const t = useTranslations('NewsletterForm');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = emailRef.current.value;
    const response = await addSubscriberToList(email, listId, categoryName);

    if (response.errors) {
      return;
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-12">
      <div className="text-center mb-6">
        <h2 className="display-4 fw-bold">{t('sign_up_for_our_newsletter')}</h2>
        <p className="mb-0 lead">{t('join_our_newsletter')}</p>
      </div>
      {isLoading ? (
        <LoaderProcess />
      ) : (
        <Form className="row px-md-20" onSubmit={handleSubmit}>
          <Form.Group
            className="mb-3 col ps-0 ms-2 ms-md-0"
            controlId="formBasicEmail"
          >
            <Form.Control
              type="email"
              ref={emailRef}
              placeholder={t('placeholder')}
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3 col-auto ps-0"
            controlId="formSubmitButton"
          >
            <Button variant="primary" type="submit">
              {' '}
              {t('submit')}
            </Button>
          </Form.Group>
        </Form>
      )}
    </div>
  );
};

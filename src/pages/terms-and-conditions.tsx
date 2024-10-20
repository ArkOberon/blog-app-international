// import node module libraries
import parse from 'html-react-parser';
import { Col, Row, Container } from 'react-bootstrap';
import { useTranslations, useFormatter } from 'next-intl';

// import API functions
import { getPageById } from './api/pages/getPageById';

type ServerSidePropsType = {
  locale: string;
};

type TermsAndConditionsProps = {
  page: {
    data: {
      pageBy: {
        date: Date;
        content: string;
      };
    };
  };
};

export async function getServerSideProps({ locale }: ServerSidePropsType) {
  const termsAndConditionsIdKey = `NEXT_PUBLIC_TERMS_AND_CONDITIONS_ID_${locale}`;
  const id = process.env[termsAndConditionsIdKey];

  const page = await getPageById(id);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
    },
  };
}

function TermsAndConditions({ page }: TermsAndConditionsProps): JSX.Element {
  const t = useTranslations('Terms-and-conditions');
  const dateTime = new Date(page.data.pageBy.date);
  const format = useFormatter();
  const pageDate = format.dateTime(dateTime, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <>
      <main>
        {/* pageheader */}
        <section className="py-10 bg-white">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} md={12} sm={12}>
                {/* text center */}
                <div className="text-center">
                  <h1 className="display-3 fw-bold">{t('title')}</h1>
                  <p className="lead px-8">{t('subtitle')}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* content */}
        <section className="pb-10 bg-white">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} md={12} sm={12}>
                {/* date */}
                <div className="py-3 mb-5 border-bottom">
                  <h3>
                    {t('date')}:{' '}
                    <span className="text-primary">{pageDate}</span>
                  </h3>
                </div>
                {parse(page.data.pageBy.content)}
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

export default TermsAndConditions;

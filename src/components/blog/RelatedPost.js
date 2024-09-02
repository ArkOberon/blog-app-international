// import node module libraries
import { Card, Row, Col, Image, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useFormatter, useTranslations } from 'next-intl';

// Custom functionalities
import { categoryColors } from '../../utils/categoryColor';

// Global Variables
import { defaultImage } from '../../global';

export const RelatedPost = ({ post, slug, category, lang }) => {
  const format = useFormatter();
  const t = useTranslations('RelatedPost');
  const article = post.data?.postBy;

  const dateTime = new Date(article?.date);

  const postDate = format.dateTime(dateTime, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <section className="pb-8 bg-white">
      <Container>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12}>
            <div className="mt-6">
              <h3>{t('title')}</h3>
            </div>
            <Card className="mb-4 mt-6">
              <Row className="g-0">
                {/*  Image */}
                <Link
                  href={`/${lang}/${category}/${slug}`}
                  className="col-lg-5 col-md-12 col-12 bg-cover img-left-rounded image-container"
                  style={{
                    background: `url(${!article?.featuredImage ? '/default-100.jpg' : article?.featuredImage.node.link})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                  }}
                >
                  <Card.Img
                    variant="left"
                    src={
                      !article?.featuredImage
                        ? '/default-100.jpg'
                        : article?.featuredImage.node.link
                    }
                    className="img-fluid d-lg-none invisible"
                  />
                </Link>
                <Col lg={7} md={12} sm={12}>
                  {/*  Card body */}
                  <Card.Body>
                    <Link
                      href={`/${lang}/${category}/${slug}`}
                      className={`fs-5 mb-3 fw-semi-bold d-block text-${categoryColors(category)}`}
                    >
                      {category}
                    </Link>
                    <h1
                      className="mb-2 mb-lg-4"
                      style={{ wordBreak: 'keep-all' }}
                    >
                      <Link
                        href={`/${lang}/${category}/${slug}`}
                        className="text-inherit"
                      >
                        {article?.title}
                      </Link>
                    </h1>
                    {/*  Media content */}
                    <Row className="align-items-center g-0 mt-lg-7 mt-4">
                      <Col xs="auto">
                        {article?.author.node.avatar.url.includes(
                          defaultImage
                        ) ? (
                          <></>
                        ) : (
                          <Image
                            src={article?.author.node.avatar.url}
                            alt=""
                            className="rounded-circle avatar-sm me-2"
                          />
                        )}
                      </Col>
                      <Col className="col lh-1 ">
                        <h5 className="mb-1">
                          {article?.author.node.firstName}{' '}
                          {article?.author.node.lastName}
                        </h5>
                        <p className="fs-6 mb-0">{postDate}</p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

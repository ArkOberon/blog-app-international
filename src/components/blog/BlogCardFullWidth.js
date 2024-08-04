// import node module libraries
import { Card, Row, Col, Image } from 'react-bootstrap';
import Link from 'next/link';
import parse from 'html-react-parser';
import { useFormatter } from 'next-intl';

// Custom functionalities
import { categoryColors } from '../../utils/categoryColor';
import { decodeHtml } from '../../utils/decodeHTML';

// Global Variables
import { defaultImage } from '../../global';

export const BlogCardFullWidth = ({
  item,
  locale,
  filterPrincipal,
  oposeCategory,
  titleCategory,
}) => {
  const format = useFormatter();
  const principalPost =
    filterPrincipal === 'Principal'
      ? item.posts.nodes.filter((portada) =>
          portada.categories.nodes.some(
            (category) => category.name === `${filterPrincipal}-${locale}`
          )
        )
      : item.posts.nodes.filter((portada) =>
          portada.categories.nodes.some(
            (category) => category.name === titleCategory
          )
        );

  const principalCategory = principalPost[0]?.categories.nodes.filter(
    (item) =>
      item.name !== `${filterPrincipal}-${locale}` &&
      item.name !== `${oposeCategory}-${locale}` &&
      item.name !== locale
  );

  const dateTime = new Date(principalPost[0]?.date);

  const postDate = format.dateTime(dateTime, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <>
      {!principalCategory ? (
        <></>
      ) : (
        <Card className="mb-4 shadow-lg mt-6">
          <Row className="g-0">
            {/*  Image */}
            <Link
              href={`/${principalCategory[0]?.slug}/${principalPost[0]?.slug}`}
              className="col-lg-5 col-md-12 col-12 bg-cover img-left-rounded"
              style={{
                background: `url(${!principalPost[0].featuredImage ? '/default-100.jpg' : principalPost[0]?.featuredImage.node.link})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
              }}
            >
              <Card.Img
                variant="left"
                src={
                  !principalPost[0].featuredImage
                    ? '/default-100.jpg'
                    : principalPost[0].featuredImage.node.link
                }
                className="img-fluid d-lg-none invisible"
              />
            </Link>
            <Col lg={7} md={12} sm={12}>
              {/*  Card body */}
              <Card.Body>
                <Link
                  href={`/${principalCategory[0]?.slug}`}
                  className={`fs-5 mb-3 fw-semi-bold d-block text-${categoryColors(principalCategory[0]?.name)}`}
                >
                  {principalCategory[0]?.name}
                </Link>
                <h1 className="mb-2 mb-lg-4">
                  <Link
                    href={`/${principalCategory[0]?.slug}/${principalPost[0]?.slug}`}
                    className="text-inherit"
                  >
                    {principalPost[0]?.title}
                  </Link>
                </h1>
                {parse(decodeHtml(principalPost[0]?.excerpt))}
                {/*  Media content */}
                <Row className="align-items-center g-0 mt-lg-7 mt-4">
                  <Col xs="auto">
                    {/*  Img  */}
                    {principalPost[0]?.author.node.avatar.url.includes(
                      defaultImage
                    ) ? (
                      <></>
                    ) : (
                      <Image
                        src={principalPost[0]?.author.node.avatar.url}
                        alt=""
                        className="rounded-circle avatar-sm me-2"
                      />
                    )}
                  </Col>
                  <Col className="col lh-1 ">
                    <h5 className="mb-1">
                      {principalPost[0]?.author.node.firstName}{' '}
                      {principalPost[0]?.author.node.lastName}
                    </h5>
                    <p className="fs-6 mb-0">{postDate}</p>
                  </Col>
                </Row>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      )}
    </>
  );
};

// import node module libraries
import { Card, Row, Col, Image } from 'react-bootstrap';
import Link from 'next/link';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { useFormatter } from 'next-intl';

// Custom functionalities
import { categoryColors } from '../../utils/categoryColor';
import { decodeHtml } from '../../utils/decodeHTML';

// Global Variables
import { defaultImage } from '../../global';

export const BlogCard = ({ item, locale, filterPrincipal, oposeCategory }) => {
  const format = useFormatter();
  const categorie = item.categories.nodes.filter(
    (item) =>
      item.name !== `${filterPrincipal}-${locale}` &&
      item.name !== `${oposeCategory}-${locale}` &&
      item.name !== locale
  );

  const dateTime = new Date(item.date);

  const postDate = format.dateTime(dateTime, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <>
      {categorie && categorie.length === 0 ? (
        <></>
      ) : (
        <Card className="mb-4">
          <Link href={`/${categorie[0]?.slug}/${item.slug}`}>
            {item.tags.nodes.some((tag) => tag.name === 'vlog') ? (
              <div className="image-container">
                <Card.Img
                  variant="top"
                  src={item.featuredImage?.node.link}
                  className="rounded-top-md img-fluid"
                />
                <i className="fe fe-play-circle play-icon"></i>
              </div>
            ) : (
              <Card.Img
                variant="top"
                src={item.featuredImage?.node.link}
                className="rounded-top-md img-fluid"
              />
            )}
          </Link>
          {/* Card body  */}
          <Card.Body>
            <Link
              href={`/${categorie[0]?.slug}`}
              className={`fs-5 fw-semi-bold d-block mb-3 text-${categoryColors(
                categorie[0].name
              )}`}
            >
              {categorie[0]?.name}
            </Link>
            <h2>
              <Link
                href={`/${categorie[0]?.slug}/${item.slug}`}
                className="text-inherit"
              >
                {item.title}
              </Link>
            </h2>
            <div className="fs-4">{parse(decodeHtml(item.excerpt))}</div>
            {/*  Media content  */}
            <Row className="align-items-center g-0 mt-4">
              <Col xs="auto">
                {item.author.node.avatar.url.includes(defaultImage) ? (
                  <></>
                ) : (
                  <Image
                    src={item.author.node.avatar.url}
                    alt=""
                    className="rounded-circle avatar-sm me-2"
                  />
                )}
              </Col>
              <Col className="col lh-1">
                <h5 className="mb-1">
                  {item.author.node.firstName} {item.author.node.lastName}
                </h5>
                <p className="fs-5 mb-0">{postDate}</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

// Typechecking With PropTypes
BlogCard.propTypes = {
  item: PropTypes.object.isRequired,
};

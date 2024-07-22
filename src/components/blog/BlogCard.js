// import node module libraries
import { Card, Row, Col, Image } from 'react-bootstrap';
import Link from 'next/link';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

// Custom functionalities
import { categoryColors } from '../../utils/categoryColor';
import { decodeHtml } from '../../utils/decodeHTML';

export const BlogCard = ({ item, locale }) => {
  const CategoryColors = (category) => {
    switch (category) {
      case 'Courses':
        return 'success';
      case 'Tutorial':
        return 'primary';
      case 'Workshop':
        return 'warning';
      case 'Company':
        return 'info';
      default:
        return 'primary';
    }
  };

  const categorie = item.categories.nodes.filter(
    (item) => item.name !== locale
  );
  console.log(item);
  console.log(categorie[0]);
  return (
    <Card className="mb-4 shadow-lg">
      <Link href={`/${categorie[0].slug}/${item.slug}`}>
        <Card.Img
          variant="top"
          src={item.featuredImage?.node.link}
          className="rounded-top-md img-fluid"
        />
      </Link>
      {/* Card body  */}
      <Card.Body>
        <Link
          href={`/${categorie[0].slug}`}
          className={`fs-5 fw-semi-bold d-block mb-3 text-${categoryColors(
            categorie[0].name
          )}`}
        >
          {categorie[0].name}
        </Link>
        <h3>
          <Link
            href={`/${categorie[0].slug}/${item.slug}`}
            className="text-inherit"
          >
            {item.title}
          </Link>
        </h3>
        <p>{parse(decodeHtml(item.excerpt))} </p>
        {/*  Media content  */}
        <Row className="align-items-center g-0 mt-4">
          <Col xs="auto">
            <Image
              src={item.author.node.avatar.url}
              alt=""
              className="rounded-circle avatar-sm me-2"
            />
          </Col>
          <Col className="col lh-1">
            <h5 className="mb-1">
              {item.author.node.firstName} {item.author.node.lastName}
            </h5>
            <p className="fs-6 mb-0">{item.date}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// Typechecking With PropTypes
BlogCard.propTypes = {
  item: PropTypes.object.isRequired,
};

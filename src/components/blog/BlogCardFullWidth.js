// import node module libraries
import { Card, Row, Col, Image } from 'react-bootstrap';
import Link from 'next/link';
import parse from 'html-react-parser';

// Custom functionalities
import { categoryColors } from '../../utils/categoryColor';
import { decodeHtml } from '../../utils/decodeHTML';

export const BlogCardFullWidth = ({ item, locale }) => {
  const principalCategory = item.posts.nodes[0].categories.nodes.filter(
    (item) => item.name !== `Principal-${locale}`
  );

  return (
    <Card className="mb-4 shadow-lg mt-6">
      <Row className="g-0">
        {/*  Image */}
        <Link
          href={`/${principalCategory[0].slug}/${item.posts.nodes[0].slug}`}
          className="col-lg-8 col-md-12 col-12 bg-cover img-left-rounded"
          style={{
            background: `url(${!item.posts.nodes[0].featuredImage.node.link ? '/default-100.jpg' : item.posts.nodes[0].featuredImage.node.link})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        >
          <Card.Img
            variant="left"
            src={item.posts.nodes[0].featuredImage.node.link}
            className="img-fluid d-lg-none invisible"
          />
        </Link>
        <Col lg={4} md={12} sm={12}>
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
                href={`/${principalCategory[0].slug}/${item.posts.nodes[0].slug}`}
                className="text-inherit"
              >
                {item.posts.nodes[0].title}
              </Link>
            </h1>
            <p> {parse(decodeHtml(item.posts.nodes[0].excerpt))} </p>
            {/*  Media content */}
            <Row className="align-items-center g-0 mt-lg-7 mt-4">
              <Col xs="auto">
                {/*  Img  */}
                <Image
                  src={item.posts.nodes[0].author.node.avatar.url}
                  alt=""
                  className="rounded-circle avatar-sm me-2"
                />
              </Col>
              <Col className="col lh-1 ">
                <h5 className="mb-1">
                  {item.posts.nodes[0].author.node.firstName}{' '}
                  {item.posts.nodes[0].author.node.lastName}
                </h5>
                <p className="fs-6 mb-0">{item.posts.nodes[0].date}</p>
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

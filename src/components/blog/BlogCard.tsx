// import node module libraries
import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import Link from 'next/link';
import { useFormatter } from 'next-intl';

// Custom functionalities
import { categoryColors } from '../../utils/categoryColor';

// Global Variables
import { defaultImage } from '../../global';

type ObjectItem = {
  name: string;
  slug: string;
};

type TagsItem = {
  name: string;
};

type BlogCardProps = {
  item: {
    author: {
      node: {
        avatar: {
          url: string;
        };
        firstName: string;
        lastName: string;
      };
    };
    title: string;
    featuredImage: {
      node: {
        link: string;
      };
    };
    categories: {
      nodes: [ObjectItem];
    };
    date: string;
    slug: string;
    tags: {
      nodes: [TagsItem];
    };
  };
  locale: string | undefined;
  filterPrincipal: string;
  oposeCategory: string;
};

export const BlogCard = ({
  item,
  locale,
  filterPrincipal,
  oposeCategory,
}: BlogCardProps): JSX.Element => {
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
            <h2 style={{ wordBreak: 'keep-all' }}>
              <Link
                href={`/${categorie[0]?.slug}/${item.slug}`}
                className="text-inherit"
              >
                {item.title}
              </Link>
            </h2>

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

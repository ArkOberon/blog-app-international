// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import { Col, Row, Container, Image, Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';
import parse from 'html-react-parser';

// import widget/custom components
import { AuthorAndSharing } from '../../components/blog';
import { HermenautasSEO } from '../../widgets';
import { SinglePostSkeleton } from '../../components/ui/loaders';

// import API functions
import { getPostBySlug } from '../api/posts/getPostBySlug';

// Custom functionalities
import { decodeHtml } from '../../utils/decodeHTML';

const Article = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({
    data: {
      postBy: {},
    },
  });
  const post = article?.data.postBy;
  const router = useRouter();
  const { query, locale } = router;
  const slug = query.slug;

  useEffect(() => {
    if (slug) {
      const post = async (slug) => {
        const actualPost = await getPostBySlug(slug);
        setArticle(actualPost);
        setIsLoading(false);
      };

      post(slug);
    }
  }, [slug]);

  return (
    <Fragment>
      {isLoading ? (
        <SinglePostSkeleton />
      ) : (
        <section className="py-4 py-lg-8 pb-14 bg-white ">
          <Container>
            <Fragment>
              {/* Hermenautas SEO settings  */}
              <HermenautasSEO
                title={post?.title}
                description={post?.excerpt}
                imgUrl={post?.featuredImage.node.link}
                imgAlt={post?.featuredImage.node.altText}
              />

              <Row className="justify-content-center">
                <Col xl={8} lg={8} md={12} sm={12} className="mb-2">
                  <div className="text-center mb-4">
                    <Link
                      href={`${process.env.NEXT_PUBLIC_HOST_URL}/${post?.categories.nodes.filter((item) => item.name !== locale && item.name !== `Principal-${locale}` && item.name !== `Portada-${locale}`)[0].name}`}
                      className="fs-5 fw-semi-bold d-block mb-4 text-primary"
                    >
                      {
                        post?.categories.nodes.filter(
                          (item) =>
                            item.name !== locale &&
                            item.name !== `Principal-${locale}` &&
                            item.name !== `Portada-${locale}`
                        )[0].name
                      }
                    </Link>
                    <h1 className="display-3 fw-bold mb-4">{post?.title}</h1>
                  </div>
                  {/* Author */}
                  <AuthorAndSharing data={post?.author.node} date={post.date} />
                </Col>
              </Row>
              <Row className="justify-content-center">
                {/* Image */}
                <Col
                  xl={10}
                  lg={10}
                  md={12}
                  sm={12}
                  className="mb-6 text-center"
                >
                  <Image
                    src={post.featuredImage.node.link}
                    alt={post.featuredImage.node.altText}
                    className="img-fluid rounded-3"
                  />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xl={8} lg={8} md={12} sm={12} className="mb-2">
                  {/* Blog Content */}
                  <div>{parse(decodeHtml(post.content))}</div>
                  <hr className="mt-8 mb-5" />
                  {/* Author */}
                  {/* <AuthorAndSharing /> */}
                  {/* Subscribe to Newsletter */}
                  <div className="py-12">
                    <div className="text-center mb-6">
                      <h2 className="display-4 fw-bold">
                        Sign up for our Newsletter
                      </h2>
                      <p className="mb-0 lead">
                        Join our newsletter and get resources, curated content,
                        and design inspiration delivered straight to your inbox.
                      </p>
                    </div>
                    {/* Form */}
                    <Form className="row px-md-20">
                      <Form.Group
                        className="mb-3 col ps-0 ms-2 ms-md-0"
                        controlId="formBasicEmail"
                      >
                        <Form.Control
                          type="email"
                          placeholder="Email Address"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3 col-auto ps-0"
                        controlId="formSubmitButton"
                      >
                        <Button variant="primary" type="submit">
                          {' '}
                          Submit
                        </Button>
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
              </Row>
            </Fragment>
          </Container>
        </section>
      )}
    </Fragment>
  );
};

export default Article;

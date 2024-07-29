// import node module libraries
import React, { Fragment } from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';

import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const SinglePostSkeleton = () => {
  return (
    <Fragment>
      <section className="py-4 py-lg-8 pb-14 bg-white ">
        <Container>
          <Fragment>
            <Row className="justify-content-center">
              <Col xl={8} lg={8} md={12} sm={12} className="mb-2">
                <div className="text-center mb-4">
                  <Link
                    href="#"
                    className="fs-5 fw-semi-bold d-block mb-4 text-primary"
                  >
                    <Skeleton height={12} width={100} />
                  </Link>
                  <h1 className="display-3 fw-bold mb-4">
                    <Skeleton height={22} width={460} />
                  </h1>
                </div>
                {/* Author */}
                <Skeleton height={12} width={160} />
                <Skeleton height={12} width={100} />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xl={8} lg={8} md={12} sm={12} className="mb-2">
                {/* Blog Content */}
                <div>
                  <Skeleton height={12} width={500} />
                  <Skeleton height={12} width={900} />
                  <Skeleton height={12} width={700} />
                  <Skeleton height={12} width={800} />
                  <Skeleton height={12} width={600} />
                  <Skeleton height={12} width={500} />
                  <Skeleton height={12} width={400} />
                  <Skeleton height={12} width={700} />
                  <Skeleton height={12} width={800} />
                </div>
                <hr className="mt-8 mb-5" />
                {/* Author */}

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
                      <Form.Control type="email" placeholder="Email Address" />
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
    </Fragment>
  );
};

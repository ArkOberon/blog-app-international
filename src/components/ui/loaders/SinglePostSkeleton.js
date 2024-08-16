// import node module libraries
import React, { Fragment } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

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

                  <Skeleton height={22} width={460} />
                </div>
                {/* Author */}
                <Skeleton height={12} width={160} />
                <Skeleton height={12} width={100} />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xl={8} lg={8} md={12} sm={12} className="mb-2">
                {/* Blog Content */}
                <div style={{ overflow: 'hidden' }}>
                  <Skeleton height={12} width={500} />
                  <Skeleton height={12} width={600} />
                  <Skeleton height={12} width={500} />
                  <Skeleton height={12} width={600} />
                  <Skeleton height={12} width={500} />
                  <Skeleton height={12} width={600} />
                  <Skeleton height={12} width={400} />
                  <Skeleton height={12} width={500} />
                  <Skeleton height={12} width={600} />
                </div>
              </Col>
            </Row>
          </Fragment>
        </Container>
      </section>
    </Fragment>
  );
};

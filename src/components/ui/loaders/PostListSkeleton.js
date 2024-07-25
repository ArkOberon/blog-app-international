// import node module libraries
import { Card, Row, Col, Container } from 'react-bootstrap';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const PostListSkeleton = () => {
  return (
    <section className="pb-8 bg-white">
      <Container>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12}>
            <Card className="mb-4 shadow-lg mt-6">
              <Row className="g-0">
                {/*  Image */}

                <Skeleton height={331} />

                <Col lg={4} md={12} sm={12}>
                  {/*  Card body */}
                  <Card.Body>
                    <Skeleton height={20} />

                    <h1 className="mb-2 mb-lg-4">
                      <Skeleton height={20} />
                    </h1>
                    <p>
                      <Skeleton height={20} />
                    </p>
                    {/*  Media content */}
                    <Row className="align-items-center g-0 mt-lg-7 mt-4">
                      <Col xs="auto" className="ml-3">
                        {/*  Img  */}
                        <Skeleton height={50} width={50} />
                      </Col>
                      <Col className="col lh-1">
                        <h5 className="mb-1">
                          <Skeleton height={20} width={160} />
                        </h5>
                        <p className="fs-6 mb-0">
                          <Skeleton height={20} width={100} />
                        </p>
                      </Col>
                      <Col xs="auto">
                        <p className="fs-6 mb-0">
                          <Skeleton height={20} width={100} />
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          {Array(8)
            .fill('a')
            .map((_, index) => (
              <Col xl={4} lg={4} md={6} sm={12} className="d-flex" key={index}>
                <Card className="mb-4 shadow-lg">
                  <Skeleton height={300} width={404} />

                  {/* Card body  */}
                  <Card.Body>
                    <Skeleton height={20} />

                    <h3>
                      <Skeleton height={20} />
                    </h3>
                    <p>
                      {' '}
                      <Skeleton height={20} />{' '}
                    </p>
                    {/*  Media content  */}
                    <Row className="align-items-center g-0 mt-4">
                      <Col xs="auto">
                        <Skeleton height={20} />
                      </Col>
                      <Col className="col lh-1">
                        <h5 className="mb-1">
                          <Skeleton height={20} width={100} />
                        </h5>
                        <p className="fs-6 mb-0">
                          <Skeleton height={20} width={40} />
                        </p>
                      </Col>
                      <Col xs="auto">
                        <p className="fs-6 mb-0">
                          <Skeleton height={20} width={40} />
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

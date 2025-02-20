// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

export const PageHeadingBriefinfo = ({ pagetitle, description, briefinfo }) => {
  return (
    <section className="bg-primary">
      <Container>
        <Row className="align-items-center">
          <Col xl={12} lg={12} md={12} sm={12}>
            <div className="py-4 py-lg-6">
              <h1 className="mb-1 text-white">{pagetitle}</h1>
              <p className="text-white mb-0 lead">{description}</p>
              <p className="text-white mb-0 lead">{briefinfo}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

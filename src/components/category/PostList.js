import React, { Fragment } from 'react'
import { Col, Row, Container, Form, Button, Nav } from 'react-bootstrap'

export const PostList = ({
  title,
  description,
  posts,
  imgUrl,
  imgAlt,
  categoryTitle,
  arrayPrincipalPost,
  arrayPost,
}) => {
  return (
    <Fragment>
      {/* Geeks SEO settings */}
      <HermenautasSEO
        title={title}
        description={description}
        imgUrl={imgUrl}
        imgAlt={imgAlt}
        posts={posts}
      />

      {/* Page header */}
      <section className="pt-9 pb-9 bg-white ">
        <Container>
          <Row>
            <Col
              lg={{ span: 10, offset: 1 }}
              xl={{ span: 8, offset: 2 }}
              md={12}
              sm={12}
            >
              <div className="text-center mb-5">
                <h1 className=" display-2 fw-bold">{categoryTitle}</h1>
                <p className="lead">
                  Our features, journey, tips and us being us. Lorem ipsum dolor
                  sit amet, accumsan in, tempor dictum neque.
                </p>
              </div>
              {/* Form SOLO PUEDE APARECER SI NO ES LA HOME*/}
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
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Content */}
      <section className="pb-8 bg-white">
        <Container>
          <Row>
            {/* Show first article in full width  */}
            {arrayPrincipalPost
              .filter(function (dataSource) {
                return dataSource.id === 1
              })
              .map((item, index) => (
                <Col xl={12} lg={12} md={12} sm={12} key={index}>
                  <BlogCardFullWidth item={item} />
                </Col>
              ))}

            {/* Show remaining articles in 3 column width  */}
            {arrayPost.slice(1, 10).map((item, index) => (
              <Col xl={4} lg={4} md={6} sm={12} key={index} className="d-flex">
                <BlogCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}

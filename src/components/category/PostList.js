// import node module libraries
import { Fragment, useEffect, useState } from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

// import widget/custom components
import { HermenautasSEO } from '../../widgets';
import { BlogCard, BlogCardFullWidth } from '../blog';

// import API functions
import { getAllPostsByCategory } from '../../pages/api/posts/getAllPostsByCategory';

export const PostList = ({
  locale,
  title,
  description,
  imgUrl,
  imgAlt,
  arrayPost,
  categoryId,
}) => {
  const [postByCategory, setPostByCategory] = useState('');
  const router = useRouter();
  const { pathname } = router;
  const arrayPostActualLang = arrayPost.filter((item) => item.name === locale);

  useEffect(() => {
    if (categoryId) {
      console.log(categoryId);
      const postByCategory = async (id) => {
        const pArrayByCategory = await getAllPostsByCategory(id);
        setPostByCategory(pArrayByCategory);
      };

      postByCategory(categoryId);
    }
  }, [categoryId]);

  return (
    <Fragment>
      {/* Geeks SEO settings */}
      <HermenautasSEO
        title={title}
        description={description}
        imgUrl={imgUrl}
        imgAlt={imgAlt}
      />
      {/* Page header */}
      {/* Form */}
      {pathname === '/' ||
      pathname === '/en' ||
      pathname === '/es' ||
      pathname === '/pt' ||
      pathname === '/fr' ? (
        <></>
      ) : (
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
                  <h1 className=" display-2 fw-bold">{title}</h1>
                  <p className="lead">{description}</p>
                </div>
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
      )}
      {/* Content */}
      <section className="pb-8 bg-white">
        <Container>
          <Row>
            {/* Show first article in full width  */}

            {arrayPostActualLang[0].children.nodes
              .filter((item) => item.name === `Principal-${locale}`)
              .map((item, index) => (
                <Col xl={12} lg={12} md={12} sm={12} key={index}>
                  <BlogCardFullWidth item={item} locale={locale} />
                </Col>
              ))}
            {console.log(postByCategory.data?.category.posts.nodes)}

            {postByCategory.data?.category.posts.nodes.map((item, index) => (
              <Col xl={4} lg={4} md={6} sm={12} key={index} className="d-flex">
                <BlogCard item={item} locale={locale} />
              </Col>
            ))}

            {/* Show remaining articles in 3 column width  */}
            {/*arrayPost.slice(1, 10).map((item, index) => (
              <Col xl={4} lg={4} md={6} sm={12} key={index} className="d-flex">
                <BlogCard item={item} />
              </Col>
            ))*/}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

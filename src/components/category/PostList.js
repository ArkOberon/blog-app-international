// import node module libraries
import { Fragment, useEffect, useState, useRef } from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import Masonry from 'react-masonry-css';

// import widget/custom components
import { BlogCard, BlogCardFullWidth } from '../blog';
import { LoaderProcess } from '../ui/loaders';

// import API functions
import { getAllPostsByCategory } from '../../pages/api/posts/getAllPostsByCategory';
import { addSubscriberToList } from '../../pages/api/email/addSubscriber';

export const PostList = ({
  locale,
  titleCategory,
  description,
  arrayPost,
  categoryId,
  listId = 4,
}) => {
  const [postByCategory, setPostByCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef(null);
  const router = useRouter();
  const t = useTranslations('NewsletterForm');
  const { pathname } = router;
  const arrayPostActualLang = arrayPost.filter((item) => item.name === locale);
  const arrayPostActualCategory = arrayPostActualLang[0].children.nodes.filter(
    (item) => item.name === titleCategory
  );

  useEffect(() => {
    if (categoryId) {
      const postByCategory = async (id) => {
        const pArrayByCategory = await getAllPostsByCategory(id);
        setPostByCategory(pArrayByCategory);
      };

      postByCategory(categoryId);
    }
  }, [categoryId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = emailRef.current.value;
    const response = await addSubscriberToList(email, listId, titleCategory);

    if (response.errors) {
      return;
    } else {
      setIsLoading(false);
    }
  };

  const filterPrincipal =
    pathname === '/' ||
    pathname === '/en' ||
    pathname === '/es' ||
    pathname === '/pt' ||
    pathname === '/fr'
      ? 'Principal'
      : 'Portada';

  const oposeCategory =
    filterPrincipal === 'Principal' ? 'Portada' : 'Principal';

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <Fragment>
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
                  <h1 className=" display-2 fw-bold">{titleCategory}</h1>
                  <p className="lead">{description}</p>
                </div>
                {isLoading ? (
                  <LoaderProcess />
                ) : (
                  <>
                    <Form className="row px-md-20" onSubmit={handleSubmit}>
                      <Form.Group
                        className="mb-3 col ps-0 ms-2 ms-md-0"
                        controlId="formBasicEmail"
                      >
                        <Form.Control
                          ref={emailRef}
                          type="email"
                          placeholder={t('placeholder')}
                          required
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3 col-auto ps-0"
                        controlId="formSubmitButton"
                      >
                        <Button variant="primary" type="submit">
                          {t('submit')}
                        </Button>
                      </Form.Group>
                    </Form>
                    <div className="text-center fs-6">{t('no_share')}</div>
                  </>
                )}
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
              .filter((item) => item.name === `${filterPrincipal}-${locale}`)
              .map((item, index) => (
                <Col xl={12} lg={12} md={12} sm={12} key={index}>
                  <BlogCardFullWidth
                    item={item}
                    locale={locale}
                    filterPrincipal={filterPrincipal}
                    oposeCategory={oposeCategory}
                    titleCategory={titleCategory}
                  />
                </Col>
              ))}
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid mt-8"
              columnClassName="my-masonry-grid_column"
            >
              {filterPrincipal === 'Portada'
                ? arrayPostActualCategory[0].posts.nodes
                    .filter(
                      (item) =>
                        !item.categories.nodes.some(
                          (category) =>
                            category.name === `${filterPrincipal}-${locale}`
                        ) &&
                        item.categories.nodes.some(
                          (category) => category.name === titleCategory
                        )
                    )
                    .map((item, idx) => (
                      <BlogCard
                        key={idx}
                        item={item}
                        locale={locale}
                        filterPrincipal={filterPrincipal}
                        oposeCategory={oposeCategory}
                        titleCategory={titleCategory}
                      />
                    ))
                : postByCategory.data?.category.posts.nodes
                    .filter(
                      (item) =>
                        !item.categories.nodes.some(
                          (category) =>
                            category.name === `${filterPrincipal}-${locale}`
                        )
                    )
                    .map((item, idx) => (
                      <BlogCard
                        key={idx}
                        item={item}
                        locale={locale}
                        filterPrincipal={filterPrincipal}
                        oposeCategory={oposeCategory}
                        titleCategory={titleCategory}
                      />
                    ))}
            </Masonry>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

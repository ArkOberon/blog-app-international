// import node module libraries
import { Fragment, useEffect, useState } from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';
import parse from 'html-react-parser';

// import widget/custom components
import { AuthorAndSharing, NewsletterForm } from '.';
import { HermenautasSEO } from '../../widgets';
import { SinglePostSkeleton } from '../ui/loaders';

// import API functions
import { getPostBySlug } from '../../pages/api/posts/getPostBySlug';

// Custom functionalities
import { decodeHtml } from '../../utils/decodeHTML';

export const Article = () => {
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
                    {locale !== 'es' ? (
                      <Link
                        href={`${process.env.NEXT_PUBLIC_HOST_URL}/${locale}/${post?.categories.nodes.filter((item) => item.name !== locale && item.name !== `Principal-${locale}` && item.name !== `Portada-${locale}`)[0].slug}`}
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
                    ) : (
                      <Link
                        href={`${process.env.NEXT_PUBLIC_HOST_URL}/${post?.categories.nodes.filter((item) => item.name !== locale && item.name !== `Principal-${locale}` && item.name !== `Portada-${locale}`)[0].slug}`}
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
                    )}

                    <h1 className="display-3 fw-bold mb-4">{post?.title}</h1>
                  </div>
                  {/* Author */}
                  <AuthorAndSharing
                    data={post?.author.node}
                    date={post.date}
                    lastComponent={false}
                  />
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
                    width={850}
                    alt={post.featuredImage.node.altText}
                    className="img-fluid rounded-3"
                  />
                  <p className="fs-6 mt-3">{post.featuredImage.node.title}</p>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xl={8} lg={8} md={12} sm={12} className="mb-2">
                  {/* Blog Content */}
                  <div>{parse(decodeHtml(post.content))}</div>
                  <hr className="mt-8 mb-5" />
                  {/* Author */}
                  <AuthorAndSharing
                    data={post?.author.node}
                    date={post.date}
                    lastComponent={true}
                  />
                  {/* Subscribe to Newsletter */}
                  <NewsletterForm
                    categoryName={`${post?.categories.nodes.filter((item) => item.name !== locale && item.name !== `Principal-${locale}` && item.name !== `Portada-${locale}`)[0].name}`}
                  />
                </Col>
              </Row>
            </Fragment>
          </Container>
        </section>
      )}
    </Fragment>
  );
};

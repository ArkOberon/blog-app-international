// import node module libraries
import { Fragment, useEffect, useState } from 'react';
import { Col, Row, Container, Image, Card } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';
import parse from 'html-react-parser';
import { NextSeo } from 'next-seo';

// import widget/custom components
import { AuthorAndSharing, NewsletterForm } from '.';
/* import { HermenautasSEO } from '../../widgets'; */
import { SinglePostSkeleton } from '../ui/loaders';
import { VideoYouTube } from '../blog';

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

  // SEO data
  const pageURL = process.env.NEXT_PUBLIC_HOST_URL + router.asPath;

  return (
    <Fragment>
      {isLoading ? (
        <SinglePostSkeleton />
      ) : post.tags.nodes[0]?.name === 'video' ? (
        <section className="py-lg-5 py-5">
          <Container>
            {/*  Video section  */}
            <Row>
              <Col lg={12} md={12} sm={12} className="mb-5">
                {!post.texto.idYoutube ? (
                  parse(decodeHtml(post.texto.iframeCode))
                ) : (
                  <div
                    className="rounded-3 position-relative w-100 d-block overflow-hidden p-0"
                    style={{ height: '600px' }}
                  >
                    <VideoYouTube videoId={post.texto.idYoutube} height="600" />
                  </div>
                )}
              </Col>
            </Row>
            {/*  Content  */}
            <Row>
              <Col xl={8} lg={12} md={12} sm={12} className="mb-4 mb-xl-0">
                <div className="d-flex justify-content-between align-items-center">
                  <h1 className="fw-semi-bold mb-2">{post.title}</h1>
                </div>
                <div className="mt-5">{parse(decodeHtml(post.content))}</div>
              </Col>
              <Col xl={4} lg={12} md={12} sm={12}>
                <Card>
                  <Image
                    src={post.featuredImage.node.link}
                    alt={post.featuredImage.node.altText}
                    className="rounded-3"
                  />
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      ) : (
        <section className="py-4 py-lg-8 pb-14 bg-white ">
          <Container>
            <Fragment>
              {/* Hermenautas SEO settings  */}
              {/* <HermenautasSEO
                title={post?.title}
                description={post?.excerpt}
                imgUrl={post?.featuredImage.node.link}
                imgAlt={post?.featuredImage.node.altText}
                typePage={typePage}
              /> */}
              <NextSeo
                title={post?.title}
                description={
                  parse(decodeHtml(post?.excerpt))[0].props?.children
                }
                canonical={pageURL}
                openGraph={{
                  url: pageURL,
                  title: post?.title,
                  description: parse(decodeHtml(post?.excerpt))[0].props
                    ?.children,
                  site_name: process.env.NEXT_PUBLIC_SITE_NAME,
                  images: [
                    {
                      url: post?.featuredImage.node.link,
                      width: 1200,
                      height: 630,
                      alt: post?.featuredImage.node.altText,
                    },
                  ],
                }}
                twitter={{
                  handle: '@hermenautasTM',
                  cardType: 'summary_large_image',
                }}
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

                    <h1 className="fw-bold mb-4">{post?.title}</h1>
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
                {/* Image or Video*/}
                <Col
                  xl={10}
                  lg={10}
                  md={12}
                  sm={12}
                  className="mb-6 text-center"
                >
                  {post.tags.nodes[0]?.name === 'vlog' ? (
                    <></>
                  ) : (
                    <>
                      <Image
                        src={post.featuredImage.node.link}
                        width={850}
                        alt={post.featuredImage.node.altText}
                        className="img-fluid rounded-3"
                      />
                      <p className="fs-6 mt-3">
                        {post.featuredImage.node.title}
                      </p>
                    </>
                  )}
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

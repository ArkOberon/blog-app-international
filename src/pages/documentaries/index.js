// import node module libraries
import { Fragment, useEffect, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

// import widget/custom components
import { PageHeadingBriefinfo } from '../../components/ui';
import { PostListSkeleton } from '../../components/ui/loaders';

// import sub components
import { DocumentaryCard } from '../../components/blog';

// import API functions
import { getAllPosts } from '../api/posts/getAllPosts';

const Documentaries = () => {
  const t = useTranslations('Documentaries');
  const [isLoading, setIsLoading] = useState(true);
  const [arrayPost, setArrayPost] = useState({
    data: {
      categories: {
        nodes: [],
      },
    },
  });
  const router = useRouter();
  const { locale, asPath } = router;

  const arrayPostActualLang = arrayPost.data.categories.nodes.filter(
    (item) => item.name === locale
  );
  const arrayPostActualCategory = arrayPostActualLang[0]?.children.nodes.filter(
    (item) => item.name === 'Documentales' || item.name === 'Documentaries'
  );

  useEffect(() => {
    const postArray = async () => {
      const pArray = await getAllPosts();
      setArrayPost(pArray);

      setIsLoading(false);
    };

    postArray();
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <PostListSkeleton />
      ) : (
        <>
          {/* Page header */}
          <PageHeadingBriefinfo
            pagetitle={t('title_category')}
            description={t('description')}
          />

          <section className="py-6">
            <Container>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <div className="mb-5">
                    <h2 className="mb-1">{t('subtitle_h2')}</h2>
                    <p className="mb-0">{t('text_body')}</p>
                  </div>
                </Col>
              </Row>
              <Row className="mb-6">
                {arrayPostActualCategory[0].posts.nodes
                  .filter((item) =>
                    item.categories.nodes.some(
                      (category) => category.name === `${t('title_category')}`
                    )
                  )
                  .map((item, idx) => (
                    <Col lg={3} md={6} sm={12} key={idx}>
                      <DocumentaryCard item={item} url={asPath} />
                    </Col>
                  ))}
              </Row>
            </Container>
          </section>
        </>
      )}
    </Fragment>
  );
};

export default Documentaries;

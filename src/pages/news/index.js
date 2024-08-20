// import node module libraries
import { Fragment, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

// import widget/custom components
import { PostList } from '../../components/category';
import { PostListSkeleton } from '../../components/ui/loaders/PostListSkeleton';

// import API functions
import { getAllPosts } from '../api/posts/getAllPosts';

export async function getServerSideProps() {
  const postArray = await getAllPosts();

  if (!postArray) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      postArray,
    },
  };
}

const News = ({ postArray }) => {
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations('News');
  const router = useRouter();
  const { locale } = router;
  const category = postArray.data.categories?.nodes.filter(
    (item) => item.name === locale
  );

  useEffect(() => {
    if (postArray) {
      setIsLoading(false);
    }
  }, []);

  // SEO Info
  const title = t('title');
  const titleCategory = t('title_category');
  const description = t('description');
  const imgUrl = `/images/og/og-actualidad-${locale}.jpg`;
  const imgAlt = t('img_alt_home');
  const pageURL = process.env.NEXT_PUBLIC_HOST_URL + router.asPath;

  return (
    <>
      {/* Hermenautas SEO settings */}
      <NextSeo
        title={title}
        description={description}
        canonical={pageURL}
        openGraph={{
          url: pageURL,
          title: title,
          description: description,
          site_name: process.env.NEXT_PUBLIC_SITE_NAME,
          images: [
            {
              url: imgUrl,
              width: 1200,
              height: 630,
              alt: imgAlt,
            },
          ],
        }}
        twitter={{
          handle: '@hermenautasTM',
          cardType: 'summary_large_image',
        }}
      />

      <Fragment>
        {isLoading ? (
          <PostListSkeleton />
        ) : (
          <PostList
            locale={locale}
            titleCategory={titleCategory}
            description={description}
            arrayPost={postArray.data.categories.nodes}
            categoryId={category[0].id}
          />
        )}
      </Fragment>
    </>
  );
};

export default News;

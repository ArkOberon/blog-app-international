// import node module libraries
import { Fragment, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

// import widget/custom components
import { PostList } from '../components/category';
import { PostListSkeleton } from '../components/ui/loaders';

// import API functions
import { getAllPosts } from './api/posts/getAllPosts';

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

const Home = ({ postArray }) => {
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations('Home');
  const router = useRouter();
  const { locale } = router;
  const category = postArray.data.categories?.nodes.filter(
    (item) => item.name === locale
  );

  // SEO Info
  const title = t('title');
  const titleCategory = t('title_category');
  const description = t('description');
  const imgUrl = `/images/og/${locale}/og-hermenautas.jpg`;
  const imgAlt = t('img_alt_home');

  useEffect(() => {
    if (postArray) {
      setIsLoading(false);
    }
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <PostListSkeleton />
      ) : (
        <PostList
          locale={locale}
          title={title}
          titleCategory={titleCategory}
          description={description}
          imgUrl={imgUrl}
          imgAlt={imgAlt}
          arrayPost={postArray.data.categories.nodes}
          categoryId={category[0].id}
        />
      )}
    </Fragment>
  );
};

export default Home;

// import node module libraries
import { Fragment, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

// import widget/custom components
import { PostList } from '../../components/category';
import { PostListSkeleton } from '../../components/ui/loaders/PostListSkeleton';

// import API functions
import { getAllPosts } from '../api/posts/getAllPosts';

const Industry = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [arrayPost, setArrayPost] = useState({
    data: {
      posts: {
        nodes: [],
      },
    },
  });

  const t = useTranslations('Industry');
  const router = useRouter();
  const { locale } = router;
  const category = arrayPost.data.categories?.nodes.filter(
    (item) => item.name === locale
  );

  useEffect(() => {
    const postArray = async () => {
      const pArray = await getAllPosts();
      setArrayPost(pArray);

      setIsLoading(false);
    };

    postArray();
  }, []);

  // SEO Info
  const title = t('title');
  const titleCategory = t('title_category');
  const description = t('description');
  const imgUrl = `/images/og/${locale}/og-hermenautas.jpg`;
  const imgAlt = t('img_alt_home');

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
          arrayPost={arrayPost.data.categories.nodes}
          categoryId={category[0].id}
        />
      )}
    </Fragment>
  );
};

export default Industry;

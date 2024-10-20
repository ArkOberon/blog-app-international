// import node module libraries
import { Fragment, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

// import widget/custom components
import { PostList } from '../components/category';
import { PostListSkeleton } from '../components/ui/loaders';

// import API functions
import { getAllPosts } from './api/posts/getAllPosts';

type SetStateAction = {
  data: {
    categories: {
      nodes: never[];
    };
  };
};

type PrincipalCategory = {
  name: string;
  slug: string;
};

type Tag = {
  name: string;
};

type PrincipalPost = {
  title: string;
  author: {
    node: {
      avatar: {
        url: string;
      };
      firstName: string;
      lastName: string;
    };
  };
  categories: {
    nodes: [PrincipalCategory];
  };
  date: string;
  slug: string;
  featuredImage: {
    node: {
      link: string;
    };
  };
  tags: {
    nodes: [Tag];
  };
};

type ArrayPostActualLang = {
  name: string;
  children: {
    nodes: [
      item: {
        name?: string | undefined;
        posts: {
          nodes: [PrincipalPost];
        };
      },
    ];
  };
};

type PostArray = {
  data: {
    categories: {
      nodes: [ArrayPostActualLang];
    };
  };
};

type HomeProps = {
  postArray: PostArray;
};

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

const Home = ({ postArray }: HomeProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [arrayPost, setArrayPost] = useState({
    data: {
      categories: {
        nodes: [
          {
            name: '',
            id: '',
          },
        ],
      },
    },
  });

  const t = useTranslations('Home');
  const router = useRouter();
  const { locale } = router;
  const category = arrayPost.data.categories?.nodes.filter(
    (item) => item.name === locale
  );

  // SEO Info
  const title = t('title');
  const titleCategory = t('title_category');
  const description = t('description');
  const imgUrl = `/images/og/${locale}/og-hermenautas.jpg`;
  const imgAlt = t('img_alt_home');
  const pageURL = process.env.NEXT_PUBLIC_HOST_URL + router.asPath;

  useEffect(() => {
    const postArray = async () => {
      const pArray = (await getAllPosts()) as SetStateAction;
      setArrayPost(pArray);

      setIsLoading(false);
    };

    postArray();
  }, []);

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
            listId={4}
          />
        )}
      </Fragment>
    </>
  );
};

export default Home;

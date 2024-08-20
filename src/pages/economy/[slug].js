import { Article } from '../../components/blog';
import { getPostBySlug } from '../api/posts/getPostBySlug';

export async function getServerSideProps({ params }) {
  const actualPost = await getPostBySlug(params.slug);

  if (!actualPost) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      actualPost,
    },
  };
}

const SinglePost = ({ actualPost }) => {
  return <Article actualPost={actualPost} />;
};

export default SinglePost;

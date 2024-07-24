// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import { Col, Row, Container, Image, Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';

// import sub components
import { BlogCard } from '../../components/blog/BlogCard';

// import widget/custom components
import { HermenautasSEO } from '../../widgets';

// import API functions
import { getPostBySlug } from '../api/posts/getPostBySlug';

const Article = () => {
  const [article, setArticle] = useState({});

  const router = useRouter();
  const slug = router.query.slug;
  console.log(slug);

  useEffect(() => {
    const post = async (slug) => {
      const actualPost = await getPostBySlug(slug);
      setArticle(actualPost);
    };

    post(slug);
  }, [slug]);

  console.log(article);

  return (
    <Fragment>
      <p>todo cargadito</p>
    </Fragment>
  );
};

export default Article;

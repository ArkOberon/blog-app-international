// import node module libraries
import React, { Fragment } from 'react';
import { Col, Row, Container, Form, Button, Nav } from 'react-bootstrap';
import Link from 'next/link';

// import sub components
import { BlogCard, BlogCardFullWidth } from '../components/blog';

// import widget/custom components
import { HermenautasSEO } from '../widgets';

// import data files
import BlogArticlesList from '../data/blog/blogArticlesData';

// import API functions
import { getAllPosts } from './api/posts/getAllPosts';

const Economy = () => {
  getAllPosts().then((data) => { console.log(data) })
	return (
		<Fragment>
			{/* Geeks SEO settings  */}
			<HermenautasSEO title="Blog | Geeks Nextjs Template" />     

      {/* Content */}
      <section className="pb-8 bg-white">
        <Container >
          <Row>
            {/* Show first article in full width  */}
            {BlogArticlesList.filter(function (dataSource) {
              return dataSource.id === 1;
            }).map((item, index) => (
              <Col xl={12} lg={12} md={12} sm={12} key={index}>
                <BlogCardFullWidth item={item} />
              </Col>
            ))}

            {/* Show remaining articles in 3 column width  */}
            {BlogArticlesList.slice(1, 10).map((item, index) => (
              <Col xl={4} lg={4} md={6} sm={12} key={index} className="d-flex">
                <BlogCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
		</Fragment>
	);
};

export default Economy;

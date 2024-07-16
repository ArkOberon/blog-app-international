// import node module libraries
import React, { Fragment } from 'react'
import { Col, Row, Container } from 'react-bootstrap'

// import sub components
import { BlogCard, BlogCardFullWidth } from '../components/blog'

// import widget/custom components
import { HermenautasSEO } from '../widgets'
import { PostList } from '../components/category'

// import data files
import BlogArticlesList from '../data/blog/blogArticlesData'

// import API functions
import { getAllPosts } from './api/posts/getAllPosts'

const Economy = () => {
  getAllPosts().then((data) => {
    console.log(data)
  })
  return (
    <Fragment>  

      {/* <PostList /> */}
    
    </Fragment>
  )
}

export default Economy

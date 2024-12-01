import React from 'react'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import RecentBlogList from '../components/RecentBlogList'

const Blog = () => {
  return (
    <div cy-data="blog">
    <Header />
    <RecentBlogList />
    <BlogList />
    </div>
  )
}

export default Blog
import React, { useEffect } from 'react'
import Blogs from '../../components/blogCard/Blogs'
import BlogBan from '../../components/otherBanners/BlogBan'

const Blog = () => {

  useEffect(() => {window.scrollTo(0,0)}, [])

  return (
    <>
      <BlogBan />
      <Blogs />
    </>
  )
}

export default Blog
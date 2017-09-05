import React from 'react';
import { blogData } from '../../data/blog';
import BlogPost from './blog_post';

const Blog = (props) => {
  return (
    <div>
      {
        blogData.map((post, index) => {
          return <BlogPost key={index} post={post} />
        })
      }
    </div>
  )
}

export default Blog;

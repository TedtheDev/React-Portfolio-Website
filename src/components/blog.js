import React from 'react';
import styled from 'styled-components';

import { blogData } from '../../data/blog';
import BlogPost from './blog_post';

const BlogDiv = styled.div`
    height: 100%;
    width: 100%;
`;

const Blog = (props) => {
  return (
    <BlogDiv>
      {
        blogData.map((post, index) => {
          return <BlogPost key={index} post={post} />
        })
      }
    </BlogDiv>
  )
}

export default Blog;

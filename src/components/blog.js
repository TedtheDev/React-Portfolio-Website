import React from 'react';
import styled from 'styled-components';

import { blogData } from '../../data/blog';
import BlogPost from './blog_post';

const BlogDiv = styled.div`
    grid-area: content;
    height: 100%;
    width: 100%;
`;

const BlogScrollDiv = styled.div`
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
`;

const Blog = (props) => {
  return (
    <BlogDiv>
      <BlogScrollDiv>
        {
          blogData.map((post, index) => {
            return <BlogPost key={index} post={post} />
          })
        }
      </BlogScrollDiv>
    </BlogDiv>
  )
}

export default Blog;

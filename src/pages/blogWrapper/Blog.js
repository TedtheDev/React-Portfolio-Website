import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { blogData } from '../../../data/blog';
import BlogPost from './blog/BlogPost';

const BlogDiv = styled.div`
    height: 100%;
    width: 100%;
`;

const BlogScrollDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-row-gap: 2%;
    align-content: start;
`;

const Blog = (props) => {
  return (
    <BlogDiv>
      <BlogScrollDiv>
        {
          blogData.map((blog, index) => {
              return <BlogPost key={index} post={blog} />
          })
        }
      </BlogScrollDiv>
    </BlogDiv>
  )
};

export default Blog;

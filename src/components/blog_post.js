import React from 'react';
import styled from 'styled-components';

const BlogPostWrapper = styled.div`

`;

const BlogPost = (props) => {
  return (
    <BlogPostWrapper>
      {props.post.title}
      {props.post.date}
      {props.post.content}
      --------------------
    </BlogPostWrapper>
  )
};

export default BlogPost;

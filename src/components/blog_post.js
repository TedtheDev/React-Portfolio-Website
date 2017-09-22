import React from 'react';
import styled from 'styled-components';

const BlogPostDiv = styled.div`
  margin: 2% 0;
`;

const BlogPost = (props) => {
  return (
    <BlogPostDiv>
      <div>
        <div>{props.post.title}</div>
        <div>{props.post.date}</div>
      </div>
      <div>{props.post.content}</div>
    </BlogPostDiv>
  )
};

export default BlogPost;

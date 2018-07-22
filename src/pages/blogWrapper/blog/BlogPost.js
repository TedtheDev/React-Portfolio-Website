import React from 'react';
import styled from 'styled-components';

const BlogPostDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: auto auto;
  grid-template-areas:
    "title date"
    "content content";
  height: 100%;
  width: 100%;
`;

const Title = styled.div`
    grid-area: title;
    font-size: 1.5rem;
    justify-self: start;
    align-self: center;
    &::after {
      display: block;
      position: relative;
      content: "";
      width: 100%;
      height: 2px;
      background: #6CCFF6;
      
    }
`;

const BlogPost = (props) => {
  return (
    <BlogPostDiv>
      <Title>{props.post.title}</Title>
      <div style={{gridArea:"date",fontSize:"1.1rem",justifySelf:"center",alignSelf:"center"}}>{props.post.date}</div>
      <div style={{gridArea:"content"}}>{props.post.content}</div>
    </BlogPostDiv>
  )
};

export default BlogPost;

import React from 'react';
import styled from 'styled-components';

const BlogPostDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: .15fr 1fr;
  grid-row-gap: 4%;
  grid-template-areas:
    "title date"
    "content content";
`;

const BlogPost = (props) => {
  return (
    <BlogPostDiv>
      <div style={{gridArea:"title",fontSize:"1.5rem",justifySelf:"start",alignSelf:"center"}}>{props.post.title}</div>
      <div style={{gridArea:"date",fontSize:"1.1rem",justifySelf:"center",alignSelf:"center"}}>{props.post.date}</div>
      <div style={{gridArea:"content"}}>{props.post.content}</div>
    </BlogPostDiv>
  )
};

export default BlogPost;

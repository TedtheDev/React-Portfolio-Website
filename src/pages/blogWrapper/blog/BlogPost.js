import React from 'react';
import styled from 'styled-components';

const BlogPostDiv = styled.div`
  display: grid;
  background-color: rgba(255, 243, 176, .8);
  color: ${props => props.theme.first.blue};
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: auto auto;
  border-radius: 10px;
  padding: 3%;
  grid-template-areas:
    "title date"
    "content content";

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.div`
    grid-area: title;
    font-size: 1.5rem;
    justify-self: start;
    align-self: center;
`;

const DateDiv = styled.div`
  grid-area: date;
  font-size: 1.1rem;
  justify-self: end;
  align-self: center;
`;

const ContentDiv = styled.div`
  grid-area: content;
  border-top: 2px solid ${props => props.theme.first.blue};
  margin-top: 1%;
`;

const BlogPost = (props) => {
  return (
    <BlogPostDiv>
      <Title>{props.post.title}</Title>
      <DateDiv>{props.post.date}</DateDiv>
      <ContentDiv>{props.post.content}</ContentDiv>
    </BlogPostDiv>
  )
};

export default BlogPost;

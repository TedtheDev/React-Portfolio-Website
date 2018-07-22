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

const PagesNavDiv = styled.div`
  display: grid;
  grid-template: 1fr / repeat(${Math.ceil(blogData.length / 2)}, minmax(15px, 5%));
  justify-items: center;
  grid-column-gap: 2%;
  margin: 2% 0;
`;

const PageNumberDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  background: #6ccff6;
  border: 2px #000c11 solid;
  border-radius: 5px;
  box-shadow: 4px 5px 0px rgb(116, 124, 127);
  color: #000c11;
  cursor: pointer;
  min-width: 1.2rem;
`;

const mapPages = (props) => {
  const pages = [];

  for(let i = 0; i < Math.ceil(blogData.length / 2); i++) {
    pages.push(<PageNumberDiv key={i} onClick={() => props.changeBlogPosts(i)}><div>{i + 1}</div></PageNumberDiv>);
  }
  return pages;
};

const Blog = (props) => {
  return (
    <BlogDiv>
      <PagesNavDiv>{mapPages(props)}</PagesNavDiv>
      <BlogScrollDiv>
        {
          props.blogPostsToShow.map((number, index) => {
            if(blogData[number] !== undefined) {
              return <BlogPost key={index} post={blogData[number]} />
            }
          })
        }
      </BlogScrollDiv>
    </BlogDiv>
  )
};

React.propTypes = {
  pageSelected: PropTypes.number.isRequired,
  blogPostsToShow: PropTypes.array.isRequired,
  changeBlogPosts: PropTypes.func.isRequired
}

export default Blog;

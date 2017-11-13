import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { blogData } from '../../data/blog';
import BlogPost from './blog_post';

const BlogDiv = styled.div`
    height: 100%;
    width: 100%;
`;

const BlogScrollDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-row-gap: 5%;
`;

const PagesNavDiv = styled.div`
  display: grid;
  grid-template: 1fr / repeat(${Math.ceil(blogData.length / 2)}, 3%);
  justify-items: center;
  grid-column-gap: 2%;
  margin-top: 2%;
`;

const PageNumberDiv = styled.div`
  background: #6ccff6;
  padding: .5rem;
  border: 2px #000c11 solid;
  color: #000c11;
  cursor: pointer;
`;

const mapPages = (props) => {
  const pages = [];

  for(let i = 0; i < Math.ceil(blogData.length / 2); i++) {
    pages.push(<PageNumberDiv key={i} onClick={() => props.changeBlogPosts(i)}>{i + 1}</PageNumberDiv>);
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

import React, { Component } from 'react';
import styled from 'styled-components';

import Blog from './blogWrapper/Blog';

const BlogWrapperDiv = styled.section`
    grid-area: app;
    width: 100%;
    height: 100%;
`;

class BlogWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {pageSelected: 0, blogPostsToShow: [0,1]};

        this.changeBlogPosts = this.changeBlogPosts.bind(this);
    }

    changeBlogPosts(page) {
        this.setState({pageSelected: page});
        // logic to handle blog posts with page selected
        const array = [page * 2, page * 2 + 1]
        this.setState({blogPostsToShow: array});
    }

    render() {
        return (
            <BlogWrapperDiv>
                <Blog 
                    changeBlogPosts={this.changeBlogPosts} 
                    pageSelected={this.state.pageSelected} 
                    blogPostsToShow={this.state.blogPostsToShow}
                />
            </BlogWrapperDiv>
        )
    }
};

export default BlogWrapper;
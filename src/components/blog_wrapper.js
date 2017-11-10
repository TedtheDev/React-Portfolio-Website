import React, { Component } from 'react';

import Blog from './blog';

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
            <Blog 
                changeBlogPosts={this.changeBlogPosts} 
                pageSelected={this.state.pageSelected} 
                blogPostsToShow={this.state.blogPostsToShow}
            />
        )
    }
};

export default BlogWrapper;
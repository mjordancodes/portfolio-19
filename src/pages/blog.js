import React, { Component } from 'react';

import Layout from '../components/layout';
import Header from '../components/Header/header';

class BlogPage extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <h1>Blog</h1>
      </Layout>
    );
  }
}


export default BlogPage

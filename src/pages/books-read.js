import React, { Component } from 'react';

import Layout from '../components/layout';
import Header from '../components/Header/header';

class BooksPage extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <h1>Books Read</h1>
      </Layout>
    );
  }
}


export default BooksPage

import React, { Component } from 'react';

import Layout from '../components/layout';
import Header from '../components/Header/header';

class NowPage extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <h1>Now</h1>
      </Layout>
    );
  }
}


export default NowPage

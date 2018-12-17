import React, { Component } from 'react';

import Layout from '../components/layout';
import Header from '../components/Header/header';

class StickersPage extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <h1>Stickers</h1>
        <p>Check back soon! I'm creating and ordering some fancy custom rubber duck stickers</p>
      </Layout>
    );
  }
}


export default StickersPage

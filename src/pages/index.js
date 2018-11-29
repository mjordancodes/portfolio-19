import React, { Component } from 'react';

import Layout from '../components/layout';
import DeskLanding from '../components/Landing-Desk/landing-desk';

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <DeskLanding />
      </Layout>
    );
  }
}


export default IndexPage

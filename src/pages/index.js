import React, { Component } from 'react';

// import Layout from '../components/layout';
import HomeHeader from '../components/Header/home-header';
import DeskLanding from '../components/Landing-Desk/landing-desk';

import '../styles/globals.css'

class IndexPage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <DeskLanding />
      </div>
    );
  }
}


export default IndexPage

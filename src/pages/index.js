import React, { Component } from 'react'
import { TimelineMax,  } from 'gsap/all'; 

import Layout from '../components/layout'
import BackgroundImage from '../images/home-background.svg'

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <h1 id="title">Hi people</h1>
        <BackgroundImage />
      </Layout>
    );
  }

  componentDidMount() {

    const windowOutline = document.getElementById('window-outline');
    const colorChange = new TimelineMax();
    // console.log('windowOutline', windowOutline)
    colorChange.to(windowOutline, 2, {opacity: 0});
  }

}


export default IndexPage


// let lightRed      = '#f9dcdc',
//         lightOrange   = '#ffeede',
//         lightYellow   = '#f7f6e2',
//         lightGreen    = '#e1f9e4',
//         lightBlue     = '#d2e9f9',
//         lightPurple   = '#f5e3fc'
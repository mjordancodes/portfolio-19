import React, { Component } from 'react';

import componentStyles from './about.module.css';

import Layout from '../components/layout';
import Header from '../components/Header/header';
import SimpleText from '../components/Simple-Text/simple-text';

import AboutMe from '../images/about-me.svg';
// import WWCode from './images/Group-Logos/wwcode.png';
// import PDXNode from '../images/Group-Logos/pdxnode.png';
// import Toastmasters from '../images/Group-Logos/toastmasters.png';


class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <div className={componentStyles.about}>
          <div className={componentStyles.meImage}>
            <AboutMe />
          </div>
          <SimpleText title="Hello World" className={componentStyles.hello}>
            <p>
              I’m Jordan, a creative front end developer currently teaching as lead instructor at Alchemy Code Lab in Portland, Oregon. Nothing excites me more than immersing myself in a good challenge or a great book. For me, coding is the perfect mix of logical problem solving, and creative artistic expression. When not coding, I am spending my time creating something new, getting involved in the local tech community, or exploring the world around me with my trusty Nikon camera.
            </p>
          </SimpleText>
          <SimpleText title="Community Involvement" className={componentStyles.community}>
            <p>
              During summer of 2015 I attended my first tech event: an event put on by Women Who Code Portland that introduced me to the wonderful world of meetups. Since then, I have continued attending numerous different meetups where I learnt a lot, met some amazing humans, and grew well out of my comfort zone.
            </p>
            <p>
              Today, I volunteer as part of the Leadership Teams for PDXNode and Women Who Code Portland. I also mentor periodically at other local meetups such as Free Code Camp Portland and Mentorship Saturdays. 
            </p>
          </SimpleText>
          <div className={componentStyles.groupImages}>
            <img src="/images/Group-Logos/wwcode.png" alt="pdx node logo"/>
            <img src="/images/Group-Logos/pdxnode.png" alt="women who code logo"/>
            <img src="/images/Group-Logos/toastmasters.png" alt="toastmasters logo"/>
          </div>
          <SimpleText title="Women Who Code: Portland" className={componentStyles.group}>
            <p>
              During the second half of 2016 I moved from an occasional volunteer to a full member of the leadership team. In the beginning, I mostly helped out with monthly networking nights. I was even able to take lead and plan one myself. in 2018, I stepped up into a more regular role as the co-lead for the new monthly Open Soruce Study Nights. As co-lead for a study night, I schedule speakers, prepare my own content to teach, and generally answer questions for people who attend the events. 
            </p>
          </SimpleText>
        </div>
      </Layout>
    );
  }
}


export default AboutPage

import React, { Component } from 'react';
import { Link } from "gatsby";


import componentStyles from './about.module.css';

import Layout from '../components/layout';
import SimpleText from '../components/Simple-Text/simple-text';

import AboutMe from '../images/dev.svg';

// const { TimelineMax } = require('gsap/all');

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className={componentStyles.about}>
          <div className={componentStyles.meImage}>
            <AboutMe />
          </div>
          <SimpleText title="Hello World" className={componentStyles.hello}>
            <p>
              I’m Jordan, a creative front end developer in Portland, Oregon. Nothing excites me more than immersing myself in a good challenge or a great book. For me, coding is the perfect mix of logical problem solving, and creative artistic expression. When not coding, I am spending my time creating something new, getting involved in the local tech community, or exploring the world around me with my trusty Nikon camera.
            </p>
            <p>I have spent a lot of time freelancing and doing contract work, but I am really hoping to find a long-term job that I can really dig in on. This job would include an awesome team that I can learn from and and teach things to as I grow as a developer. I am looking for a role that allows me to flex my creativity muscles, while I work on solving challenging problems with code. Check out my <Link to="/resume">resume</Link>, and send me a message if you think I might be a good fit for your team.</p>
          </SimpleText>
          <SimpleText title="Community Involvement" className={componentStyles.community}>
            <p>
              During summer of 2015 I attended my first tech event: an event put on by Women Who Code Portland that introduced me to the wonderful world of meetups. Since then, I have continued attending numerous different meetups where I learnt a lot, met some amazing humans, and grew well out of my comfort zone.
            </p>
            <p>
              Today, I volunteer as part of the Leadership Teams for PDXNode and Women Who Code Portland. I also mentor periodically at other local meetups such as Free Code Camp Portland and Mentorship Saturdays. 
            </p>
          </SimpleText>
          <img src="/images/Group-Logos/wwcode.png" alt="Women Who Code logo" id="group-wwcode" className={componentStyles.wwcodeImg}/>
          <img src="/images/Group-Logos/pdxnode.png" alt="PDXNode logo" id="group-pdxnode" className={componentStyles.pdxnodeImg}/>
          <img src="/images/Group-Logos/toastmasters.png" alt="toastmasters logo" id="group-toastmasters" className={componentStyles.toastmastersImg}/>
          <SimpleText title="Women Who Code: Portland" className={componentStyles.wwcode}>
            <p>
              During the second half of 2016 I moved from an occasional volunteer to a full member of the leadership team. In the beginning, I mostly helped out with monthly networking nights. I was even able to take lead and plan one myself. in 2018, I stepped up into a more regular role as the co-lead for the new monthly Open Soruce Study Nights. As co-lead for a study night, I schedule speakers, prepare my own content to teach, and generally answer questions for people who attend the events. 
            </p>
          </SimpleText>
          <SimpleText title="PDXNode" className={componentStyles.pdxnode}>
          <p>
            I started volunteering with PDXNode in early 2017. We have two regular events every month: presentation nights and hack nighs. My role with this group includes securing sponsorship, updating meetup.com and twitter, finding and scheduling speakers, developing workshops, and occasionally acting as announcer at the events themselves.
          </p>
          <p>
            During summer of 2018, I acted as lead organizer and hosted a special edition of the presntation night as part of OSCON (Open Source Conference put on by O'Reilly) and an International Nodebots Day workshop
          </p>
          </SimpleText>
          <SimpleText title="Toastmasters" className={componentStyles.toastmasters}>
          <p>
            I joined ToastMasters in February of 2018, and completed my first four speeches within the first six months. I was elected VP of Education for the West Beaverton ToastMasters club. Unfortunatly, I won't be able to serve at this time due to taking a new job that is requiring me to find a different club to join. Hopefully I will have another opportunity to fill an officer role down the line. In the mean time, I will continue to attend weekly club meetings (once I find a new club) and participate in every meeting.
          </p>
          </SimpleText>
        </div>
      </Layout>
    );
  }
}


export default AboutPage

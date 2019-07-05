import React, { Component } from 'react';
import { Link } from "gatsby";


import componentStyles from './about.module.css';

import Layout from '../components/layout';
import SimpleText from '../components/Simple-Text/simple-text';
import SimpleTextImage from '../components/Simple-Text/simple-text-image';

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
              I'm Jordan Brady, a creative front end developer, mentor, and community leader working with groups like <a href="https://www.womenwhocode.com/portland" target="_blank" rel="noopener noreferrer">Women Who Code Portland</a> and <a href="http://pdxnode.org/">PDXNode</a>. I founded a group called <Link to="https://portfoliopuppies.dev">Puppies and Portfolios</Link> to help new developers build an awesome online presence. I have a great passion for everything CSS and rubber duck debugging. I enjoy <Link to="/speaking">speaking</Link> at meetups and conferences to share the things I know.
            </p>
            <p>
              When not coding, I can be found ... 
            </p>
            <ul>
              <li>Going on adventures with <a href="https://www.instagram.com/cubandpebbles/" target="_blank" rel="noopener noreferrer">my puppies</a>.</li>
              <li>Exploring the world around me and  <a href="https://threewoodenpigeoons.com" target="_blank" rel="noopener noreferrer">taking pictures</a> on my favorite Nikon camera. </li>
              <li>Immersing myself in a good challenge or a <Link to="/books-read/">great book</Link>.</li>
              <li>Getting involved in my community or mentoring a new developer.</li>
            </ul>
          </SimpleText>
          <br />
          <SimpleText title="Community Involvement" className={componentStyles.community}>
            <p>
              During summer of 2015 I attended my first tech event: a networking night put on by Women Who Code Portland that introduced me to the wonderful world of meetups. Since then, I have attended numerous different meetups where I learnt a lot, met some amazing humans, and grew well out of my comfort zone. I've even started speak at and organizing my own events.
            </p>
          </SimpleText>
        </div>
        <section className={componentStyles.commGrid}>
          <SimpleTextImage
            title="Puppies and Portfolios"
            image="/images/Group-Logos/puppiesandportfolios.png"
          >
            <ul>
              <li>Founded in early 2019 to create a space for people create <strong>awesome</strong> portfolio websites.</li>
              <li>Lead discussions and answer questions about <strong>design, content</strong>, and <strong>code</strong>.</li>
              <li>Bring along my puppies for play breaks (weather permitting)</li>
            </ul>
            <p>You can find out more about this group...</p>
            <ul>
              <li>On our <a href="https://portfoliopuppies.dev/">website</a></li>
              <li>By checking out our next event on <a href="https://www.meetup.com/Puppies-and-Portfolios/" target="_blank" rel="noopener noreferrer">meetup.com</a></li>
              <li>By joining the conversation on <a href="http://bit.ly/pupsandports" target="_blank" rel="noopener noreferrer">slack</a>.</li>
            </ul>
          </SimpleTextImage>
          <SimpleTextImage
            title="Women Who Code Portland"
            image="/images/Group-Logos/wwcode.png"
          >
            <ul>
              <li>Joined the Leadership team in 2016 after having volunteered at several previous events.</li>
              <li>Assist with organization for workshops and networking nights.</li>
              <li>Co-Lead for study nights
                <ul>
                  <li>2018: Open Source Study Nights</li>
                  <li>2019: CSS Study Nights</li>
                  <li>Schedule speakers, prepare content to teach, and answer related tech questions.</li>
                </ul>
              </li>
            </ul>
          </SimpleTextImage>
          <SimpleTextImage
            title="PDX Node"
            image="/images/Group-Logos/pdxnode.png"
          >
            <ul>
              <li>Joined as an organizer in early 2017</li>
              <li>Enlist speakers for monthly presentation nights</li>
              <li>Secure funding and venues for all events</li>
              <li>Engage with members on social media like meetup and twitter to promote events</li>
              <li>Develop workshops and special events
                <ul>
                  <li>Spearheaded organizing efforts to host a full day International Nodebots event, including enlisting volunteers and mentors, acquiring equipment, coordinating with sponsors, and leading the technical workshop. <a href="https://www.meetup.com/pdxnode/events/252277861/" target="_blank" rel="noopener noreferrer">2018</a></li>
                  <li>
                    Hosted special edition of presentation nights as part of <a href="https://www.meetup.com/pdxnode/events/ckfklpyxkbqb/" target="_blank" rel="noopener noreferrer">OSCON 2018</a> (Open Source Conference put on by O'Reilly).
                  </li>
                </ul>
              </li>
            </ul>
          </SimpleTextImage>
        </section>
      </Layout>
    );
  }
}


export default AboutPage

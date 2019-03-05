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
              I'm Jordan Brady, a creative front end developer, mentor, and community leader working with groups like <a href="https://www.womenwhocode.com/portland" target="_blank" rel="noopener noreferrer">Women Who Code Portland</a> and <a href="http://pdxnode.org/">PDXNode</a>. I founded a group called <Link to="/puppies-and-portfolios">Puppies and Portfolios</Link> to help new developers build an awesome online presence. I have a great passion for everything CSS and rubber duck debugging. I enjoy <Link to="/speaking">speaking</Link> at meetups and conferences to share the things I know.
            </p>
            <p>
            When not coding, I can be found exploring the world around me with <a href="https://www.instagram.com/cubandpebbles/" target="_blank" rel="noopener noreferrer">my puppies</a> and my favorite Nikon camera. Nothing excites me more than immersing myself in a good challenge or a great book.
            </p>
            <p>
              I have spent a lot of time freelancing and doing contract work, but I am really hoping to find a long-term job that I can really dig in on. This job would include an awesome team that I can learn from and and teach things to as I grow as a developer. I am looking for a role that allows me to flex my creativity muscles, while I work on solving challenging problems with code. Check out my <Link to="/resume">resume</Link>, and send me a message if you think I might be a good fit for your team.
            </p>
          </SimpleText>
          <br />
          <SimpleText title="Community Involvement" className={componentStyles.community}>
            <p>
              During summer of 2015 I attended my first tech event: an event put on by Women Who Code Portland that introduced me to the wonderful world of meetups. Since then, I have continued attending numerous different meetups where I learnt a lot, met some amazing humans, and grew well out of my comfort zone.
            </p>
            <p>
              Today, I volunteer as part of the Leadership Teams for PDXNode and Women Who Code Portland. I also mentor periodically at other local meetups such as Free Code Camp Portland and Mentorship Saturdays. In 2019 I started my own group called Puppies and Portfolios.
            </p>
          </SimpleText>
          <section className={componentStyles.commGrid}>
            <SimpleTextImage
              title="Puppies and Portfolios"
              image="/images/Group-Logos/puppiesandportfolios.png"
            >
              <p>
                I started the Puppies and Portfolios Hangout Club Thing in early 2019. This group is meant to be a laid back hangout at various cafes across Portland where people can meet up every other weekend to work on their portfolios. I lead discussions and answer questions about design, content, or anything else related to portfolios that comes up. I help with code, and encourage people to build awesome portfolios during their job hunt. Weather and location permitting, I also bring my puppies to the events because puppies make everything better.
              </p>
              <p>You can find out more about this group <Link to="/puppies-and-portfolios">here</Link>, or sign up for the <a href="http://bit.ly/pupsandports" target="_blank" rel="noopener noreferrer">slack group</a> to join the conversation and find out when our next event is..</p>
            </SimpleTextImage>
            <SimpleTextImage
              title="Women Who Code Portland"
              image="/images/Group-Logos/wwcode.png"
            >
              <p>
                During the second half of 2016 I moved from an occasional volunteer to a full member of the leadership team. In the beginning, I mostly helped out with monthly networking nights. I was even able to take lead and plan one myself. in 2018, I stepped up into a more regular role as the co-lead for the new monthly Open Soruce Study Nights. As co-lead for a study night, I schedule speakers, prepare my own content to teach, and generally answer questions for people who attend the events. 
              </p>
            </SimpleTextImage>
            <SimpleTextImage
              title="PDX Node"
              image="/images/Group-Logos/pdxnode.png"
            >
              <p>
                I started volunteering with PDXNode in early 2017. We have two regular events every month: presentation nights and hack nighs. My role with this group includes securing sponsorship, updating meetup.com and twitter, finding and scheduling speakers, developing workshops, and occasionally acting as announcer at the events themselves.
              </p>
              <p>
                During summer of 2018, I acted as lead organizer and hosted a special edition of the presntation night as part of OSCON (Open Source Conference put on by O'Reilly) and an International Nodebots Day workshop
              </p>
            </SimpleTextImage>
            <SimpleTextImage
              title="Toastmasters"
              image="/images/Group-Logos/toastmasters.png"
            >
              <p>
                I joined ToastMasters in February of 2018, and completed my first four speeches within the first six months. I was elected VP of Education for the West Beaverton ToastMasters club. Unfortunatly, I won't be able to serve at this time due to taking a new job that is requiring me to find a different club to join. Hopefully I will have another opportunity to fill an officer role down the line. In the mean time, I will continue to attend weekly club meetings (once I find a new club) and participate in every meeting.
              </p>
            </SimpleTextImage>
          </section>
        </div>
      </Layout>
    );
  }
}


export default AboutPage

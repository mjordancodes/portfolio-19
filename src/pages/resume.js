import React, { Component } from 'react';

import Layout from '../components/layout';

import componentStyles from './resume.module.css'

class ResumePage extends Component {
  render() {
    return (
      <Layout>
        <p>View as PDF: <a href="/assets/JordanBrady_Resume-02-19.pdf" target="_blank">Resume</a></p>
          <div className={componentStyles.frame}>
            <header>
              <h1>mJordan Brady</h1>
              <h2>I design, develop, & teach the web</h2>
            </header>
            <div className={componentStyles.content}>

              <section className={componentStyles.skills}>
                <h1>Highlighted Skills</h1>
                <div>
                  <h2>Favorite Things</h2>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Sass</li>
                    <li>PostCSS</li>
                    <li>Gatsby</li>
                    <li>React.js</li>
                    <li>Vue.js</li>
                    <li>Greensock</li>
                    <li>Git / GitHub</li>
                    <li>Design Systems</li>
                  </ul>
                </div>
                <div>
                  <h2>Self Explored</h2>
                  <ul>
                    <li>Pattern Lab</li>
                    <li>Python</li>
                    <li>WordPress</li>
                    <li>SQL</li>
                    <li>PHP</li>
                    <li>Vagrant</li>
                    <li>Bash Scripting (ZSH)</li>
                  </ul>
                </div>
                <div>
                  <h2>Design</h2>
                  <ul>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Sketch</li>
                    <li>Responsive Web Design</li>
                    <li>Photography</li>
                    <li>Graphic Design</li>
                    <li>Illustration</li>
                    <li>Atomic Design</li>
                    <li>UX Design</li>
                  </ul>
                </div>
              </section>
              <section className={componentStyles.recentRoles}>
                <h1>Recent Roles</h1>
                <article>
                  <hgroup>
                    <h1>Alchemy Code Lab</h1>  
                    <p>August 2018 - December 2018</p>
                  </hgroup>
                  <div className={componentStyles.info}>
                    <p className={componentStyles.position}>Lead Instructor and Curriculum Author at Full Stack JavaScript Bootcamp</p>
                    <p className={componentStyles.skillsList}><strong>Skill Set</strong>: Vue.js, PostCSS, CSS Animation, Gatsby.js, Netlify, Command Line, Git, Github, Design, Teaching</p>
                  </div>
                  <ul>
                    <li>Co-instructed bootcamp prep, bootcamp 1 and 2 classes.</li>
                    <li>Authored and tested new curriculum in the “devsigner” category for all class levels offered.</li>
                    <li>Collaborated one-on-one with students to troubleshoot code.</li>
                  </ul>
                </article>
                <article>
                  <hgroup>
                    <h1>Pro Unlimited (Nike)</h1>  
                    <p>November 2017 - August 2018</p>
                  </hgroup>
                  <div className={componentStyles.info}>
                    <p className={componentStyles.position}>Contractor: Applications Engineer and Prototyper</p>
                    <p className={componentStyles.skillsList}><strong>Skill Set</strong>: React.js, Storybook, Redux, Rapid Prototyping, Sketch, UX Design, User Testing</p>
                  </div>
                  <ul>
                    <li>Created rapid prototypes for new features and layouts across teams and applications.</li>
                    <li>Built working prototype versions for A/B testing and user studies.</li>
                    <li>Expanded the internal CSS framework.</li>
                    <li>Fixed visual bugs across teams and applications.</li>
                    <li>Programatically integrated new designs within existing applications.</li>
                    <li>Helped teams understand and adopt the corporate standards for how designs should be implemented technically.</li>
                    <li>Selected as a member of a proof of concept team that built and implemented a design system using Storybook and Sketch to output sharable React component.</li>
                  </ul>
                </article>
              </section>
              <section className={componentStyles.background}>
                <h1>Background</h1>
                <article>
                  <hgroup>
                    <h1>Contractor Roles at Stackary, Biamp (IT Motives), Graphtek</h1>
                    <p>January 2014 – July 2017</p>
                  </hgroup>
                  <div className={componentStyles.info}>
                    <p className={componentStyles.skillsList}><strong>Skill Set</strong>: Node.js, Hapi.js, Joi.js, Backbone.js, Underscore.js, Gulp.js, jQuery, jQuery UI, Handlebars, Sass, Subversion, Git, GitHub, API Design, MySQL, SVG, HTML Canvas, UX Design</p>
                  </div>
                  <ul>
                    <li>Authored internal documentation on all new features implemented.</li>
                    <li>Engineered multiple features from wireframes through the backend API and database.</li>
                    <li>Reskinned full application based on my own designs which included UX optimizations.</li>
                    <li>Created a reusable front-end design system.</li>
                    <li>Upgraded non-web-based software to modern JavaScript interface.</li>
                    <li>Navigated a legacy system and custom WordPress sites to perform content and structural updates.</li>
                    <li>Automated the signup process for main app by creating an automated Node.js based CLI tool to send templated emails created with Zerb for Email and sent using Amazon SES.</li>
                  </ul>
                </article>
                <article>
                  <hgroup>
                    <h1>Teaching: Tech Academy, Treehouse, Private</h1>  
                    <p>June 2015 – Current</p>
                  </hgroup>
                  <div className={componentStyles.info}>
                    <p className={componentStyles.skillsList}><strong>Skill Set</strong>: Sass, JavaScript, jQuery, Node.js, PHP, WordPress, MySQL, Python, Git, GitHub, APIs, Responsive Design, Accessibility, SVG Graphics</p>
                  </div>
                  <ul>
                    <li>Collaborated with students in one-on-one sessions to help them learn how to solve problems and debug code.</li>
                    <li>Provided in-depth code reviews to ensure all requirements were met.</li>
                    <li>Facilitated agile student teams in sprints to complete projects for real world clients.</li>
                    <li>Devised unique code challenges, lessons, and extra projects to challenge students.</li>
                  </ul>
                </article>
              </section>
              <section className={componentStyles.comm}>
                <h1>Community Involvement</h1>
                <article>
                  <hgroup>
                    <h1>Puppies and Portfolios</h1>  
                    <p>January 2019 - Present</p>
                  </hgroup>
                  <div className={componentStyles.info}>
                    <p className={componentStyles.position}>Founder / Organizer</p>
                  </div>
                  <ul>
                    <li>Founded a new meetup group to help people focus on building portfolios in pursuit of tech jobs.</li>
                    <li>Organize meetings every two weeks, where I lead discussions on effective portfolio design and content.</li>
                    <li>Assist with technical implementation of designs.</li>
                  </ul>
                </article> 
                <article>
                  <hgroup>
                    <h1>PDXNode</h1>  
                    <p>June 2017 - Present</p>
                  </hgroup>
                  <div className={componentStyles.info}>
                    <p className={componentStyles.position}>Co-Organizer / Lead Organizer</p>
                  </div>
                  <ul>
                    <li>Organize monthly presentation nights and hack nights by securing speakers and managing all logistics.</li>
                    <li>Engage with members on social media to promote events.</li>
                    <li>Connect with sponsors to secure funds for food, space, and prizes to be won at events.</li>
                    <li>Spearheaded organizing efforts to host a full day International Nodebots day event in 2018, which included enlisting volunteers and mentors, acquiring equipment, coordinating with sponsors, and leading the technical workshop.</li>
                  </ul>
                </article> 
                <article>
                  <hgroup>
                    <h1>Women Who Code Portland</h1>  
                    <p>September 2016 - Present</p>
                  </hgroup>
                  <div className={componentStyles.info}>
                    <p className={componentStyles.position}>Leadership Team, Open Source Study Night Co-Lead(2018), CSS Study Night Co-Lead(2019)</p>
                  </div>
                  <ul>
                    <li>Volunteer at monthly networking nights to help with checking in attendees and handling other logistics as needed.</li>
                    <li>Assist in organize networking nights by finding speakers and locations as well as coordinating other volunteers.</li>
                    <li>Co-lead the Open Source Study nights for a year (2018).</li>
                    <li>Co-leading new CSS study nights starting in 2019 where I will help introduce people to new and advanced CSS techniques.</li>
                  </ul>
                </article> 
                <article>
                  <hgroup>
                    <h1>Free Code Camp Portland</h1>  
                    <p>2016 - Present</p>
                  </hgroup>
                  <div className={componentStyles.info}>
                    <p className={componentStyles.position}>Mentor / Co-Organizer</p>
                  </div>
                  <ul>
                    <li>Lead various technical talks on demand.</li>
                    <li>Organized and led a hackathon as part of the global online Free Code Camp hackathon in October 2018 by gathering sponsors, securing a venue, and coordinating volunteers for a 48 hour event.</li>
                  </ul>
                </article> 
              </section>
              <section className={componentStyles.speaking}>
                <h1>Speaking</h1>
                <article>
                  <hgroup>
                    <h1>Dig in on Grid</h1>
                  </hgroup>
                  <ul>
                    <li>Confernece: WordCampPDX | November 2018</li>
                  </ul>
                </article> 
                <article>
                  <hgroup>
                    <h1>CSS Grid Workshop</h1>
                  </hgroup>
                  <ul>
                    <li>Meetup: Alchemy Code Lab | October 2018</li>
                    <li>Meetup: Front End PDX | July 2018</li>
                    <li>Meetup: Women Who Code: JavaScript Study Night | June 2018</li>
                  </ul>
                </article> 
                <article>
                  <hgroup>
                    <h1>I Get By With A Little Help From My Community</h1>
                  </hgroup>
                  <ul>
                    <li>Meetup: Portland Jr Developers | September 2018</li>
                    <li>Meetup: Portland Future Leaders In Tech | June 20181</li>
                  </ul>
                </article>  
                <article>
                  <hgroup>
                    <h1>Toastmasters</h1>
                    <p>February 2018 - Present</p>
                  </hgroup>
                  <ul>
                    <li>Completed four speaches in level 1</li>
                    <li>Placed second at the club level in the Humor Speech Contest</li>
                    <li>Elected Officer: VP of Education</li>
                  </ul>
                </article> 
              </section>
            </div>
          </div>
      </Layout>
    );
  }
}


export default ResumePage


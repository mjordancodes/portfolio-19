import React, { Component } from 'react';

import Layout from '../components/layout';

import componentStyles from './resume.module.css'

class ResumePage extends Component {
  render() {
    return (
      <Layout>
        <p>View as PDF: <a href="/assets/JordanBrady_Resume-06-19.pdf" target="_blank">Resume</a></p>
          <div className={componentStyles.frame}>
            <header>
              <h1>mJordan Brady</h1>
              <h2>I design, develop, & teach the web</h2>
            </header>
            <div className={componentStyles.content}>

              <section className={componentStyles.skills}>
                <h1>Tech Skills</h1>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Sass</li>
                    <li>PostCSS</li>
                    <li>Gatsby</li>
                    <li>React.js</li>
                    <li>Vue.js</li>
                    <li>Node.js</li>
                    <li>Greensock</li>
                    <li>Git / GitHub</li>
                    <li>Design Systems</li>
                    <li>Pattern Lab</li>
                    <li>Python</li>
                    <li>WordPress</li>
                    <li>SQL</li>
                    <li>PHP</li>
                    <li>Vagrant</li>
                    <li>Bash Scripting</li>
                  </ul>
              </section>
              <section className={componentStyles.skills}>
                <h1>Design Skills</h1>
              <div>
                  <h2>Software</h2>
                  <ul>
                    <li>Sketch</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe InDesign</li>
                  </ul>
                </div>
                <div>
                  <h2>Concepts</h2>
                  <ul>
                    <li>Responsive Web Design</li>
                    <li>Photography</li>
                    <li>Graphic Design</li>
                    <li>Illustration</li>
                    <li>Atomic Design</li>
                    <li>UX Design</li>
                    <li>Animation</li>
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
                    <p className={componentStyles.skillsList}><strong>Skill Set</strong>: HTML, CSS, JavaScript, Vue.js, PostCSS, CSS Animation, Gatsby, Netlify, Command Line, Git, Github, Design, Teaching</p>
                  </div>
                  <ul>
                    <li>Co-instructed bootcamp prep, bootcamp 1 and bootcamp 2 classes.</li>
                    <li>Authored new curriculum in the “devsigner” category for all class levels.</li>
                    <li>Collaborated one-on-one with students to troubleshoot code.</li>
                  </ul>
                </article>
                <article>
                  <hgroup>
                    <h1>Nike (Pro Unlimited)</h1>  
                    <p>November 2017 - August 2018</p>
                  </hgroup>
                  <div className={componentStyles.info}>
                    <p className={componentStyles.position}>Contractor: Applications Engineer and Prototyper</p>
                    <p className={componentStyles.skillsList}><strong>Skill Set</strong>: HTML, CSS, JavaScript, React.js, Storybook, Stylus, Redux, Rapid Prototyping, Sketch, UX Design, User Testing</p>
                  </div>
                  <ul>
                    <li>Created rapid prototypes for new features and layouts across teams and applications.</li>
                    <li>Built working prototypes of new features to be used for A/B testing and user studies.</li>
                    <li>Expanded the internal CSS Framework used by all Nike.com engineering teams to include modern CSS properties, such as flexbox, while still including acceptable fall backs for browsers back to IE7.</li>
                    <li>Programmatically integrated new designs within existing applications.</li>
                    <li>Helped teams understand and adopt corporate standards for technical design.</li>
                    <li>Selected as a member of a proof of concept team that built and implemented a design system that could convert a standard react component into a storybook story, or a sketch file. The system could also take a sketch file and turn it into a react component.</li>
                  </ul>
                </article>
                <article>
                  <hgroup>
                    <h1>Stackary</h1>
                    <p>March 2017 - July 2017</p>
                  </hgroup>
                  <div className={componentStyles.info}>
                    <p className={componentStyles.position}>Software Engineer</p>
                    <p className={componentStyles.skillsList}><strong>Skill Set</strong>: HTML, CSS, JavaScript, JavaScript, jQuery, jQuery UI, Node.js, Hapi.js, Joi.js, Git, GitHub, D3.js, Handlebars, REST API Design, MySQL, MariaDB, SVG, Canvas, UX Design, Serverless Architecture, Amazon AWS</p>
                  </div>
                  <ul>
                    <li>Authored internal documentation on all new features implemented.</li>
                    <li>Engineered multiple features from wireframes through the backend API and database.</li>
                    <li>Reskinned full application based on my own designs which included UX and accessibility optimizations.</li>
                    <li>Automated the signup process for the main app by creating a Node.js based CLI tool to send template-based emails created with Zerb for Email and sent using Amazon SES.</li>
                  </ul>
                </article>
                <article>
                  <hgroup>
                    <h1>Biamp (IT Motives)</h1>
                    <p>August 2016 - January 2017</p>
                  </hgroup>
                  <div className={componentStyles.info}>
                    <p className={componentStyles.position}>Web Developer</p>
                    <p className={componentStyles.skillsList}><strong>Skill Set</strong>: HTML, CSS, Sass, JavaScript, jQuery, Backbone.js, Underscore.js, Gulp.js, Design</p>
                  </div>
                  <ul>
                    <li>Upgraded non-web-based software to a responsive modern JavaScript interface.</li>
                    <li>Created reusable components to form the beginning of a design system.</li>
                    <li>Automated the build process for the project using Gulp.js.</li>
                  </ul>
                </article>
                <article>
                  <hgroup>
                    <h1>Treehouse</h1>
                    <p>April 2016 - January 2016</p>
                  </hgroup>
                  <div className={componentStyles.info}>
                    <p className={componentStyles.position}>Mentor for Front End Web Development Tech Degree Program (Beta)</p>
                    <p className={componentStyles.skillsList}><strong>Skill Set</strong>: HTML, CSS, Sass, JavaScript, jQuery, APIs, Responsive Design, Accessibility, SVG Graphics, HTML5 Video</p>
                  </div>
                  <ul>
                    <li>Collaborated with students in one-on-one sessions to help them learn how to solve problems and debug code.</li>
                    <li>Provided in-depth code reviews for student code on projects and assignments to ensure all requirements were met.</li>
                  </ul>
                </article>
                <article>
                  <hgroup>
                    <h1>Tech Academy</h1>
                    <p>June 2015 - January 2016</p>
                  </hgroup>
                  <div className={componentStyles.info}>
                    <p className={componentStyles.position}>Lead Remote Instructor and Student Care Director for Full Stack Development Bootcamp</p>
                    <p className={componentStyles.skillsList}><strong>Skill Set</strong>: HTML, CSS, JavaScript, jQuery, Node.js, PHP, WordPress, MySQL, Python, Git, GitHub, Scrum, Agile, Project Management</p>
                  </div>
                  <ul>
                    <li>Facilitated distributed agile student teams in sprints to complete projects for real world clients.</li>
                    <li>Devised unique code challenges, mini lessons, and extra projects to challenge students.</li>
                  </ul>
                </article>
                <article>
                  <hgroup>
                    <h1>Graphtek</h1>
                    <p>January 2014 - March 2015</p>
                  </hgroup>
                  <div className={componentStyles.info}>
                    <p className={componentStyles.position}>Web Developer and Designer at Web and Marketing Agency</p>
                    <p className={componentStyles.skillsList}><strong>Skill Set</strong>: HTML, CSS, WordPress, JavaScript, jQuery, Subversion, Adobe Creative Suite, Social Media Management, SEO, Cold Fusion</p>
                  </div>
                  <ul>
                    <li>Navigated a legacy system and custom WordPress sites to perform content and structural updates.</li>
                    <li>Created custom WordPress themes on a site by site basis.</li>
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
                    <li>Organize weekly meetings, where I lead discussions on effective design and content.</li>
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
                    <li>Connect with sponsors to secure funds for food, space, and prizes to be won.</li>
                    <li>Spearheaded organizing efforts to host a full day International Nodebots event, including enlisting volunteers and mentors, acquiring equipment, coordinating with sponsors, and leading the technical workshop.</li>
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
                    <li>Co-lead the Open Source Study Nights in 2018.</li>
                    <li>Co-leading new CSS Study Nights in 2019.</li>
                    <li>Assist in organize networking nights by finding speakers and locations as well as coordinating other volunteers.</li>
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
                    <h1>Crash Course in Getting Started with CSS Animation</h1>
                  </hgroup>
                  <ul>
                    <li>Meetup: PDX Future Leaders in Tech | February 2019</li>
                  </ul>
                </article> 
                <article>
                  <hgroup>
                    <h1>Dig in on Grid / CSS Grid Workshop</h1>
                  </hgroup>
                  <ul>
                    <li>Conference: WordCampPDX | November 2018</li>
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
                    <p>2018</p>
                  </hgroup>
                  <ul>
                    <li>Level 1: 4 speeches completed</li>
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


import React, { Component } from 'react';

import Layout from '../components/layout';

import componentStyles from './portfolio.module.css';

import SiteCard from '../components/Site-Card/site-card'


class PortfolioPage extends Component {
  render() {
    return (
      <Layout>
        <h1>Portfolio</h1>
        <p>I really love building my portfolio site. So much so, that I have built it 1000000000* times. Over the course of building it so many times I've done a lot of things wrong. I've also figured out a few things that do work well. I love working with Juniors and sharing what I know.</p>
        <p>* only a minor exaggeration</p>

        <hr />

        <h2>The Process</h2>
        <p>My process for building a portfolio site is a always going to be a work in progress, but this process seems to be helping keep me on track.</p>

        <ol>
          <li>
            <h3>Ask Questions</h3>
            <p>Asking a lot of questions early in the process helps me focus in on what I want to do.</p>
            <ul>
              <li>
                <p><strong>Motivation</strong> - Why am I building a portfolio?</p>
                <p>I am building my portfolio as a way to show off who I am. My resume will tell you what I have done (technically), but my portfolio is a place where I can show off my personality. This is where I can express myself in whatever creative way I choose.</p>
              </li>
              <li>
                <p><strong>Self Reflection</strong> - Who am I? </p>
                <p>I am a lot of things, and this question can be a little overwhelming. I guess a more accurate question would be <em>"What important parts of myself don't show on my resume?"</em> This usually becomes a brainstorming excercise.</p>
                <p>One thing to look at is my background. What parts of my background give me unique skills? I spent several years as a photographer and still love taking pictures as a hobby. Before I became a developer I wanted to be a graphic designer and studied that for a while.</p>
                <p>Looking at my unrelated hobbies can also be interesting. These don't have to be relevent things. They help show that I am a "well rounded person" who is into more than just a developer. For me, I love to read and play with my puppies.</p>
                <p>A third area to explore is things that are on my resume that I think are more important. What do I do besides the technical that sets me apart? For me, I wanted to focus on my community involvement. I like to mentor and work with people trying to break into the field, I volunteer and organize with Women Who Code Portland and PDXNode.</p>
              </li>
              <li>
                <p><strong>The User</strong> - Who is this site for?</p>
                <p>At the end of the day, my portfolio isn't really for me. It is my vanity home on the web, but I really want other people to look at it. I frequently use my portfolio as a place to send people when I am looking for a job. I find it helpful to try and think about what the user might be looking for. Creating user personas can be a fun way to approach this. At some point I will have to write a post about the different user personas I have created.</p>
              </li>
              <li>
                <p><strong>History</strong> - What worked? What didn't?</p>
                <p>It is handy to get feedback. I have shown my site to lots of people and asked them to tear it apart. I want to know what works for them. What parts they like, and what parts they don't like. When I can't find "real" users to test my site, I usually find family or friends and ask them for help. It can be a great learning experience to ask someone to find a specific piece of information and then see how long it takes them to find it.</p>
              </li>
            </ul>
          </li>
          <li>
            <h3>Finding Inspiration</h3>
            <p>Even with a background in art and design, I still need to find inspiration. I've never met anyone, no matter how creative and artistic, that doesn't look for inspiration everywhere. There is a huge difference between copying and getting inspiration from something.</p>
            <p>Listing a few places I think can be awesome sources of inspiration:</p>
            <ul>
              <li>
                <p>Design Sites</p>
                <ul>
                  <li>
                    <a href="https://www.awwwards.com/" target="_blank" rel="noopener noreferrer">Awwwards</a>
                  </li>
                  <li>
                    <a href="https://www.bestfolios.com/home" target="_blank" rel="noopener noreferrer">Bestfolios</a>
                  </li>
                  <li>
                    <a href="https://codepen.io/" target="_blank" rel="noopener noreferrer">CodePen</a> - I love looking at the other fun things that people have built. I often go search CodePen for parts that I am working on. Stuck on how I want to build a navigation element? Search for nav bars and see how a bunch of other people solved the problem.
                  </li>
                  <li>
                    <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">Dribbble</a>
                  </li>
                </ul>
              </li>
              <li>
                <p>Other Portfolio Sites</p>
                <p>I love to look at the portfolio sites that other people build. I try to find sites of people I know in the community and sites from the super cool people I follow on Twitter.</p>
                <ul className={componentStyles.siteGrid}>
                  <SiteCard 
                    site="alispit.tel/"
                    url="https://www.alispit.tel/"
                    thumbnail="/assets/alispittel-sm.jpg"
                    fullImg="/assets/alispittel.png"
                    desc="I love the bright colors of this site. Her content is also super great and the click for random color/shapes in the background is entertaining."
                  />
                  <SiteCard 
                    site="sarahdrasnerdesign.com/"
                    url="https://sarahdrasnerdesign.com/"
                    thumbnail="/assets/SarahDrasner-sm.jpg"
                    fullImg="/assets/SarahDrasner.png"
                    desc="I think the bright, fun colors and shapes give this site a very playful feel. I love the super simple statement at the beginning: 'I make things'"
                  />
                  <SiteCard 
                    site="bradfrost.com/"
                    url="http://bradfrost.com/"
                    thumbnail="/assets/BradFrost-sm.jpg"
                    fullImg="/assets/BradFrost.png"
                    desc="Brad's site amuses me with the color fill on hover with the circles at the top and bottom of his site."
                  />
                  <SiteCard 
                    site="labs.jensimmons.com/"
                    url="https://labs.jensimmons.com/"
                    thumbnail="/assets/JenSimmons-sm.jpg"
                    fullImg="/assets/JenSimmons.png"
                    desc="This site is a good example of responsive grid layout. It also has lots of other really cool CSS examples that I love to poke at."
                  />
                  <SiteCard 
                    site="lynnandtonic.com/archive/2017/"
                    url="https://lynnandtonic.com/archive/2017/"
                    thumbnail="/assets/LynnFisher-sm.jpg"
                    fullImg="/assets/LynnFisher.png"
                    desc="This site is updated yearly. Most versions are pretty fun. I really loved the 2017 version. The layout changes and content moves around dramatically at all the different break points."
                  />
                  <SiteCard 
                    site="chriscoyier.net/"
                    url="https://chriscoyier.net/"
                    thumbnail="/assets/ChrisCoyier-sm.jpg"
                    fullImg="/assets/ChrisCoyier.png"
                    desc="I like the interaction with the bio. You can change the length, the point of view, and how it is rendered. This seems super handy for someone who does a lot of speaking and has to frequently provide a bio."
                  />
                  <SiteCard 
                    site="una.im/"
                    url="https://una.im/"
                    thumbnail="/assets/UnaKravets-sm.jpg"
                    fullImg="/assets/UnaKravets.png"
                    desc="Unicorns are cool and this one changes colors when you hover over it!"
                  />
                  <SiteCard 
                    site="adhamdannaway.com/"
                    url="http://www.adhamdannaway.com/"
                    thumbnail="/assets/AdhamDannaway-sm.jpg"
                    fullImg="/assets/AdhamDannaway.png"
                    desc="Really fun way to show that he does both code and design. Hovering over one side expands the design in that direction."
                  />
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <h3>The Design Process</h3>
            <p>Now that I have some ideas about the content, what I want the site to do, and I've found some cool things to inspire me, it is time to start on the actual design. I like to go back to the list of things I wanted to show off and start figuring out the how. For example, I wanted to nod to my background in graphic design, so I decided to create my own illustrations.</p>
            
            <h4>Site Map</h4>
            <p>Before I get too far into design, I like to make a site map. This helps me outline the site a little bit and figure out what types of pages I am going to need.</p>
            <p>
              _____________________________<br />
              home<br />
              ┣ about<br />
              &nbsp; &nbsp; ┣ uses<br />
              &nbsp; &nbsp; ┣ now<br />
              ┣ projects<br />
              ┣ blog<br />
              ┣ speaking<br />
              _____________________________
            </p>
            <p>Looking at this, I will have 1 landing page (home), 3 list pages (portfolio, blog, speaking), and the rest will be fairly basic content pages.</p>
            
            <h4>Wireframe</h4>
            <p>I usually start wireframes with the list pages. I'll figure out what information I want to show in the list view and sketch out a few different ways I can lay it out. Knowing what information I want to display makes it easier to arrange the pieces.</p>

            <h4>Mockups</h4>
            <p>Once I have a basic wireframe sketched out, I often jump into Illustrator to start mocking up a high-fidelity version of the site. When building this site, I spent a lot of time during this phase creating the different illustrations that I wanted to use. I usually don't mock up the full site at this stage. I focus on areas that I want to be doing something extra or fancy, and let the wireframe work as a vague idea to guide the design on the simpler pages.</p>
          </li>
        </ol>
      </Layout>
    );
  }
}


export default PortfolioPage

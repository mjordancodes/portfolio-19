import React, { Component } from 'react';

import Layout from '../components/layout';

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
                <p>A few of my favorites:</p>
                <ul>
                  <li>
                    <a href="http://www.themostawful.com/" target="_blank" rel="noopener noreferrer">Sarah Joy</a> - This is the portfolio site of another leader from Women Who Code Portland. I love the buttons for things that she likes playing with. When you click on the "color" button the background color randomly changes. This inspired me to make it so that I would have some colors on my site randomly change on every page load(or reload). 
                    <img src="/assets/themostawful-buttons.png" />
                  </li>
                  <li>
                    <a href="https://www.alispit.tel/#/" target="_blank" rel="noopener noreferrer">Ali Spittel</a> - Ali writes lots of super cool blog posts that are really helpful. I love the colors she uses on her name on the home page, and the simple information right under it that quickly sums up what she likes to do. 
                    <img src="/assets/alispittel.png" />
                  </li>
                </ul>

                <p>I combined the random color generation idea that I got from Sarah Joy, and the colorful letters on Ali's site and came up with my own homepage landing bit.</p>
                <img src="/assets/nameplate.png" />
              </li>
            </ul>
          </li>
        </ol>
      </Layout>
    );
  }
}


export default PortfolioPage

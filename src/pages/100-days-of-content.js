import React, { Component } from 'react';

import Layout from '../components/layout';

import componentStyles from './100-days-of-content.module.css';

class OneHundredDaysOfContentPage extends Component {
  render() {
    return (
      <Layout>
        <img src="/assets/100-days-of-content.png" alt="100 Days of Content" />

        <p>Project started on <strong>July 7th, 2019</strong>.</p>

        <p>Day 0 blog post (<a href="/blog/100-days-of-content/">#100DaysOfContent</a>) is a good place to start if you want to know more about what this project is.</p>

        <h2>Contents:</h2>
        <table className={componentStyles.table}>
          <thead>
            <th>Day</th>
            <th>Date</th>
            <th>Content Type</th>
            <th>Link</th>
            <th>Notes / Project Summary</th>
          </thead>

          <tr>
            <td>007</td>
            <td>July 24, 2019</td>
            <td>CSS Playground Experiment</td>
            <td><a href="https://playground.mjordan.codes/swissted/yo-la-tengo.html"><img src="/assets/yo-la-tengo.png" alt="Yo La Tengo Poster"/></a></td>
            <td>Playing with CSS Grid and Typography, creating a page based off of of set of posters designed by Mike Joyce as part of his "Swissted" series.</td>
          </tr>

          <tr>
            <td>006</td>
            <td>July 23, 2019</td>
            <td>CSS Playground Experiment</td>
            <td><a href="https://playground.mjordan.codes/w-flemming/"><img src="/assets/colourful.png" alt="Colourful is my favourite colour" /></a></td>
            <td>Created an SVG based off a shirt designed by W. Flemming and then animated it using Greensock. If you click anywhere on the screen, the letters in 'colourful' change colors randomly.</td>
          </tr>

          <tr>
            <td>005</td>
            <td>July 22, 2019</td>
            <td>New Project</td>
            <td><a href="https://playground.mjordan.codes"><img src="/assets/css-playground.png" alt="Home page for my new CSS Playground" /></a></td>
            <td>Created homepage layout for a new project I wanted to start. This new site will be a fun place I can collect random CSS experiments mostly based off of art and posters. The homepage draws it's inspiration from Piet Mondrian's Composition A.</td>
          </tr>

          <tr>
            <td>004</td>
            <td>July 12, 2019</td>
            <td>SVG Animations</td>
            <td>
              <a href="https://codepen.io/mjordancodes/pen/JQzQdq?editors=0010">CodePen: BeeFly</a>
            </td>
            <td>Took the SVG I created on day 003 and added a little animation to it. The green short plant shakes a little on load. If you bring your mouse over the plant, a bee flies out and the plant stops shaking. Will be using this as a demo in my talk on Tuesday most likely. Might add a few more parts to the animation over the weekend. Not sure.</td>
          </tr>

          <tr>
            <td>003</td>
            <td>July 10, 2019</td>
            <td>SVG Illustration</td>
            <td>
              <a href="/assets/terrarium.png">
                <img src="/assets/terrarium.png" alt="Graphic drawing of a few succulents in a bubble bowl" />
              </a>
            </td>
            <td>Worked on a SVG of a succulent terrarium to add to the bookcase on my books list page. Want to add a bee that flies out of the bowl and around the page that is triggered by a mouse hover over. Maybe tomorrow's project.</td>
          </tr>

          <tr>
            <td>002</td>
            <td>July 09, 2019</td>
            <td>Acrylic Painting</td>
            <td>
              <a href="/assets/jordans-journal.jpeg">
                <img src="/assets/jordans-journal.jpeg" className={componentStyles.jordansJournal} alt="Light blue journal with paintings of Peter Pan, a blue Converse shoe, a rocket ship and two planets" />
              </a>
            </td>
            <td>Decided that my notebook was too boring and single colored so this seemed like a good excuse to do something about it. Went with a few of my favorite things: Peter Pan, Converse shoes, and Space. It was fun to pull out my acryllic paints again. My gesso seems to have gone totally bad, but rather than go out and replace it, I just painted straight on the cover without any primer type layer. It worked fine for the most part, but I ran into a bit of trouble with some of my mixed colors being too transparent. Took a few layers to make those colors work, but it turned out alright.</td>
          </tr>

          <tr>
            <td>001</td>
            <td>July 08, 2019</td>
            <td>Slides</td>
            <td>
              <a href="http://localhost:8000/talk/greensock-portfolio/">
              <img src="assets/animation-slides.png" alt="Title slide with title: Animating your portfolio to awesome with Greensock"/>
              </a>
            </td>
            <td>Built slide deck for animation presentation I am giving at Front End PDX next week. While building this deck I focused on the why as well as just the technical how. I've found that spelling out the why and giving examples of the when can make a technical talk way more intersting. </td>
          </tr>

          <tr>
            <td>000</td>
            <td>July 07, 2019</td>
            <td>Blog Post</td>
            <td><a href="/blog/100-days-of-content/">#100DaysOfContent</a></td>
            <td>Kicked off the challenge with a blog post that gathers up some ideas and goals to keep in mind as the days go by.</td>
          </tr>

        </table>
        
      </Layout>
    );
  }
}

export default OneHundredDaysOfContentPage

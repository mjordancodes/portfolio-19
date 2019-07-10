import React, { Component } from 'react';

import Layout from '../components/layout';

import componentStyles from './100-days-of-content.module.css';

class OneHundredDaysOfContentPage extends Component {
  render() {
    return (
      <Layout>
        <img src="/assets/100-days-of-content.png" alt="100 Days of Content" />

        <p>Project started on <strong>July 7th, 2019</strong>.</p>

        <p>Day 0 blog post is a good place to start if you want to know more about what this project is.</p>

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
            <td>000</td>
            <td>July 07, 2019</td>
            <td>Blog Post</td>
            <td><a href="/blog/100-days-of-content/">#100DaysOfContent</a></td>
            <td>Kicked off the challenge with a blog post that gathers up some ideas and goals to keep in mind as the days go by.</td>
          </tr>

          <tr>
            <td>001</td>
            <td>July 08, 2019</td>
            <td>Slides</td>
            <td>
              <img src="assets/animation-slides.png" alt="Title slide with title: Animating your portfolio to awesome with Greensock"/>
              <br />
              Slide Deck will be posted early on the 16th.</td>
            <td>Built slide deck for animation presentation I am giving at Front End PDX next week. While building this deck I focused on the why as well as just the technical how. I've found that spelling out the why and giving examples of the when can make a technical talk way more intersting. </td>
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
            <td>Decided that my notebook was too boring and single colored so </td>
          </tr>
        </table>
        
      </Layout>
    );
  }
}

export default OneHundredDaysOfContentPage

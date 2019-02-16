import React, { Component } from 'react';
import { graphql } from "gatsby";

import Layout from '../components/layout';
import TalkCard from '../components/Cards/Talk-Card/talk-card';
import FutureTalk from '../components/Future-Talk/future-talk';

import componentStyles from './speaking.module.css';

class TalksPage extends Component {
  render() {
    return (
      <Layout>
        <header className={componentStyles.header}>
          <h1>mJordan Speaks:</h1>
          <h2>meetups, workshops, conferneces</h2>
        </header>
        <h2>Upcoming Talks:</h2>
        <ul>
          <FutureTalk 
            title="What's New in CSS?"
            event="Women Who Code Portland: CSS Study Night"
            date="Tuesday, February 26, 2019"
            link="https://www.meetup.com/Women-Who-Code-Portland/events/258029988/"
          />
          <FutureTalk
            title="Crash Course in Getting Started with CSS Animations"
            event="PDX Future Leaders in Technology"
            date="Wednesday, February 27, 2019"
          />
        </ul>
        <h2>Previous Talks:</h2>
        <ul className={componentStyles.talkGrid}>
          {this.props.data.allMarkdownRemark.edges.map(post => (
            <TalkCard 
              link={post.node.fields.slug}
              img={post.node.frontmatter.coverimage}
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
            />
          ))}
        </ul>
      </Layout>
    );
  }
}

export const talkListQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter : {
          layout: {
            eq:"talk"
          }
        }
      },
      sort: {
        fields: 
        [frontmatter___date],
        order: DESC
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MM/DD/YY")
            title
            coverimage
          }
          html
        }
      }
    }
  }
`


export default TalksPage

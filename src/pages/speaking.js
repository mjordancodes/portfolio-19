import React, { Component } from 'react';
import { Link, graphql } from "gatsby";

import Layout from '../components/layout';
import Header from '../components/Header/header';

import componentStyles from './speaking.module.css';

class TalksPage extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <header className={`container`}>
          <h1>mJordan Speaks:</h1>
          <h2>meetups, workshops, conferneces</h2>
        </header>
        <ul className={`container ${componentStyles.container}`}>
          {this.props.data.allMarkdownRemark.edges.map(post => (
            <Link to={post.node.fields.slug} key={post.node.fields.slug}>
              <li className={componentStyles.talkcard}>
                <img src={post.node.frontmatter.coverimage} alt={post.node.frontmatter.title} />
                <h3>{post.node.frontmatter.title}</h3>
                <p>{post.node.frontmatter.date} </p>

              </li>
            </Link>
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

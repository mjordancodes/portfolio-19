import React, { Component } from 'react';
import { Link, graphql } from "gatsby";

import Layout from '../components/layout';
import Header from '../components/Header/header';

import componentStyles from './now.module.css'

class NowPage extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <header className={`container ${componentStyles.header}`}>
          <h1>Now</h1>
        </header>
        <ul className={`container ${componentStyles.postList}`}>
          {this.props.data.allMarkdownRemark.edges.map(post => (
            <Link to={post.node.fields.slug} key={post.node.fields.slug}>
              <li>
                  <h2>{post.node.frontmatter.date}</h2>
              </li>
            </Link>
          ))}
        </ul>
      </Layout>
    );
  }
}

export const nowListQuery = graphql`
  query {
    allMarkdownRemark(
      skip: 1
      filter: {frontmatter: 
      {layout: {
        eq: "now"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            tech1
            tech2
            tech3
            personalprojecttitle
            personalprojectabout 
            jobcompany
            jobtitle
          }
          html
        }
      }
    }
  }
`


export default NowPage

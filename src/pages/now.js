import React, { Component } from 'react';
import { Link, graphql } from "gatsby";

import Layout from '../components/layout';
import NowCurrent from '../components/Now-Current/now-current';

class NowPage extends Component {
  render() {
    return (
      <Layout>
        <header className={`container`}>
          <h1>Now</h1>
        </header>
        <NowCurrent />
        <div>
          <h2>Previous updates:</h2>
          <ul>
            {this.props.data.allMarkdownRemark.edges.map(post => (
              <li>
                <Link to={post.node.fields.slug} key={post.node.fields.slug}>
                    {post.node.frontmatter.date}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    );
  }
}

export const nowListQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          layout: {
            eq: "now"
          }
        }
      }, 
      sort: {
        fields: [frontmatter___date], order: DESC
      },
      skip: 1
    ) {
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

import React, { Component } from 'react';

import Layout from '../components/layout';
import Header from '../components/Header/header';

class BlogPage extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <h1>Blog</h1>
        <ul>
          {this.props.data.allMarkdownRemark.edges.map(post => (
            <li>
              <h2>{post.node.frontmatter.title}</h2>
              <p className="info">
                {post.node.frontmatter.date}
              </p>
              <img src={post.node.frontmatter.thumbnail} />
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}

export const blogListQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter : {
          layout:{
            eq:"blog"
          }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            layout
            date(formatString: "MMMM DD, YYYY")
            thumbnail
          }
          html
        }
      }
    }
  }
`


export default BlogPage

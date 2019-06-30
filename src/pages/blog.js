import React, { Component } from 'react';
import { Link, graphql } from "gatsby";

import Layout from '../components/layout';

import componentStyles from './blog.module.css'

class BlogPage extends Component {
  render() {
    return (
      <Layout>
        <header className={`container h-feed ${componentStyles.header}`}>
          <h1 className="p-name">mJordan Writes:</h1>
          <h2>articles, reviews, tutorials, life, and musings by <span className="h-card p-author">mJordan</span></h2>
        </header>
        <ul className={`container ${componentStyles.postList}`}>
          {this.props.data.allMarkdownRemark.edges.map(post => (
            <Link to={post.node.fields.slug} key={post.node.fields.slug}>
              <li className={`h-entry ${componentStyles.post}`}>
                <img src={post.node.frontmatter.thumbnail} alt="featured" className="u-featured" />
                <div className={`${componentStyles.words}`}>
                  <h3 className="p-name">{post.node.frontmatter.title}</h3>
                  <p className={`dt-published ${componentStyles.info}`}>
                    {post.node.frontmatter.date}
                  </p>
                  <p className="p-summary">{post.node.excerpt}</p>
                </div>
              </li>
            </Link>
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
      }, 
      sort: {
        fields: [frontmatter___date], order: DESC
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            layout
            date(formatString: "MMMM DD, YYYY")
            thumbnail
          }
          html
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`


export default BlogPage

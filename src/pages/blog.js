import React, { Component } from 'react';
import { Link, graphql } from "gatsby";

import Layout from '../components/layout';
import Header from '../components/Header/header';

import componentStyles from './blog.module.css'

class BlogPage extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <header className={`container ${componentStyles.header}`}>
          <h1>mJordan Writes:</h1>
          <h2>articles, reviews, tutorials, life, and musings</h2>
        </header>
        <ul className={`container ${componentStyles.postList}`}>
          {this.props.data.allMarkdownRemark.edges.map(post => (
            <Link to={post.node.fields.slug}>
              <li className={componentStyles.post}>
                <img src={post.node.frontmatter.thumbnail} alt="featured" />
                <div className={componentStyles.words}>
                  <h2>{post.node.frontmatter.title}</h2>
                  <p className={componentStyles.info}>
                    {post.node.frontmatter.date}
                  </p>
                  <p>{post.node.excerpt}</p>
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

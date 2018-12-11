import React, { Component } from 'react';

import Layout from '../components/layout';
import Header from '../components/Header/header';

import componentStyles from './blog.module.css'

class BlogPage extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <header className={componentStyles.header}>
          <h1>mJordan Writes:</h1>
          <h2>articles, reviews, tutorials, life, and musings</h2>
        </header>
        <ul className={componentStyles.postList}>
          {this.props.data.allMarkdownRemark.edges.map(post => (
            <li className={componentStyles.post}>
              <img src={post.node.frontmatter.thumbnail} />
              <div className={componentStyles.words}>
                <h2>{post.node.frontmatter.title}</h2>
                <p className={componentStyles.info}>
                  {post.node.frontmatter.date}
                </p>
                <p>{post.node.excerpt}</p>
              </div>
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
          excerpt
        }
      }
    }
  }
`


export default BlogPage

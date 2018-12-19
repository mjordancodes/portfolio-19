import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby';

import componentStyles from './landing-desk.module.css';

import BooksItem from '../../images/Landing-Desk/book-stack.svg';

const BooksWithQuery = () => (
  <StaticQuery
    query={graphql`
      query BooksQuery {
        allMarkdownRemark(
          filter: {
            frontmatter : {
              layout:{
                eq:"book"
              }
            }
          },
          sort: {
            fields: [frontmatter___date], 
            order: DESC
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                authorfirst
                authorlast
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Books data={data} />
    )}
  />
)

class Books extends Component {
  render() {
    return (
      <BooksItem className={componentStyles.books} />
    )
  }

  componentDidMount() {
    // Set Book titles/authors
    const svgBooks = [
      document.getElementById('book-top'), 
      document.getElementById('book-middle'), 
      document.getElementById('book-bottom') ]

    const booksData = this.props.data.allMarkdownRemark.edges;

    for(let i = 0; i < svgBooks.length; i++) {
      let title = svgBooks[i].querySelector('[id*="title"]');
      title.textContent = booksData[i].node.frontmatter.title;

      let author = svgBooks[i].querySelector('[id*="author"]');
      author.textContent = booksData[i].node.frontmatter.authorfirst + ' ' + booksData[i].node.frontmatter.authorlast;

      svgBooks[i].addEventListener('click', function() {
        window.location.href = '/books-read'
      })
    }

    document.getElementById('camera').addEventListener('click', function() {
      window.location.href = 'http://threewoodenpigeons.com';
    })

  }
}

export default BooksWithQuery

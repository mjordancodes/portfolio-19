import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import componentStyles from './book-table.module.css';


const BooksTable = ({className}) => (
  <StaticQuery
    query={graphql`
      query BooksPageQuery {
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
                date(formatString: "MM/YY")
                datecomplete(formatString: "MM/YY")
                pages
                authorfirst
                authorlast
                category
              }
            }
          }
        }
      }
    `}
    render={data => (
      <table className={`${componentStyles.books} ${className}`}>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Finished</th>
        </tr>
        {data.allMarkdownRemark.edges.map(book => (
          <tr>
            <td>{book.node.frontmatter.title}</td>
            <td>{book.node.frontmatter.authorfirst} {book.node.frontmatter.authorlast}</td>
            <td>{book.node.frontmatter.category}</td>
            <td>{book.node.frontmatter.datecomplete}</td>
          </tr>
        )) }
      </table>
    )}
  />
)

export default BooksTable

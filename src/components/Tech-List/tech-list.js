import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        allMarkdownRemark(
          filter: {
            frontmatter : {
              layout:{
                eq:"tech"
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
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ul>
        {data.allMarkdownRemark.edges.map(tech => (
          <li>
            {tech.node.frontmatter.title}
          </li>
        ))}
      </ul>
    )}
  />
)
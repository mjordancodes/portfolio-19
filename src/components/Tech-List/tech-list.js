import React from "react"
import { StaticQuery, graphql } from "gatsby"

import componentStyles from './tech-list.module.css'

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
          },
          sort: {
            fields: [frontmatter___title], 
            order: ASC
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                icon
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ul className={componentStyles.techList}>
        {data.allMarkdownRemark.edges.map(tech => (
          <li key={tech.node.frontmatter.title}>
            <img src={tech.node.frontmatter.icon} alt={`${tech.node.frontmatter.title} logo`} />
            {tech.node.frontmatter.title}
          </li>
        ))}
      </ul>
    )}
  />
)
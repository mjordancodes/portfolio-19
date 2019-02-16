import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import FutureTalk from './future-talk';

const FutureTalks = ({className}) => (
  <StaticQuery
    query={graphql`
      query FutureTalksQuery {
        allMarkdownRemark(filter: {frontmatter: {layout: {eq: "future-talk"}}}, sort: {fields: [frontmatter___date], order: ASC}) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                eventpage
                group
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ul>
        {data.allMarkdownRemark.edges.map(talk => (
          <FutureTalk 
            title={talk.node.frontmatter.title}
            group={talk.node.frontmatter.group}
            date={talk.node.frontmatter.date}
            link={talk.node.frontmatter.eventpage}
          />
        ))}
        
      </ul>
    )}
  />
)

export default FutureTalks

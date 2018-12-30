import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import componentStyles from './now-current.module.css';


const NowCurrent = ({className}) => (
  <StaticQuery
    query={graphql`
      query CurrentNowQuery {
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
            limit: 1
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
    `}
    render={data => (
        <div className={`container ${componentStyles.container}`}>
            <div>
              <h3>Learning</h3>
              <p>I am currently enjoying learning more about:</p>
              <ol>
                <li>{data.allMarkdownRemark.edges[0].node.frontmatter.tech1}</li>
                <li>{data.allMarkdownRemark.edges[0].node.frontmatter.tech2}</li>
                <li>{data.allMarkdownRemark.edges[0].node.frontmatter.tech3}</li>
              </ol>
            </div>
            <div>
              <h3>Building</h3>
              <details>
                <summary>My current passion project is: <span>{data.allMarkdownRemark.edges[0].node.frontmatter.personalprojecttitle}</span></summary>
                <p>{data.allMarkdownRemark.edges[0].node.frontmatter.personalprojectabout}</p>
              </details> 
            </div>
            <div>
              <h3>Working</h3>
              <p>I am a <span>{data.allMarkdownRemark.edges[0].node.frontmatter.jobtitle}</span> at <span>{data.allMarkdownRemark.edges[0].node.frontmatter.jobcompany}</span></p>
            </div>
            <div className={componentStyles.main} dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html}} />
            <p className={componentStyles.updated}>
              This page was last updated on: <span>{data.allMarkdownRemark.edges[0].node.frontmatter.date}</span>. 
              <br />
              It is based on the <a href="https://sivers.org/nowff" target="_blank" rel="noopener noreferrer">/now page movement</a>.
            </p>
        </div>
    )}
  />
)

export default NowCurrent

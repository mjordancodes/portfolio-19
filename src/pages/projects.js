import React, { Component } from 'react';
import { graphql } from "gatsby";


import Layout from '../components/layout';
import TechList from '../components/Tech-List/tech-list';

import ProjectCard from '../components/Cards/Project-Card/project-card';

import componentStyles from './projects.module.css'

class ProjectsPage extends Component {
  render() {
    return (
      <Layout>
        <div className={`container ${componentStyles.container}`}>
        <h1>Recent Projects</h1>
        {this.props.data.allMarkdownRemark.edges.map(project => (
          <ProjectCard 
            title={project.node.frontmatter.title}
            image={project.node.frontmatter.screenshot} 
            github={project.node.frontmatter.github} 
            live={project.node.frontmatter.live} 
          >
            <div dangerouslySetInnerHTML={{ __html: project.html }} /> 
          </ProjectCard>
        ))}
          {/* <div className={componentStyles.github} >
            <a href="https://github.com/mjordancodes">
              <img src="/images/github.png" alt="github logo with custom octocat" />
            </a>
          </div>
          <div className={componentStyles.codepen} >
          <a href="https://codepen.io/mjordancodes">
              <img src="/images/codepen.png" alt="codepen logo with screenshot of a pen" />
            </a>
          </div> */}
          <div className={componentStyles.projectsInfo}>
            <h3>Technologies I Use:</h3>
            <TechList />
          </div>
        </div>
      </Layout>
    );
  }
}

export const projectListQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter : {
          layout:{
            eq:"project"
          }
        }
      }, 
      sort: {
        fields: [frontmatter___date], order: DESC
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            screenshot
            github
            live
          }
          html
        }
      }
    }
  }
`

export default ProjectsPage

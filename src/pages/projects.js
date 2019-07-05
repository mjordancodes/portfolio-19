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
        <h1>Recent Projects</h1>
        <ul className={componentStyles.projectGrid}>
          {this.props.data.allMarkdownRemark.edges.map(project => (
            <ProjectCard 
              title={project.node.frontmatter.title}
              image={project.node.frontmatter.screenshot} 
              github={project.node.frontmatter.github} 
              live={project.node.frontmatter.live} 
              techs={project.node.frontmatter.techs}
            >
              <div dangerouslySetInnerHTML={{ __html: project.node.html }} /> 
            </ProjectCard>
          ))}
        </ul>
          <div className={componentStyles.projectsInfo}>
            <h3>Technologies I Use:</h3>
            <TechList />
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
            techs
          }
          html
        }
      }
    }
  }
`

export default ProjectsPage

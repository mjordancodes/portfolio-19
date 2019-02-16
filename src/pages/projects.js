import React, { Component } from 'react';

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
        <ProjectCard 
          title="Michelle and Zack Wedding"
          live="http://michelleandzack.netlify.com/"
          github="https://github.com/mjordancodes/Michelle-and-Zack"
          description="I was told to go make a wedding site. So I did, but now the wedding is over and sometimes I get bored so I am continuing to be ridiculous. I built this using Gatsby. I had a lot of fun on this project using gatsby-image to set up the photo albums quickly. I also used styled-components for styling in this project."
          image="/assets/michelleandzack.png"
        />
        <ProjectCard 
          title="Beach Hillel"
          github="https://github.com/mjordancodes/Beach-Hillel"
          description="Newly built and designed website for the Beach Hillel group. Site is built using Gatsby. Connecting a CMS shortly."
          image="/assets/beach-hillel.png"
        />
        <ProjectCard 
          title="Girl Friend Factor"
          image="/assets/gff.png"
          live="https://girlfriendfactor.org/"
          description="Girl Friend Factor is a non-profit in Southern California that helps women with educational grants. I designed and rebuilt this website updating the technology from a basic html site to using WordPress to allow for easy updates for the non-technical staff/volunteers."
        />
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


export default ProjectsPage

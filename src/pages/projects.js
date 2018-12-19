import React, { Component } from 'react';

import Layout from '../components/layout';
import Header from '../components/Header/header';
import TechList from '../components/Tech-List/tech-list';

// import leaf from '../images/leaf.svg';

import componentStyles from './projects.module.css'

class ProjectsPage extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <div className={`container ${componentStyles.container}`}>
          <div className={componentStyles.github} >
            <a href="https://github.com/mjordancodes">
              <img src="/images/github.png" alt="github logo with custom octocat" />
            </a>
          </div>
          <div className={componentStyles.projectsInfo}>
            {/* <p>Collection of various projects and experiments created during my coding journey.</p>  */}
            <h3>Technologies I Use:</h3>
            <TechList />
          </div>
          <div className={componentStyles.codepen} >
          <a href="https://codepen.io/mjordancodes">
              <img src="/images/codepen.png" alt="codepen logo with screenshot of a pen" />
            </a>
          </div>
        </div>
      </Layout>
    );
  }
}


export default ProjectsPage

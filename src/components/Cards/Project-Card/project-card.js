import React from 'react';

// import componentStyles from './project-card.module.css';

const ProjectCard = ({ title, image, children, live, github, className }) => (
  <li className={className}>
    <img src={ image } alt="" />
    <div className="info">
      <h2>{ title }</h2>
      {children}
      
      { github ? (<a href={ github }>GitHub</a>) : <span /> }
      &nbsp;
      { live ? (<a href={ live }>Live Site</a>) : <span /> }

      {/* TECH LIST */}
    </div>

  </li>
)

export default ProjectCard
         
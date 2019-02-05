import React from 'react';

import componentStyles from './project-card.module.css';

const ProjectCard = ({ title, image, description, live, github }) => (
  <div>
    <img src={ image } alt="" />
    <h2>{ title }</h2>
    <p>{ description }</p>
    
    { github ? (<a href={ github }>GitHub</a>) : <span /> }
    &nbsp;
    { live ? (<a href={ live }>Live Site</a>) : <span /> }
  </div>
)

export default ProjectCard
         
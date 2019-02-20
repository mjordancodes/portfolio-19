import React from 'react';

const PuppyMember = ({name, portfolioURL, portfolio, githubURL, github, twitterURL, twitter, lookingForWork, role }) => (
  <li>
    <p>
      <span>Name:</span>
      {name}
    </p>
    {
      role ? (
        <p><span>Role:</span> {role} </p>
      ) : (
        <i />
      ) 
      
    }
    {
      portfolio && portfolioURL ? (
        <p>
          <span>Portfolio:</span>
          <a href={portfolioURL} target="_blank" rel="noopener noreferrer">
            {portfolio}
          </a>
        </p>
      ) :
      (
        <p><span>Portfolio:</span> Coming Soon!</p>
      )
    }
    {
      github && githubURL ? (
        <p>
          <span>GitHub:</span>
          <a href={githubURL} target="_blank" rel="noopener noreferrer">
            @{github}
          </a>
        </p>   
      ) :
      (
        <i />
      )
    }  
    {
      twitter && twitterURL ? (
        <p>
        <span>Twitter:</span> 
        <a href={twitterURL} target="_blank" rel="noopener noreferrer">
          @{twitter}
        </a>
      </p>
      ) :
      (
        <i />
      )
    }
  </li>
)

export default PuppyMember
         
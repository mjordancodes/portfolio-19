import React from 'react';

// import componentStyles from './simple-text.module.css';

const SiteCard = ({site, url, thumbnail, fullImg, className}) => (
  <li className={className}>
    <a href={url} target="_blank" without rel="noopener noreferrer">
      {site}
    </a>
    <a href={fullImg}>
      <img src={thumbnail} />
    </a>
  </li>
)

export default SiteCard
         
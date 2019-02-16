import React from 'react';

// import componentStyles from './simple-text.module.css';

const SiteCard = ({site, url, thumbnail, fullImg, desc, className}) => (
  <li className={className}>
    <a href={fullImg}>
      <img src={thumbnail} alt={`screen shot of ${site} `} />
    </a>
    <p>{desc}</p>
    <a href={url} target="_blank" without rel="noopener noreferrer">
      {site}
    </a>
  </li>
)

export default SiteCard
         
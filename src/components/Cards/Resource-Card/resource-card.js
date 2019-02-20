import React from 'react';

import { FaTags, FaDollarSign } from 'react-icons/fa';

import componentStyles from './resource-card.module.css';

const ResourceCard = ({ title, link, children, className, tags, priceModel, types }) => (
  <li className={`${className} ${componentStyles.card}`}>
    <h2>
      <a href={link}>{title}</a>
    </h2>    

    <div className={componentStyles.info}>
      <ul className={componentStyles.tags}>
        <li><FaTags /></li>
        {tags.map(tag => (
          <li>{tag}</li>
        ))}
      </ul>
      <ul className={componentStyles.price}>
        <li><FaDollarSign /></li>
      {priceModel.map(price => (
          <li>{price}</li>
        ))}
      </ul>
      <ul className={componentStyles.type}>
      {types.map(type => (
          <li>{type}</li>
        ))}
      </ul>
    </div>

    {children}
  </li>
)

export default ResourceCard
         
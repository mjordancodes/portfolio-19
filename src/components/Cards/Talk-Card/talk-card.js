import React from 'react';
import { Link } from "gatsby";


import componentStyles from './talk-card.module.css';

const TalkCard = ({className, link, img, title, date }) => (
  <li className={`${className} ${componentStyles.card} `}>
    <Link to={link}>
    <img src={img} alt={`Cover Slide for ${title}`} />
    <div className={componentStyles.info} >
      <h2>{title}</h2>
      <p>{date}</p>
    </div>
    </Link>
  </li>
)

export default TalkCard
         
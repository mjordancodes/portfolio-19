import React from 'react';

import { FaRegNewspaper, FaVideo, FaBook, FaChalkboardTeacher, FaToolbox, FaRegStickyNote } from 'react-icons/fa'

import componentStyles from './resource-card.module.css';

const ResourceCard = ({ title, link, icon, tags, type, price, children,  className }) => (
  <li  className={`${className} ${type} ${price} ${type} ${componentStyles.card}`}>
    {icon ? 
      (<img src={icon} alt={`Icon for ${title}`}/>)
      : (<span className={componentStyles.noImg} />)
    }
    <div className={componentStyles.info}>
      <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
      <div>
        <span>
          { type === "Article" 
            ? (<FaRegNewspaper />) 
            : (null) }
          { type === "Video" 
            ? (<FaVideo />) 
            : (null) }
          { type === "Book" 
            ? (<FaBook />) 
            : (null) }
          { type === "Course" 
            ? (<FaChalkboardTeacher />) 
            : (null) }
          { type === "Tool" 
            ? (<FaToolbox />) 
            : (null) }
          { type === "Documentation" 
            ? (<FaRegStickyNote />) 
            : (null) }
        </span>
        <span>
          {price}
        </span>
      </div>
    </div> {/* /info */}
    {children}
    <ul className={componentStyles.tags}>
      {tags.map(tag => (
        <li>
          {tag}
        </li>
      ))} 
    </ul>
  </li>
)

export default ResourceCard
         
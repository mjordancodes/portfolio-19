import React from 'react';

import componentStyles from './simple-text.module.css';

const SimpleTextImage = ({title, children, className, image}) => (
  <section className={className}>
    <img src={image} alt={title} />
    <header>
      <h2 className={componentStyles.title}>{title}</h2>
    </header>
    <div className={componentStyles.content}>
      {children}
    </div>
  </section>
)

export default SimpleTextImage
         
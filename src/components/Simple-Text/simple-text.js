import React from 'react';

import componentStyles from './simple-text.module.css';

const SimpleText = ({title, children, className}) => (
  <section className={className}>
    <header>
      <h2 className={componentStyles.title}>{title}</h2>
    </header>
    <div className={componentStyles.content}>
      {children}
    </div>
  </section>
)

export default SimpleText
         
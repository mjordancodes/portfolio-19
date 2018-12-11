import React from 'react'

import componentStyles from './header.module.css';

const HomeHeader = () => (
  <header className={componentStyles.headerHome}>
    <nav>
      <div className={componentStyles.pages}>
        <a href="/about">about</a>
        <a href="/projects">projects</a>
        <a href="/blog">blog</a>
        <a href="https://slides.mjordan.codes/">speaking</a>
      </div>
    </nav>
  </header>
)

export default HomeHeader
         
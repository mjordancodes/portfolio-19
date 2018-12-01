import React from 'react'
import SocialIcons from '../Social-Icons/social-icons';

import componentStyles from './header.module.css';

const Header = () => (
  <header className={componentStyles.header}>
    <SocialIcons />
    <h1><a href="/">mJordan</a></h1>
    <nav>
      <div className={componentStyles.pages}>
        <a href="/about">about</a>
        <a href="/projects">projects</a>
        <a href="/blog">blog</a>
        <a href="/speaking">speaking</a>
      </div>
    </nav>
  </header>
)

export default Header
         
import React from 'react'
import SocialIcons from '../Social-Icons/social-icons';
import Logo from '../Logo/logo';

import componentStyles from './header.module.css';

const Header = () => (
  <header className={componentStyles.header}>
    <SocialIcons className={componentStyles.hideMobile} />
    <Logo className={componentStyles.logo} />
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

export default Header
         
import React from 'react'
import SocialIcons from '../Social-Icons/social-icons';
import Logo from '../Logo/logo';

import componentStyles from './header.module.css';

import Nav from './nav';

const Header = () => (
  <header className={componentStyles.header}>
    <SocialIcons className={componentStyles.hideMobile} />
    <Logo className={componentStyles.logo} />
    <Nav />    
  </header>
)

export default Header
         
import React from 'react'
import SocialIcons from '../Social-Icons/social-icons';
import Logo from '../Logo/logo';

import componentStyles from './header.module.css';

import HeaderNav from './nav';

const Header = () => (
  <header className={componentStyles.header}>
    <SocialIcons className={componentStyles.hideMobile} />
    <Logo className={componentStyles.logo} />
    <HeaderNav />    
  </header>
)

export default Header
         
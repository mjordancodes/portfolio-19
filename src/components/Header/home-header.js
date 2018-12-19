import React from 'react'

import componentStyles from './header.module.css';

import HeaderNav from './nav';

const HomeHeader = () => (
  <header className={componentStyles.headerHome}>
    <HeaderNav />
  </header>
)

export default HomeHeader
         
import React from 'react'

import componentStyles from './header.module.css';

import Nav from './nav';

const HomeHeader = () => (
  <header className={componentStyles.headerHome}>
    <Nav />
  </header>
)

export default HomeHeader
         
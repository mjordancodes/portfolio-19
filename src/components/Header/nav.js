import React, { Component }  from 'react'

import componentStyles from './header.module.css';

class HeaderNav extends Component {
  render() {
    return (
      <nav className={componentStyles.pageNav} id="page-nav">
        <div className={componentStyles.hamburger}>
          <input type="checkbox" id="hamburger" />
          <label htmlFor="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className={componentStyles.pages} id="page-list">
          <a href="/about">about</a>
          <a href="/projects">projects</a>
          <a href="/blog">blog</a>
          <a href="/speaking">speaking</a>
        </div>
      </nav>
    )
  }
  componentDidMount() {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("page-nav");
    const pageList = document.getElementById("page-list");


    hamburger.addEventListener('click', function() {
      if(menu.classList.contains('closed')) {
        menu.classList.remove('closed')
        pageList.setAttribute('style', 'right: -55vw;');
      } else {
        menu.classList.add('closed')
        pageList.setAttribute('style', 'right: -5vw;');
      }
    });
  }
}

export default HeaderNav
         
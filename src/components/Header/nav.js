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
        <ul className={componentStyles.pages} id="page-list">
          <li>
            <a href="/about">about</a>
            <ul>
              <li>
                <a href="/now">now</a>
              </li>
              <li>
                <a href="/uses">uses</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/projects">projects</a>
          </li>
          <li>
            <a href="/blog">blog</a>
            <ul>
              <li>
                <a href="/portfolio">portfolio</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/speaking">speaking</a>
          </li>
        </ul>
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
         
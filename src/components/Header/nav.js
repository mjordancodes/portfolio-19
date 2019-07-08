import React from 'react'
import { Link } from "gatsby";


import { FaUserAstronaut, FaRegClock, FaToolbox, FaCode, FaMicrophoneAlt, FaDog, FaPencilAlt, FaBriefcase, FaAngleDoubleLeft, FaHashtag } from 'react-icons/fa';

import componentStyles from './header.module.css';

const Nav = () => (
  <div>
    <input type="checkbox" id="toggleBox" className={componentStyles.toggleBox} />
    <label for ="toggleBox" className={componentStyles.toggle} >
      <FaAngleDoubleLeft /
      >Menu
    </label>
    <nav className={componentStyles.nav}>
      <div>
        <Link to="/about"><span><FaUserAstronaut /></span>About</Link>
        <div>
          <Link to="/now"><FaRegClock />Now</Link>
          <Link to="/uses"><FaToolbox />Uses</Link>
          <Link to="/resume"><FaBriefcase />Resume</Link>
        </div>
      </div>
      <div>
        <Link to="projects"><span><FaCode /></span>Projects</Link>
        <div>
          <Link to="speaking"><FaMicrophoneAlt />Speaking</Link>
          <Link to="100-days-of-content"><FaHashtag />100 Days of Content</Link>
          <Link to="https://portfoliopuppies.dev"><FaDog />Puppies and Portfolios</Link>
        </div>
      </div>
      <div>
        <Link to="/blog"><span><FaPencilAlt /></span>Blog</Link>
      </div>
    </nav>
  </div>
)

export default Nav
         
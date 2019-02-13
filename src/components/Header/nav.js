import React from 'react'
import { Link } from "gatsby";


import { FaUserAstronaut, FaRegClock, FaToolbox, FaCode, FaWordpressSimple, FaMicrophoneAlt, FaDog, FaLaptopCode, FaPencilAlt, FaBriefcase } from 'react-icons/fa';

import componentStyles from './header.module.css';

const Nav = () => (
  <nav className={componentStyles.nav}>
    <div>
      <Link to="/about"><FaUserAstronaut /><span>About</span></Link>
      <div>
        <Link><FaRegClock />Now</Link>
        <Link><FaToolbox />Uses</Link>
        <Link><FaBriefcase />Resume</Link>
      </div>
    </div>
    <div>
      <Link><FaCode /><span>Projects</span></Link>
      <div>
        <Link><FaLaptopCode />Portfolio</Link>
        <Link><FaWordpressSimple />WordPress to Gatsby</Link>
        <Link><FaMicrophoneAlt />Speaking</Link>
        <Link><FaDog />Puppies and Portfolios</Link>
      </div>
    </div>
    <div>
      <Link><FaPencilAlt /><span>Blog</span></Link>
    </div>
  </nav>
)

export default Nav
         
import React, { Component } from 'react'
import { TimelineMax,  } from 'gsap/all'; 

import BackgroundImage from '../../images/Landing-Desk/home-background.svg'
import DeskItems from '../../images/Landing-Desk/desk-items.svg'

import { FaInstagram, FaTwitter, FaGithubAlt, FaCodepen, FaLinkedin } from 'react-icons/fa';

import componentStyles from './landing-desk.module.css'

class DeskLanding extends Component {
  render() {
    return (
      <section className={componentStyles.container}>
        <BackgroundImage className={componentStyles.bg} />
        <DeskItems className={componentStyles.deskitems} />
        <header>
          <hgroup>
            <h1>mJordan</h1>
            <p className={componentStyles.tagline}>I design, develop & teach the web</p>
            <div className={componentStyles.buttons}>
              <div className={componentStyles.ctas}>
                <a href="/projects" className={componentStyles.cta}>Projects</a>
                <a href="/about" className={componentStyles.cta}>About</a>
              </div>
              <div className={componentStyles.social} >
                <a href="https://www.twitter.com/mjordancodes/" target="_blank" rel="noopener noreferrer" className={`${componentStyles.faTwitter} ${componentStyles.fa}`}>
                  <FaTwitter />
                </a>
                <a href="https://www.github.com/mjordancodes/" target="_blank" rel="noopener noreferrer" className={`${componentStyles.faGithub} ${componentStyles.fa}`}>
                  <FaGithubAlt />
                </a>
                <a href="https://www.codepen.com/mjordancodes/" target="_blank" rel="noopener noreferrer" className={`${componentStyles.faCodepen} ${componentStyles.fa}`}>
                  <FaCodepen />
                </a>
                <a href="https://www.linkedin.com/in/michellejl/" target="_blank" rel="noopener noreferrer" className={`${componentStyles.faLinkedin} ${componentStyles.fa}`}>
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/mjordancodes/" target="_blank" rel="noopener noreferrer" className={`${componentStyles.faInstagram} ${componentStyles.fa}`}>
                  <FaInstagram />
                </a>
              </div>
            </div>
          </hgroup>
        </header>
      </section>
    );
  }

  componentDidMount() {
    let lochmara      = '#326496',
        comp          = '#966432',
        splitRed      = '#963232',
        splitYellow   = '#969632',
        triPink       = '#963264',
        triGreen      = '#649632';

    let allColors = [lochmara, comp, splitRed]

    let lightRed      = '#f9dcdc',
        lightOrange   = '#ffeede',
        lightYellow   = '#f7f6e2',
        lightGreen    = '#e1f9e4',
        lightBlue     = '#d2e9f9',
        lightPurple   = '#f5e3fc';

    const bang = document.getElementById('bang').querySelectorAll('path');
    const bangColorChange = new TimelineMax({repeat: -1});
    bangColorChange.to(bang, 2, {fill: lightPurple})
                   .to(bang, 2, {fill: lightRed})
                   .to(bang, 2, {fill: lightOrange})
                   .to(bang, 2, {fill: lightYellow})
                   .to(bang, 2, {fill: lightGreen})
                   .to(bang, 2, {fill: lightBlue});

    const closingBrackets = document.getElementById('closing-brackets').querySelectorAll('path');
    const cbColorChange = new TimelineMax({repeat: -1, delay: 1});
    cbColorChange.to(closingBrackets, 2, {fill: lightPurple})
                   .to(closingBrackets, 2, {fill: lightRed})
                   .to(closingBrackets, 2, {fill: lightOrange})
                   .to(closingBrackets, 2, {fill: lightYellow})
                   .to(closingBrackets, 2, {fill: lightGreen})
                   .to(closingBrackets, 2, {fill: lightBlue});
    
    const brackets = document.getElementById('brackets').querySelectorAll('path');
    const bracketsColorChange = new TimelineMax({repeat: -1, delay: 2});
    bracketsColorChange.to(brackets, 2, {fill: lightPurple})
                  .to(brackets, 2, {fill: lightRed})
                  .to(brackets, 2, {fill: lightOrange})
                  .to(brackets, 2, {fill: lightYellow})
                  .to(brackets, 2, {fill: lightGreen})
                  .to(brackets, 2, {fill: lightBlue});

    const curlyBrackets = document.getElementById('curly-brackets').querySelectorAll('path');
    const curlyBracketsColorChange = new TimelineMax({repeat: -1, delay: 3});
    curlyBracketsColorChange.to(curlyBrackets, 2, {fill: lightPurple})
                    .to(curlyBrackets, 2, {fill: lightRed})
                    .to(curlyBrackets, 2, {fill: lightOrange})
                    .to(curlyBrackets, 2, {fill: lightYellow})
                    .to(curlyBrackets, 2, {fill: lightGreen})
                    .to(curlyBrackets, 2, {fill: lightBlue});

    const semiColon = document.getElementById('semi-colon').querySelectorAll('path');
    const semiColonColorChange = new TimelineMax({repeat: -1, delay: 4});
    semiColonColorChange.to(semiColon, 2, {fill: lightPurple})
                   .to(semiColon, 2, {fill: lightRed})
                   .to(semiColon, 2, {fill: lightOrange})
                   .to(semiColon, 2, {fill: lightYellow})
                   .to(semiColon, 2, {fill: lightGreen})
                   .to(semiColon, 2, {fill: lightBlue});

    const windowFrame = document.getElementById('window-outline');
    const windowFrameColonColorChange = new TimelineMax({repeat: -1});
    windowFrameColonColorChange.to(windowFrame, 10, {stroke: lightPurple})
                   .to(windowFrame, 10, {stroke: lightRed})
                   .to(windowFrame, 10, {stroke: lightOrange})
                   .to(windowFrame, 10, {stroke: lightYellow})
                   .to(windowFrame, 10, {stroke: lightGreen})
                   .to(windowFrame, 10, {stroke: lightBlue});
  }

}


export default DeskLanding



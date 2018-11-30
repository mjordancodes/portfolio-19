import React, { Component } from 'react'
import { TimelineMax,  } from 'gsap/all'; 

import BackgroundImage from '../../images/Landing-Desk/home-background.svg'
import DeskItems from '../../images/Landing-Desk/desk-items.svg'

import { FaInstagram, FaTwitter, FaGithubAlt, FaCodepen, FaLinkedin } from 'react-icons/fa';

import componentStyles from './landing-desk.module.css'

let lochmara      = '#326496';

// let allColors = ['#FA6050', '#FCB315', '#FFD203', '#BAD533', '#7ACED7'];
let allColors = ['#AE70AF', '#F37E43', '#E66565', '#FFD603', '#9FCEB4', '#ACCAE8', '#9295CA'];

let lightRed      = '#f9dcdc',
    lightOrange   = '#ffeede',
    lightYellow   = '#f7f6e2',
    lightGreen    = '#e1f9e4',
    lightBlue     = '#d2e9f9',
    lightPurple   = '#f5e3fc';

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function getRandomColor() {
    let num = getRandomInt(allColors.length);
    return allColors[num];    
  }
    
class DeskLanding extends Component {
  render() {
    return (
      <section className={componentStyles.container}>
        <BackgroundImage className={componentStyles.bg} />
        <DeskItems className={componentStyles.deskitems} />
        <header>
          <hgroup>
            <h1 id="name">mJordan</h1>
            <p className={componentStyles.tagline}>I design, develop & teach the web</p>
            <div className={componentStyles.buttons}>
              <div className={componentStyles.ctas}>
                <a href="/projects" className={`${componentStyles.cta} cta`}>Projects</a>
                <a href="/about" className={`${componentStyles.cta} cta`}>About</a>
              </div>
              <div className={componentStyles.social} >
                <a href="https://www.twitter.com/mjordancodes/" target="_blank" rel="noopener noreferrer" className={`${componentStyles.faTwitter} ${componentStyles.fa} fa`}>
                  <FaTwitter />
                </a>
                <a href="https://www.github.com/mjordancodes/" target="_blank" rel="noopener noreferrer" className={`${componentStyles.faGithub} ${componentStyles.fa} fa`}>
                  <FaGithubAlt />
                </a>
                <a href="https://www.codepen.com/mjordancodes/" target="_blank" rel="noopener noreferrer" className={`${componentStyles.faCodepen} ${componentStyles.fa} fa`}>
                  <FaCodepen />
                </a>
                <a href="https://www.linkedin.com/in/michellejl/" target="_blank" rel="noopener noreferrer" className={`${componentStyles.faLinkedin} ${componentStyles.fa} fa`}>
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/mjordancodes/" target="_blank" rel="noopener noreferrer" className={`${componentStyles.faInstagram} ${componentStyles.fa} fa`}>
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

    // Randomize name colors
    const name = document.getElementById('name').textContent;
    let formattedName = '';
    for(let i = 0; i < name.length; i++) {
      formattedName += `<span style="color: ${getRandomColor()}">${name[i]}</span>`;
    }
    document.getElementById('name').innerHTML = formattedName;

    // Randomize color of CTAs
    const ctaButtons = document.querySelectorAll('.cta');
    for(let i = 0; i < ctaButtons.length; i++) {
      let color = getRandomColor();
      let attrs = `border-color: ${color}; color: ${color}`
      ctaButtons[i].setAttribute('style', attrs)

      ctaButtons[i].onmouseover = function(){
        this.setAttribute('style', `border-color: #000`)
      }
      ctaButtons[i].onmouseout = function(){
        this.setAttribute('style', `border-color: ${color}`)
      }
    }

    // object.onmouseover = function(){myScript};

    const social = document.querySelectorAll('.fa');
    for(let i = 0; i < social.length; i++) {
      let color = getRandomColor();
      let attrs = `background: ${color}`
      social[i].setAttribute('style', attrs)
      social[i].onmouseover = function(){
        this.setAttribute('style', `background: #fff; color: ${color};`)
      }
      social[i].onmouseout = function(){
        this.setAttribute('style', `background: ${color}; color: #fff;`)
      }
    }

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



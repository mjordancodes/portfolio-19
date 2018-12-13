import React, { Component } from 'react'
import { TimelineMax, Power0 } from 'gsap/all'; 
import SocialIcons from '../Social-Icons/social-icons';
import Logo from '../Logo/logo';

import BackgroundImage from '../../images/Landing-Desk/home-background.svg';
import DeskItems from '../../images/Landing-Desk/desk-items.svg';

import componentStyles from './landing-desk.module.css';

import Fishtank from './fishtank';
import Computer from './computer';
import Books from './books';
import Cup from './pencil-cup';

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
        {/* <DeskItems className={componentStyles.deskitems} /> */}
        <div className={componentStyles.deskitems}>
          <Cup />
          <Books />
          <Computer />
          <Fishtank />
        </div>
        <header>
          <hgroup>
            <Logo />
            <p className={`title ${componentStyles.tagline}`}>I design, develop &amp; teach the web</p>
            <div className={componentStyles.buttons}>
              <div className={componentStyles.ctas}>
                <a href="/projects" className={`${componentStyles.cta} cta`}>Projects</a>
                <a href="/about" className={`${componentStyles.cta} cta`}>About</a>
              </div>
              <SocialIcons />
            </div>
          </hgroup>
        </header>
      </section>
    );
  }

  componentDidMount() {
    // Randomize color of CTAs
    const ctaButtons = document.querySelectorAll('.cta');
    for(let i = 0; i < ctaButtons.length; i++) {
      let color = getRandomColor();
      let attrs = `border-color: ${color}; color: ${color}`;
      ctaButtons[i].setAttribute('style', attrs);

      ctaButtons[i].onmouseover = function(){
        this.setAttribute('style', `border-color: #000; color: #000`);
      }
      ctaButtons[i].onmouseout = function(){
        color = getRandomColor();
        this.setAttribute('style', `border-color: ${color}; color: ${color}`);
      }
    }

    

    // Background Animation
    const bang = document.getElementById('bang').querySelectorAll('path');
    const closingBrackets = document.getElementById('closing-brackets').querySelectorAll('path');
    const brackets = document.getElementById('brackets').querySelectorAll('path');
    const curlyBrackets = document.getElementById('curly-brackets').querySelectorAll('path');
    const semiColon = document.getElementById('semi-colon').querySelectorAll('path');

    const backgroundChars = [bang, closingBrackets, brackets, curlyBrackets, semiColon];

    for (let i = 0; i < backgroundChars.length; i++) {
      new TimelineMax({repeat: -1, delay: i})
        .to(backgroundChars[i], 2, {fill: lightPurple})
        .to(backgroundChars[i], 2, {fill: lightRed})
        .to(backgroundChars[i], 2, {fill: lightOrange})
        .to(backgroundChars[i], 2, {fill: lightYellow})
        .to(backgroundChars[i], 2, {fill: lightGreen})
        .to(backgroundChars[i], 2, {fill: lightBlue});

    }

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



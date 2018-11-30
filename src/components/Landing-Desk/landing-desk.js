import React, { Component } from 'react'
import { TimelineMax, Power0 } from 'gsap/all'; 

import BackgroundImage from '../../images/Landing-Desk/home-background.svg'
import DeskItems from '../../images/Landing-Desk/desk-items.svg'

import { FaInstagram, FaTwitter, FaGithubAlt, FaCodepen, FaLinkedin } from 'react-icons/fa';

import componentStyles from './landing-desk.module.css'

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

    // Randomize color of social icons
    const social = document.querySelectorAll('.fa');
    for(let i = 0; i < social.length; i++) {
      let color = getRandomColor();
      let attrs = `background: ${color}`
      social[i].setAttribute('style', attrs);
      social[i].onmouseover = function(){
        this.setAttribute('style', `background: #fff; color: ${color};`);
      };
      social[i].onmouseout = function(){
        color = getRandomColor();
        this.setAttribute('style', `background: ${color}; color: #fff; transition: 1s;`);
      }
    }

    // Set Book titles/authors
    const svgBooks = [
      document.getElementById('book-top'), 
      document.getElementById('book-middle'), 
      document.getElementById('book-bottom') ]

    const recentlyRead = [
      {title: 'SVG Animations',
        author: 'Sarah Drasner'},
      {title: 'Knife of Dreams',
        author: 'Robert Jordan'},
      {title: 'Crossroads of Twilight',
        author: 'Robert Jordan'},
    ]

    for(let i = 0; i < svgBooks.length; i++) {
      let title = svgBooks[i].querySelector('[id*="title"]');
      title.textContent = recentlyRead[i].title;

      let author = svgBooks[i].querySelector('[id*="author"]');
      author.textContent = recentlyRead[i].author;
    }

    // Background Animation
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

    // Fishtank Animations
    const fish = document.getElementById('fish');
    const fishAnimation = new TimelineMax({repeat: -1});
    fishAnimation.to(fish, 3, {x:50, rotation: -15, ease: Power0.easeNone})
                 .to(fish, 1, {x:180, scaleX:-1, rotation:15, ease: Power0.easeNone})
                 .to(fish, 3, {x:120, y:-20, ease: Power0.easeNone})
                 .to(fish, 1, {x:0, scaleX:1, rotation:-15, ease: Power0.easeNone})
                 .to(fish, 3, {x:50, y:-40, ease: Power0.easeNone})
                 .to(fish, 1, {x:180, scaleX:-1, rotation:15, ease: Power0.easeNone})
                 .to(fish, 3, {x:120, y:-60, ease: Power0.easeNone})
                 .to(fish, 1, {x:0, scaleX:1, rotation:-15, ease: Power0.easeNone})
                 .to(fish, 3, {x:50, y:-80, ease: Power0.easeNone})
                 .to(fish, 1, {x:180, scaleX:-1, rotation:15, ease: Power0.easeNone})
                 .to(fish, 3, {x:120, y:-100, ease: Power0.easeNone})
                 .to(fish, 1, {x:0, scaleX:1, rotation:-15, ease: Power0.easeNone})
                 .to(fish, 3, {x:50, y:-120, ease: Power0.easeNone})
                 .to(fish, 1, {x:180, scaleX:-1, rotation:15, ease: Power0.easeNone})
                 .to(fish, 3, {x:120, y:-140, ease: Power0.easeNone})
                 .to(fish, 1, {x:0, scaleX:1, rotation:-15, ease: Power0.easeNone})
                 .to(fish, 3, {x:50, y:-160, ease: Power0.easeNone})
                 .to(fish, 1, {x:180, scaleX:-1, rotation:15, ease: Power0.easeNone})
                 .to(fish, 3, {x:120, y:-180, ease: Power0.easeNone})
                 .to(fish, 1, {x:0, scaleX:1, rotation:-15, ease: Power0.easeNone})
                 .to(fish, 3, {x:50, y:-200, ease: Power0.easeNone})
                 .to(fish, 1, {x:180, scaleX:-1, rotation:15, ease: Power0.easeNone})
                 .to(fish, 3, {x:120, y:-220, ease: Power0.easeNone})
                 .to(fish, 1, {x:0, scaleX:1, rotation:-15, ease: Power0.easeNone})
                 .to(fish, 3, {x:50, y:-240, ease: Power0.easeNone})
                 .to(fish, 1, {x:180, scaleX:-1, rotation:15, ease: Power0.easeNone})
                 .to(fish, 3, {x:120, y:-220, ease: Power0.easeNone})
                 .to(fish, 1, {x:0, scaleX:1, rotation:15, ease: Power0.easeNone})
                 .to(fish, 3, {x:50, y:-200, ease: Power0.easeNone})
                 .to(fish, 1, {x:180, scaleX:-1, rotation:-15, ease: Power0.easeNone})
                 .to(fish, 3, {x:120, y:-180, ease: Power0.easeNone})
                 .to(fish, 1, {x:0, scaleX:1, rotation:15, ease: Power0.easeNone})
                 .to(fish, 3, {x:50, y:-160, ease: Power0.easeNone})
                 .to(fish, 1, {x:180, scaleX:-1, rotation:-15, ease: Power0.easeNone})
                 .to(fish, 3, {x:120, y:-140, ease: Power0.easeNone})
                 .to(fish, 1, {x:0, scaleX:1, rotation:15, ease: Power0.easeNone})
                 .to(fish, 3, {x:50, y:-120, ease: Power0.easeNone})
                 .to(fish, 1, {x:180, scaleX:-1, rotation:-15, ease: Power0.easeNone})
                 .to(fish, 3, {x:120, y:-100, ease: Power0.easeNone})
                 .to(fish, 1, {x:0, scaleX:1, rotation:15, ease: Power0.easeNone})
                 .to(fish, 3, {x:50, y:-80, ease: Power0.easeNone})
                 .to(fish, 1, {x:180, scaleX:-1, rotation:-15, ease: Power0.easeNone})
                 .to(fish, 3, {x:120, y:-60, ease: Power0.easeNone})
                 .to(fish, 1, {x:0, scaleX:1, rotation:15, ease: Power0.easeNone})
                 .to(fish, 3, {x:50, y:-40, ease: Power0.easeNone})
                 .to(fish, 1, {x:180, scaleX:-1, rotation:-15, ease: Power0.easeNone})
                 .to(fish, 3, {x:120, y:-20, ease: Power0.easeNone})
                 .to(fish, 1, {x:0, scaleX:1, rotation:15, ease: Power0.easeNone})
                 .to(fish, 3, {x:50, y:0, ease: Power0.easeNone})


    const  bubble1 = document.getElementById('bubble1');
    const  bubble2 = document.getElementById('bubble2');
    const  bubble3 = document.getElementById('bubble3');
    const  bubble4 = document.getElementById('bubble4');
    const  bubble5 = document.getElementById('bubble5');
    const  bubble6 = document.getElementById('bubble6');
    const  bubble7 = document.getElementById('bubble7');
    const  bubble8 = document.getElementById('bubble8');

    // const bubbles = [bubble1, bubble2, bubble3, bubble4, bubble5, bubble6, bubble7, bubble8]
    const bubbles = [bubble3, bubble1, bubble7, bubble6, bubble8, bubble2, bubble5, bubble4]

    for(let i = 0; i < bubbles.length; i++) {
      new TimelineMax({repeat: -1, delay: i})
        .to(bubbles[i], 1, {y: -50, x:10, ease: Power0.easeNone})
        .to(bubbles[i], 1, {y: -100, x:-10, scale: 1.5, ease: Power0.easeNone})
        .to(bubbles[i], 1, {y: -150, x:10, ease: Power0.easeNone})
        .to(bubbles[i], 1, {y: -200, x:-10, scale: 2, ease: Power0.easeNone})
        .to(bubbles[i], 1, {y: -250, x:10, ease: Power0.easeNone})
        .to(bubbles[i], 1, {y: -300, x:-10, scale: 2.5, ease: Power0.easeNone})
        .to(bubbles[i], 1, {y: -350, x:10, ease: Power0.easeNone})
        .to(bubbles[i], 1, {y: -400, x:-10, scale: 3, ease: Power0.easeNone})
        .to(bubbles[i], 1, {y: -450, x:10, ease: Power0.easeNone})
        .to(bubbles[i], 1, {y: -500, x:-10, scale: 3.5, ease: Power0.easeNone})
        .to(bubbles[i], 1, {y: -550, x:10, ease: Power0.easeNone})
        .to(bubbles[i], 1, {y: -600, x:-10, ease: Power0.easeNone})
    }

    // Stickers
    const debugging = document.getElementById('rubber-duck-debugger');
    const rdcss = document.getElementById('css-duck');
    const rdhtml = document.getElementById('html-duck');
    const rdjs = document.getElementById('javascript-duck');
    const rdnode = document.getElementById('node-duck');
    const rdterminal = document.getElementById('terminal-duck');

    const stickerAnimations = new TimelineMax({delay: 2});

    stickerAnimations.from(debugging, 2, {autoAlpha: 0, ease: Power0.easeNone})
                     .from(rdhtml, 2, {autoAlpha: 0, ease: Power0.easeNone})
                     .from(rdjs, 2, {autoAlpha: 0, ease: Power0.easeNone})
                     .from(rdcss, 2, {autoAlpha: 0, ease: Power0.easeNone})
                     .from(rdterminal, 2, {autoAlpha: 0, ease: Power0.easeNone})
                     .from(rdnode, 2, {autoAlpha: 0, ease: Power0.easeNone})

  }
}


export default DeskLanding



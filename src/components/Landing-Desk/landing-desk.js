import React, { Component } from 'react'
import { TimelineMax, Power0 } from 'gsap/all'; 
import SocialIcons from '../Social-Icons/social-icons';
import Logo from '../Logo/logo';

import BackgroundImage from '../../images/Landing-Desk/home-background.svg';
import DeskItems from '../../images/Landing-Desk/desk-items.svg';

import componentStyles from './landing-desk.module.css';

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
            <Logo />
            <p className={`title ${componentStyles.tagline}`}>I design, develop & teach the web</p>
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

      svgBooks[i].addEventListener('click', function() {
        window.location.href = '/books-read'
      })
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

    const allStickers = [debugging, rdcss, rdhtml, rdjs, rdnode, rdterminal];

    for (let i = 0; i < allStickers.length; i++) {
      allStickers[i].addEventListener('click', function() {
        window.location.href = '/stickers';
      });
    }

    const stickerAnimations = new TimelineMax({delay: 2});
    stickerAnimations.from(debugging, 2, {autoAlpha: 0, ease: Power0.easeNone})
                     .from(rdhtml, 2, {autoAlpha: 0, ease: Power0.easeNone})
                     .from(rdjs, 2, {autoAlpha: 0, ease: Power0.easeNone})
                     .from(rdcss, 2, {autoAlpha: 0, ease: Power0.easeNone})
                     .from(rdterminal, 2, {autoAlpha: 0, ease: Power0.easeNone})
                     .from(rdnode, 2, {autoAlpha: 0, ease: Power0.easeNone})

    document.getElementById('camera').addEventListener('click', function() {
      window.location.href = 'http://threewoodenpigeons.com';
    })

  }
}


export default DeskLanding



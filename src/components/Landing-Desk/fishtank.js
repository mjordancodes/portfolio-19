import React, { Component } from 'react'
// import { TimelineMax, Power0 } from 'gsap/all'; 

import componentStyles from './landing-desk.module.css';

import FishtankItem from '../../images/Landing-Desk/fishtank.svg';

const { TimelineMax, Power0 } = require('gsap/all');


class Fishtank extends Component {
  render() {
    return (
      <FishtankItem className={componentStyles.fishtank} />
    )
  }

  componentDidMount() {
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

  }

}

export default Fishtank
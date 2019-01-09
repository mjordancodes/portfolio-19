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

    let yNum = -20;
    fishAnimation.to(fish, 3, {ease: Power0.easeNone,   x: 50,   rotation: -15,  y: 0});

    for (let i = 0; i < 13; i++) {
      fishAnimation.to(fish, 1, {ease: Power0.easeNone,   x: 180,  rotation: 15,   scaleX:-1})
                   .to(fish, 3, {ease: Power0.easeNone,   x: 120,  y: yNum});
      
    i <= 5 ? yNum -= 20 : yNum += 20;    
      
    fishAnimation.to(fish, 1, {ease: Power0.easeNone,   x: 0,    rotation: -15,   scaleX:1})
                 .to(fish, 3, {ease: Power0.easeNone,   x:50,    y: yNum});

    i <= 5 ? yNum -= 20 : yNum += 20;    
    }

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
      const bubbleAnimation = new TimelineMax({repeat: -1, delay: i})

      let scaleNum = 1;
      let xNum;
      for(let j = 0; j < 12; j++) {
        j % 2 === 0 ? xNum = 10 : xNum = -10;
        scaleNum += 0.25
        bubbleAnimation.to(bubbles[i], 1, {y: (j * -50), x: xNum, scale: scaleNum, ease: Power0.easeNone})
      }
    }
  }

}

export default Fishtank
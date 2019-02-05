import React, { Component } from 'react'
import { TimelineMax, Power0 } from 'gsap/all'; 

import componentStyles from './landing-desk.module.css';

import ComputerItem from '../../images/Landing-Desk/computer.svg';

class Computer extends Component {
  render() {
    return (
      <ComputerItem className={componentStyles.computer} />
    )
  }

  componentDidMount() {
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

  }
}

export default Computer
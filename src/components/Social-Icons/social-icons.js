import React, { Component } from 'react'
import { FaInstagram, FaTwitter, FaGithubAlt, FaCodepen, FaLinkedin } from 'react-icons/fa';

import componentStyles from './social-icons.module.css';

let allColors = ['#AE70AF', '#F37E43', '#E66565', '#FFD603', '#9FCEB4', '#ACCAE8', '#9295CA'];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomColor() {
  let num = getRandomInt(allColors.length);
  return allColors[num];    
}

class SocialIcons extends Component {
  render() {
    return (
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
    );
  }

  componentDidMount() {
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
  }
}

export default SocialIcons
         
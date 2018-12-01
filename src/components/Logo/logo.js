import React, { Component } from 'react'

let allColors = ['#AE70AF', '#F37E43', '#E66565', '#FFD603', '#9FCEB4', '#ACCAE8', '#9295CA'];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomColor() {
  let num = getRandomInt(allColors.length);
  return allColors[num];    
}

class Logo extends Component {
  render() {
    return (
      <a href="/">
        <h1 id="name">
          mJordan
        </h1>
      </a>
    );
  }

  componentDidMount() {
    const name = document.getElementById('name').textContent;
    let formattedName = '';
    for(let i = 0; i < name.length; i++) {
      formattedName += `<span style="color: ${getRandomColor()}">${name[i]}</span>`;
    }
    document.getElementById('name').innerHTML = formattedName;
  }
}

export default Logo
         
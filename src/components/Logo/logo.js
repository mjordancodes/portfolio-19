import React, { Component } from 'react'

import { getRandomColor } from '../../tools/random-color';

class Logo extends Component {
  render() {
    return (
      <a href="/" className={this.props.className}>
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
         
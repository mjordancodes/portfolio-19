import React, { Component } from 'react'

import componentStyles from './landing-desk.module.css';

import CupItem from '../../images/Landing-Desk/pencil-cup.svg';

class Cup extends Component {
  render() {
    return (
      <CupItem className={componentStyles.cup} />
    )
  }
}

export default Cup
import React from 'react';

import componentStyles from './future-talk.module.css'

const FutureTalk = ({title, group, date, link}) => (
  <li className={componentStyles.talk}>
    <p><span>Talk Title:</span> {title}</p>
    <p><span>Event:</span> {group}</p>
    <p><span>When:</span> {date}</p>
    {link ? (
      <p>Find out more and RSVP <a href={link}>here</a></p>
    ) : (
      <p>More details coming soon</p>
    )}
  </li>
)

export default FutureTalk
         
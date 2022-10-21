import React from 'react'
import './Team.scss'

function Team(props) {
  return (
    <div className="team">
        <img src={props.image} className='team-image' alt=''></img>
        <div className="team-desc">
          <span className='team-name'>{props.name}</span>
          <span className='team-text'>{props.text}</span>
        </div>
        <img src={props.logo} className='team-logo' alt=''></img>
    </div>
  );
}

export default Team

import React from 'react'
import './Team.scss'

function Team(props) {
  return (
    <div className="team-card">
      <div className='team-images'>
        <img src={props.logo} className='team-image' alt=''></img>
        <img src={props.image} className='team-image' alt=''></img>
      </div>
      <div className="team-desc">
        <span className='team-name'>{props.name}</span>
        <span className='team-text'>{props.text}</span>
      </div>
    </div>
  );
}

export default Team

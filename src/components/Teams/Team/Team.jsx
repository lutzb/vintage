import React from 'react'
import './Team.scss'

function Profile(props) {
  return (
    <div className="profile-card">
      <div className="profile-images">
        <img src={props.image1} className='profile-image' alt=''></img>
        <img src={props.image2} className='profile-image' alt=''></img>
      </div>
      <div className="profile-container">
        <span className='profile-name'>{props.name}</span>
        <span className='profile-role'>{props.role}</span>
        <span className='profile-text'>{props.text}</span>
      </div>
    </div>
  );
}

export default Profile

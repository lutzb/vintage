import React from 'react';
import './HomeBody.scss'

import Team1 from '../../img/team1.jpg'
import Team2 from '../../img/team2.jpg'
import Team3 from '../../img/team3.jpg'
import Team4 from '../../img/team4.jpg'
import Team5 from '../../img/team5.jpg'
import Team6 from '../../img/team6.jpg'

const HomeBody = () => (
  <div className="home-body">
    {/* Show left column images */}
    <div className="left-images">
      <img src={Team1} className="left-image" alt=''/>
      <img src={Team2} className="left-image" alt=''/>
      <img src={Team3} className="left-image" alt=''/>
    </div>

    {/* Show video */}
    <div className="video-container">
      <iframe className="video" title="vimeo-player" src="https://player.vimeo.com/video/707609150?h=5178318fd7" frameBorder="0" allowFullScreen></iframe>
    </div>

    {/* Show right column images */}
    <div className="right-images">
      <img src={Team4} className="right-image" alt=''/>
      <img src={Team5} className="right-image" alt=''/>
      <img src={Team6} className="right-image" alt=''/>
    </div>
  </div>
)

export default HomeBody

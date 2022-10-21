import React from 'react';
import './HomeBody.scss'

import Team1 from '../../img/team-dawgpac-logo.jpg'
import Team2 from '../../img/team-express-logo.jpg'
import Team3 from '../../img/team-gargoyles-logo.jpg'
import Team4 from '../../img/team-heavymetal-logo.jpg'
import Team5 from '../../img/team-salsa-logo.jpg'
import Team6 from '../../img/team-webwarriors-logo.jpg'

const HomeBody = () => (
  <div className="home-body">
    {/* Show top images */}
    <div className="team-images">
      <img src={Team1} className="team-image-logo" alt=''/>
      <img src={Team2} className="team-image-logo" alt=''/>
      <img src={Team3} className="team-image-logo" alt=''/>
    </div>

    {/* Show video */}
    <div className="video-container">
      <iframe className="video-iframe" title="vimeo-player" src="https://player.vimeo.com/video/707609150?h=5178318fd7" frameBorder="0" allowFullScreen></iframe>
    </div>

    {/* Show bottom images */}
    <div className="team-images">
      <img src={Team4} className="team-image-logo" alt=''/>
      <img src={Team5} className="team-image-logo" alt=''/>
      <img src={Team6} className="team-image-logo" alt=''/>
    </div>
  </div>
)

export default HomeBody

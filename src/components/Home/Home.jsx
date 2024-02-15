import React from 'react';
import './Home.scss';
import Banner from '../Banner/Banner'
import NavMenu from '../NavMenu/NavMenu'
import Team1 from '../../img/team-dawgpac-logo.png'
import Team2 from '../../img/team-express-logo.png'
import Team3 from '../../img/team-gargoyles-logo.png'
import Team4 from '../../img/team-heavymetal-logo.png'
import Team5 from '../../img/team-salsa-logo.png'
import Team6 from '../../img/team-webwarriors-logo.png'

function Home() {
  return (
    <div className="home">
      <Banner />
      <NavMenu />

      {/* HOME THINGS */}
      <div className="home-body">
        {/* Show top images */}
        <div className="team-images">
          <img className="team-image-logo" src={Team1} alt=''/>
          <img className="team-image-logo" src={Team2} alt=''/>
          <img className="team-image-logo" src={Team3} alt=''/>
        </div>

        {/* Show video */}
        <iframe className="video-player" title="vimeo-player" src="https://player.vimeo.com/video/707609150?h=5178318fd7" frameBorder="0" allowFullScreen></iframe>

        {/* Show bottom images */}
        <div className="team-images">
          <img src={Team4} className="team-image-logo" alt=''/>
          <img src={Team5} className="team-image-logo" alt=''/>
          <img src={Team6} className="team-image-logo" alt=''/>
        </div>
      </div>
    </div>
  );
}

export default Home;
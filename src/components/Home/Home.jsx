import React from 'react';
import './Home.scss';
import Banner from '../Banner/Banner'
import NavMenu from '../NavMenu/NavMenu'
import Footer from '../Footer/Footer'
import PBHPoster from '../../img/pbh-poster.jpg'
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
        {/* Show left images */}
        <div className="home-team-images">
          <img className="home-team-image-logo" src={Team1} alt=''/>
          <img className="home-team-image-logo" src={Team2} alt=''/>
          <img className="home-team-image-logo" src={Team3} alt=''/>
        </div>

        {/* Show poster */}
        <img className="home-team-poster" src={PBHPoster} alt=''/>

        {/* Show right images */}
        <div className="home-team-images">
          <img className="home-team-image-logo" src={Team4} alt=''/>
          <img className="home-team-image-logo" src={Team5} alt=''/>
          <img className="home-team-image-logo" src={Team6} alt=''/>
        </div>
      </div>
      <p className='home-teaser-text'>Documentary premiering Spring 2024.</p>
      <p className='home-teaser-text'>Want updates, merchandise, and exclusive content?</p>
      <p className='home-teaser-text'>Sign up for our newsletter below!</p>
      <div className="home-body-mobile-images">
        <img className="home-team-image-logo" src={Team1} alt=''/>
        <img className="home-team-image-logo" src={Team2} alt=''/>
        <img className="home-team-image-logo" src={Team3} alt=''/>
        <img className="home-team-image-logo" src={Team4} alt=''/>
        <img className="home-team-image-logo" src={Team5} alt=''/>
        <img className="home-team-image-logo" src={Team6} alt=''/>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
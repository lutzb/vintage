import React from 'react';
import './Home.scss';
import Banner from '../Banner/Banner'
import NavMenu from '../NavMenu/NavMenu'
import HomeBody from '../HomeBody/HomeBody'
import Team1 from '../../img/team-dawgpac-logo.jpg'

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home-body">
        <NavMenu />
        <img src={Team1} alt=''/>
        {/* <HomeBody className="home-video-body"/> */}
      </div>
    </div>
  );
}

export default Home;

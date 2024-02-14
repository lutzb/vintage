import React from 'react';
import './Home.scss';
import Banner from '../Banner/Banner'
import NavMenu from '../NavMenu/NavMenu'
import HomeBody from '../HomeBody/HomeBody'

function Home() {
  return (
    <div className="home">
      <Banner />
      <NavMenu />
      <iframe title="vimeo-player" src="https://player.vimeo.com/video/707609150?h=5178318fd7" frameBorder="0" allowFullScreen></iframe>
      {/* <iframe className="video-iframe" title="vimeo-player" src="https://player.vimeo.com/video/707609150?h=5178318fd7" frameBorder="0" allowFullScreen></iframe> */}
      {/* <HomeBody className="home-video-body"/> */}
    </div>
  );
}

export default Home;

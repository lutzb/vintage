import React from 'react';
import './Home.scss';
import Banner from '../Banner/Banner'
import NavMenu from '../NavMenu/NavMenu'
import HomeBody from '../HomeBody/HomeBody'

function Home() {
  return (
    <div>
      <Banner />
      <div className="home">
        <NavMenu />
        <HomeBody />
      </div>
    </div>
  );
}

export default Home;

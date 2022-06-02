import React from 'react';
import './Home.scss';
import HomeHeader from '../HomeHeader/HomeHeader'
import HomeBody from '../HomeBody/HomeBody'

function Home() {
  return (
    <div className="home">
      <HomeHeader />
      <HomeBody />
    </div>
  );
}

export default Home;

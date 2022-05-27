import React from 'react';
import './Home.css';
import HomeHeader from '../HomeHeader/HomeHeader'
import HomeBody from '../HomeBody/HomeBody'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div className="home">
      <HomeHeader />
      <HomeBody />
      <Footer />
    </div>
  );
}

export default Home;

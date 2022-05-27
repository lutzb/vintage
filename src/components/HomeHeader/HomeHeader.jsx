import React from 'react';
import './HomeHeader.scss'
import ProBeachHockey from '../../img/pro-beach-hockey.gif'

const HomeHeader = () => (
  <header className="home-header">
    <img src={ProBeachHockey} className='header' alt=''/>
  </header>
)

export default HomeHeader

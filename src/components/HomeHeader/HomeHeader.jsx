import React from 'react';
import './HomeHeader.scss'

import ProBeachHockey from '../../img/pro-beach-hockey.gif'
import { Link } from "react-router-dom";
import { NavigationLinks } from '../../common/navigation-routes'

const HomeHeader = () => (
  <header className="home-header">
    <img src={ProBeachHockey} className='banner' alt=''/>
    {/* Show navigation links, may not need the loop */}
    <div className='navigation-items'>
      {
        NavigationLinks.map((page, index) => (
          <Link className='navigation-item' key={index} to={page.route}>{page.name}</Link>
        ))
      }
    </div>
  </header>
)

export default HomeHeader

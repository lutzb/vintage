import React from 'react';
import './HomeBody.scss'

import { Link } from "react-router-dom";
import { NavigationLinks } from '../../common/navigation-routes'

const HomeBody = () => (
  <div className="home-body">
    
    {/* Show navigation links, may not need the loop */}
    <div className='navigation-items'>
      {
          NavigationLinks.map((page, index) => (
          <Link className='navigation-item' key={index} to={page.route}>{page.name}</Link>
          ))
      }
    </div>

    {/* Show video */}
    <iframe title="vimeo-player" src="https://player.vimeo.com/video/707609150?h=5178318fd7" width="640" height="360" frameborder="0" allowFullScreen></iframe>
  
  </div>
)

export default HomeBody

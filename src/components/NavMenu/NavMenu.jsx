import React from 'react';
import './NavMenu.scss'

import { Link } from "react-router-dom";
import { NavigationLinks } from '../../common/navigation-routes'

const NavMenu = () => (
  <p className="nav-menu">
    {
      NavigationLinks.map((page, index) => (
        <Link className='nav-item' key={index} to={page.route}>{page.name}</Link>
      ))
    }
  </p>
)

export default NavMenu

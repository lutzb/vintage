import React from 'react';
import './Footer.scss'

import ProBeachHockey from '../../img/pbh-logo.png'

const handleClick = () => {
  window.open('mailto:jake@sinbinstudios.com ', '_blank');
};

const Footer = () => (
  <footer className="footer">
    <button className='footer-contact-button' onClick={handleClick}>CONTACT</button>
    <img className='footer-pbh-logo' src={ProBeachHockey} alt=''/>
  </footer>
)

export default Footer

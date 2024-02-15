import React from 'react';
import './Footer.scss'

import ProBeachHockey from '../../img/pbh-logo.png'

const handleClick = () => {
  window.open('mailto:test@gmail.com', '_blank');
};

const Footer = () => (
  <footer className="footer">
    <button className='footer-contact-button' onClick={handleClick}>CONTACT THE MAIN MAN</button>
    <img className='footer-pbh-logo' src={ProBeachHockey} alt=''/>
  </footer>
)

export default Footer

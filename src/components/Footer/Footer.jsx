import React from 'react';
import './Footer.scss'

import ProBeachHockey from '../../img/pbh-logo.png'

const handleContactClick = () => {
  window.open('mailto:jake@sinbinstudios.com', '_blank');
};

const handleNewsletterClick = () => {
  window.open('https://mailchi.mp/probeachhockey.net/pbh-signup', '_blank');
};

const Footer = () => (
  <footer className="footer">
    <button className='footer-contact-button' onClick={handleContactClick}>CONTACT</button>
    <img className='footer-pbh-logo' src={ProBeachHockey} alt=''/>
    <button className='footer-newsletter-button' onClick={handleNewsletterClick}>NEWSLETTER</button>
  </footer>
)

export default Footer

import React from 'react';
import './Merch.scss';
import Banner from '../Banner/Banner'
import NavMenu from '../NavMenu/NavMenu'

function Merch() {
  return (
    <div className="merch">
      <Banner />
      <NavMenu />

      {/* HOME THINGS */}
      <div className="merch-body">
        <p className='coming-soon-text'>MERCH COMING SOON!</p>
      </div>
    </div>
  );
}

export default Merch;

import React from 'react';
import './Merch.scss';
import Banner from '../Banner/Banner'
import NavMenu from '../NavMenu/NavMenu'
import Footer from '../Footer/Footer'
import MerchProduct from './MerchProduct/MerchProduct'

function Merch() {
  return (
    <div className="merch">
      <Banner />
      <NavMenu />

      {/* MERCH THINGS */}
      <div className="merch-body">
        <p className='coming-soon-text'>MERCH COMING SOON!</p>
      </div>

      {/* Trucker Hat*/ }
      {/* <MerchProduct buttonId="buy_btn_1P63MtAWS16T0EVuSJtgxqVR" /> */}

      {/* Coozie */}
      {/* <MerchProduct buttonId="buy_btn_1P71btAWS16T0EVus0bzeOLW" /> */}

      <Footer />
    </div>
  );
}

export default Merch;

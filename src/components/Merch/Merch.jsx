import React from 'react';
import './Merch.scss';
import Banner from '../Banner/Banner'
import NavMenu from '../NavMenu/NavMenu'
import Footer from '../Footer/Footer'
import MerchProduct from './MerchProduct/MerchProduct'

import Koozies from '../../img/merch-koozies.png'
import TruckerHat from '../../img/merch-hat.png'
import ShirtGreen from '../../img/merch-shirt-green.png'
import ShirtBlue from '../../img/merch-shirt-blue.png'

const publishableKey = "pk_live_51P5WcyAWS16T0EVumVcpH5HQGZBu0QARJWih1e0enubouUlHo3p2OUaViJMGe6pKP8scouYaLaL1EXNhkU6JY0rr00KojScObc";

function Merch() {
  return (
    <div className="merch">
      <Banner />
      <NavMenu />

      {/* MERCH THINGS */}
      <div className="merch-body">
        <p className='merch-header'>PBH Merch</p>
        <MerchProduct image={Koozies} buttonId="buy_btn_1P728EAWS16T0EVujPU3dRz9" publishableKey={publishableKey} desc="PBH Neon Koozies (4)" price="$14.00 + shipping" />
        <MerchProduct image={TruckerHat} buttonId="buy_btn_1P63MtAWS16T0EVuSJtgxqVR" publishableKey={publishableKey} desc="PBH Black Trucker Hat" price="$25.00 + shipping" />
        <MerchProduct image={ShirtGreen} buttonId="buy_btn_1P8nSiAWS16T0EVuE2dyo5BZ" publishableKey={publishableKey} desc="PBH Logo T-Shirt (Green)" price="$28.00 + shipping" />
        <MerchProduct image={ShirtBlue} buttonId="buy_btn_1P8nbjAWS16T0EVu0CWA39Ro" publishableKey={publishableKey} desc="PBH Logo T-Shirt (Blue)" price="$28.00 + shipping" />
      </div>

      <Footer />
    </div>
  );
}

export default Merch;

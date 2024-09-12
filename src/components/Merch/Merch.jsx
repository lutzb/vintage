import React from 'react';
import './Merch.scss';
import Banner from '../Banner/Banner'
import NavMenu from '../NavMenu/NavMenu'
import Footer from '../Footer/Footer'
// import MerchProduct from './MerchProduct/MerchProduct'

// Old merch products
// import Koozies from '../../img/merch-koozies.png'
// import TruckerHat from '../../img/merch-hat.png'
// import ShirtGreen from '../../img/merch-shirt-green.png'
// import ShirtBlue from '../../img/merch-shirt-blue.png'

// New merch products (7/3/24)
// import HatBlack from '../../img/merch-hat-black.jpg'
// import HatBucket from '../../img/merch-hat-bucket.jpg'
// import HatWhite from '../../img/merch-hat-white.jpg'

// const publishableKey = "pk_live_51P5WcyAWS16T0EVumVcpH5HQGZBu0QARJWih1e0enubouUlHo3p2OUaViJMGe6pKP8scouYaLaL1EXNhkU6JY0rr00KojScObc";

const handleMerchButtonClick = () => {
  window.open('https://probeachhockey.myshopify.com/', '_blank');
};

function Merch() {
  return (
    <div className="merch">
      <Banner />
      <NavMenu />

      {/* MERCH THINGS */}
      <div className="merch-body">
        <p className='merch-header'>PBH Merch</p>

        <button className='merch-button' onClick={handleMerchButtonClick}>Shop PBH Merch!</button>

        {/* Old merch products */}
        {/* <MerchProduct image={Koozies} buttonId="buy_btn_1P728EAWS16T0EVujPU3dRz9" publishableKey={publishableKey} desc="PBH Neon Koozies (4)" price="$14.00 + shipping" />
        <MerchProduct image={TruckerHat} buttonId="buy_btn_1P63MtAWS16T0EVuSJtgxqVR" publishableKey={publishableKey} desc="PBH Black Trucker Hat" price="$25.00 + shipping" />
        <MerchProduct image={ShirtGreen} buttonId="buy_btn_1P8nSiAWS16T0EVuE2dyo5BZ" publishableKey={publishableKey} desc="PBH Logo T-Shirt (Green)" price="$28.00 + shipping" />
        <MerchProduct image={ShirtBlue} buttonId="buy_btn_1P8nbjAWS16T0EVu0CWA39Ro" publishableKey={publishableKey} desc="PBH Logo T-Shirt (Blue)" price="$28.00 + shipping" /> */}

        {/* New merch products (7/3/24) */}
        {/* <MerchProduct image={HatBlack} buttonId="buy_btn_1PVQMxAWS16T0EVuDs6110dL" publishableKey={publishableKey} desc="Violent Gentlemen x PBH Trucker Hat" price="$32.00 + shipping" />
        <MerchProduct image={HatBucket} buttonId="buy_btn_1PSoDwAWS16T0EVuirzShcRH" publishableKey={publishableKey} desc="PBH Bucket Hat" price="$30.00 + shipping" />
        <MerchProduct image={HatWhite} buttonId="buy_btn_1PSoIDAWS16T0EVuDsSoY8Hr" publishableKey={publishableKey} desc="PBH Huntington Beach Hat" price="$34.99 + shipping" /> */}
      </div>

      <Footer />
    </div>
  );
}

export default Merch;

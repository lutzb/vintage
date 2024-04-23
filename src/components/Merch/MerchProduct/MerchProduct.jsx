import React from 'react'
import './MerchProduct.scss'


function MerchProduct(props) {
  return (
    <div className="merch-product-card">
      <img src={props.image} className='merch-product-image' alt=''></img>
      <div className="merch-product-detail">
        <span className='merch-product-desc'>{props.desc}</span>
        <span className='merch-product-desc'>{props.price}</span>
        <div className='merch-product-buy'>
          <stripe-buy-button  
            buy-button-id={props.buttonId} 
            publishable-key={props.publishableKey}
          />
        </div>
      </div>
    </div>
  );
}

export default MerchProduct

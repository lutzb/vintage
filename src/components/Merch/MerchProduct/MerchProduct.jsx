import React from 'react'
import './MerchProduct.scss'

function MerchProduct(props) {
  return (
    <div className="merch-product">
      {/* <div className='team-images'>
        <img src={props.logo} className='team-image' alt=''></img>
        <img src={props.image} className='team-image' alt=''></img>
      </div>
      <div className="team-desc">
        <span className='team-name'>{props.name}</span>
        <span className='team-text'>{props.text}</span>
      </div> */}

      <stripe-buy-button
        buy-button-id = {props.buttonId}
        publishable-key="pk_live_51P5WcyAWS16T0EVumVcpH5HQGZBu0QARJWih1e0enubouUlHo3p2OUaViJMGe6pKP8scouYaLaL1EXNhkU6JY0rr00KojScObc"
      />
    </div>
  );
}

export default MerchProduct

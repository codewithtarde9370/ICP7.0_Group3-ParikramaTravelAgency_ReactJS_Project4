import React from 'react';
import './offerCard.css';
import { travelOffers } from '../../data';

function OfferCard() {
  return (
    <>
      {travelOffers.map((item, index) => (
        <div className='offerCard' key={index}>
          <img alt='offer' src={item.img} className='offer-img' />
          <div className='offer-content'>
            <h2 className='offer-title'>{item.offerText}</h2>
            <p className='offer-validity'>{item.validity}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default OfferCard;

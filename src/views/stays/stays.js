import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Stays.css';
import OfferCard from '../../components/travelOfferCards/offerCard';

function Stays() {
  return (
    <>
      <Navbar className="navbar" />
      <div className='background'></div>
      <div className='offer-card-container'>
        <OfferCard />
      </div>
      <Footer className="footer" />
    </>
  );
}

export default Stays;

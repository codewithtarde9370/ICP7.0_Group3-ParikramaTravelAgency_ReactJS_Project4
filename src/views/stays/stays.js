import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import './stays.css';
import SearchCard from './../../components/search-card/search';

function Stays() {
  return (
    <>
      <Navbar className="navbar" />
      <div className='background'>
        <SearchCard />
      </div>
      <Footer className="footer" />
    </>
  );
}

export default Stays;

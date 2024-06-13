import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className='navbar-container'>
        <p>
            Parikrama
        </p>
        <div className='nav-item-container'>
         <span className='nav-item'>Stays</span>
         <span  className='nav-item'>Hotels</span>
         <span className='nav-item'>Flights</span>
         <span className='nav-item'>Rental</span>
         <span className='nav-item'>Cars</span>
       </div>
       <div className='icon-container'>
<button className='register-btn'>Register</button>
       </div>


    </div>
  )
}

export default Navbar
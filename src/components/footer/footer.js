import React from 'react'
import Pay1 from './pay1.png';
import Pay2 from './pay2.png';
import Pay3 from './pay3.png';
import Pay4 from './pay4.png';
import Connect1 from './connect1.png';
import Connect2 from './connect2.png';
import Connect3 from './connect3.png';
import Connect4 from './connect4.png';
import './footer.css'


function Footer() {
  return (
<>
<div className='footer'>
    <div className="footer-grid">
        <p className='footer-text'>
          <h3>Parikrama</h3>
          Explore the world, create memories.</p>
        <p>Accepted payment methods</p>
                <div className="payment">
                  <img src={Pay1} alt='amex'/>
                  <img src={Pay2} alt='mastercard'/>
                  <img src={Pay3} alt='paypal'/>
                  <img src={Pay4} alt='visa'/>
                </div>
              </div>

      <div className='footer-grid'>
      <h3>Recent News</h3>
        
        <ul>
          <li>Our Secret Island Boat Tour Is Just for You</li>
          <li>Chill and Escape in Our Natural Shelters</li>
          <li>September in Sunrise Avenue</li>
          <li>Live Music Concerts at Sunrise Avenue</li>
        </ul>
        
        </div> 

        <div className='footer-grid'>
        <h3>Navigation</h3>
                <ul>
                  <li>Stays</li>
                  <li>Hotels</li>
                  <li>Flight</li>
                  <li>Rentals</li>
                <li>Cars</li>
                </ul>
              </div>       
              <div className='footer-grid'>
              <h3>The Company</h3>
                <ul>
                  <li>About Us</li>
                  <li>Free Business Tool</li>
                  <li>Success Stories</li>
                  <li>Resources</li>
                <li>Help and Support</li>
                </ul>
              </div>
              <div className='footer-grid'>
              <h3>Connect Us</h3>
                <img src={Connect1} alt='instagram'></img>
                <img src={Connect2} alt='Facebook'></img>
                <img src={Connect3} alt='LinkedIn'></img>
                <img src={Connect4} alt='Twitter'></img>
              </div>
              
</div>


</>  )
}

export default Footer
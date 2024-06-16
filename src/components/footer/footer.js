import React from 'react';
import { Link } from 'react-router-dom';
import Pay1 from './pay1.png';
import Pay2 from './pay2.png';
import Pay3 from './pay3.png';
import Pay4 from './pay4.png';
import Connect1 from './connect1.png';
import Connect2 from './connect2.png';
import Connect3 from './connect3.png';
import Connect4 from './connect4.png';
import './footer.css';

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className="footer-grid">
          <div className='footer-text'>
            <h3>Parikrama</h3>
            <p>Explore the world, create memories.</p>
          </div>
          <p>Accepted payment methods</p>
          <div className="payment">
            <img src={Pay1} alt='amex' />
            <img src={Pay2} alt='mastercard' />
            <img src={Pay3} alt='paypal' />
            <img src={Pay4} alt='visa' />
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
            <li><Link to="/stays">Stays</Link></li>
            <li><Link to="/hotels">Hotels</Link></li>
            <li><Link to="/flights">Flights</Link></li>
            <li><Link to="/rentals">Rentals</Link></li>
            <li><Link to="/cars">Cars</Link></li>
          </ul>
        </div>       

        <div className='footer-grid'>
          <h3>The Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/business-tool">Free Business Tool</Link></li>
            <li><Link to="/success-stories">Success Stories</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/support">Help and Support</Link></li>
          </ul>
        </div>

        <div className='footer-grid'>
          <h3>Connect Us</h3>
          <div className="social-media">
            <img src={Connect1} alt='Instagram' />
            <img src={Connect2} alt='Facebook' />
            <img src={Connect3} alt='LinkedIn' />
            <img src={Connect4} alt='Twitter' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

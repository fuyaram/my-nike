import React from 'react'
import './Footer.css'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
    <section class="footer">
      <div class="footer-row">
        <div class="footer-col">
          <h4>nike</h4>
          <ul class="links">
            <li><a href=".">About Us</a></li>
            <li><a href=".">supports</a></li>
            <li><a href=".">Customers</a></li>
            <li><a href=".">Service 24/7</a></li>
            <li><a href=".">Collection</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Explore nike</h4>
          <ul class="links">
            <li><a href=",">Free Designs</a></li>
            <li><a href=".">Latest Designs</a></li>
            <li><a href=".">new launch</a></li>
            <li><a href=".">Popular snkrs</a></li>
            <li><a href=".">colabration</a></li>
          
          </ul>
        </div>
        <div class="footer-col">
          <h4>nike brand</h4>
          <ul class="links">
            <li><a href=".">Customer Agreement</a></li>
            <li><a href=".">Privacy Policy</a></li>
            <li><a href=".">nike stores</a></li>
            <li><a href=".">nike sales</a></li>
            <li><a href=".">nike costumers</a></li>
            
          </ul>
        </div>
        <div class="footer-col">
          <h4>follow nike</h4>
          <div className="social-icons-container">
      <FaFacebook className="social-icon" />
      <FaTwitter className="social-icon" />
      <FaInstagram className="social-icon" />
      <FaLinkedin className="social-icon" />
    </div>
          <form action="#">
            <input type="text" placeholder="Your email" required></input>
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div class="icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
      <footer className="footer-container">
      <div className="left-container">
        <FaMapMarkerAlt className="location-icon" />
        <span className="name">INDIA</span>
        <span className="copyright">&copy; 2023 nike just do it</span>
      </div>
      <div className="right-container">
        <span className="menu-item3">about us</span>
        <span className="menu-item3">privacy</span>
        <span className="menu-item3">policy</span>
        <span className="menu-item3">sale for policy</span>
        <span className="menu-item3">contracts</span>
        <span className="menu-item3">liggle notice</span>
      </div>
    </footer>
    </section>
    
    </>
  )
}

export default Footer

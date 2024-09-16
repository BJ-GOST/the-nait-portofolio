"use client";

import Navbar from '../components/Navbar';
import AboutUs from '../components/Aboutus';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Navbar />

      <section className='hero'>
        <div className="content">
          <h1>
            Building a stable community, offering software solutions, and furthering the cause of Christ
          </h1>
          <p>
            Join our community to work on amazing projects
          </p>
          <div className="buttons">
            <button className="join">Join Us</button>
            <button className="learn">Learn More</button>
          </div>
        </div>
        <div className="image">
          {/* Replace <img> with Next.js <Image> */}
          <Image src="/tm.jpg" alt="Team Working" width={500} height={300} />
        </div>
      </section>
      
      <AboutUs />
    
      <footer className="footer">
        <div className="footer-top">
          <h2>Want to partner with us?</h2>
          <p>If you're interested in our partnership and would like to find out some more information, one of our advisors is excited to help.</p>
          <button className="cta-button">Begin Now</button>
        </div>
        <div className="footer-bottom">
          <div className="footer-section">
            <h3>We <span>NAIT.</span></h3>
          </div>
          <div className="footer-section">
            <h4>PARTNERSHIPS</h4>
            <ul>
              <li>Websites</li>
              <li>Social Media</li>
              <li>Branding</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>ABOUT</h4>
            <ul>
              <li>Our Why</li>
              <li>Our Work</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>SUPPORT</h4>
            <ul>
              <li>Support Request</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>FOLLOW US</h4>
            <ul className="social-icons">
              <li><i className="fab fa-facebook-f"></i></li>
              <li><i className="fab fa-twitter"></i></li>
              <li><i className="fab fa-instagram"></i></li>
              <li><i className="fab fa-linkedin-in"></i></li>
            </ul>
          </div>
        </div>

        <div className="footer-legal">
          <p>&copy; 2024 Network of Adventists in Tech (NAIT). All rights reserved.</p>
          <a href="#">Privacy Policy</a>
        </div>
      </footer>

      {/* FontAwesome CDN for social icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
    </div>
  );
}

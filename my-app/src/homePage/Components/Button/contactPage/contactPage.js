import React from 'react';
import './contactPage.css';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';


function ContactPage() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>You can reach us on social media:</p>
      <ul className="social-icons">
        <li>
          <a href="https://www.facebook.com/"><FaFacebook /></a>
        </li>
        <li>
          <a href="https://twitter.com/"><FaTwitter /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/"><FaLinkedin /></a>
        </li>
      </ul>
    </div>
  );
}

export default ContactPage;
import React from 'react';
import './FooterSection.css';

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-item">
          <img src="/icons/location.png" alt="Location" className="footer-icon" />
          <h4>Location</h4>
          <div className="line"></div>
          <p>73 Southside Lane Los Angeles<br />Joaquin d'Oeste - DF</p>
        </div>
        <div className="footer-item">
          <img src="/icons/phone.png" alt="Phone" className="footer-icon" />
          <h4>Contact Us</h4>
          <div className="line"></div>
          <p>+(81)52 13698-5745<br />+(74)12 13698-7412</p>
        </div>
        <div className="footer-item">
          <img src="/icons/email.png" alt="Email" className="footer-icon" />
          <h4>Email Us</h4>
          <div className="line"></div>
          <p>yourname@gmail.com<br />companyname@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2021 Portfolio. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default FooterSection;

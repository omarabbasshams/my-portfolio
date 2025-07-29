import React, { useEffect } from "react";
import $ from "jquery";
import "malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css";
import "malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBriefcase, faQuoteLeft, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faLinkedinIn, faWhatsapp, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Header.css";

const Header = () => {
  useEffect(() => {
    $(".sidebar").mCustomScrollbar({
      theme: "minimal-dark", // Use a base theme
      axis: "y", // Enable vertical scrolling
      autoHideScrollbar: false, // Always show the scrollbar
      scrollInertia: 300, // Smooth scrolling
      alwaysShowScrollbar: 2, // Show scrollbar even if content fits
      advanced: {
        updateOnContentResize: true, // Ensure scrollbar updates dynamically
      },
      callbacks: {
        onCreate: function () {
          // Customize scrollbar colors directly with jQuery
          $(".mCSB_dragger_bar").css({
            backgroundColor: "#ff5e77", // Thumb color
          });
        },
      },
    });
    return () => {
      $(".sidebar").mCustomScrollbar("destroy");
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="profile">
        <img src="/1.png" alt="Profile" className="profile-image" />
      </div>
      
      <ul className="nav_list">
        <li data-number="0" className="active">
          <div className="tooltip_box">
            <a href="#about" className="siderbar_menuicon" style={{ color:'#14CAE5' }}>
              <FontAwesomeIcon icon={faUser} className="nav_icon" />
              <span className="menu_tooltip" style={{ color:'#14CAE5' }}>About</span>
            </a>
          </div>
        </li>

        <li data-number="1">
          <div className="tooltip_box">
            <a href="#portfolio" className="siderbar_menuicon" style={{ color:'#E94E50' }}>
              <FontAwesomeIcon icon={faBriefcase} className="nav_icon" />
              <span className="menu_tooltip" style={{ color:'#E94E50' }}>Portfolio</span>
            </a>
          </div>
        </li>

        <li data-number="2">
          <div className="tooltip_box">
            <a href="#testimonials" className="siderbar_menuicon" style={{ color:'#FFC455' }}>
              <FontAwesomeIcon icon={faQuoteLeft} className="nav_icon" />
              <span className="menu_tooltip" style={{ color:'#FFC455' }}>Testimonials</span>
            </a>
          </div>
        </li>

        <li data-number="3">
          <div className="tooltip_box">
            <a href="#contact" className="siderbar_menuicon" style={{ color:'#FF754A' }}>
              <FontAwesomeIcon icon={faPhone} className="nav_icon" />
              <span className="menu_tooltip" style={{ color:'#FF754A' }}>Contact</span>
            </a>
          </div>
        </li>
      </ul>

      <div className="social_media">
        <div className="divFollow">
          <p>Follow Us</p>
        </div>
        <div className="social_icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <span className="first_icon" style={{ color:'#3b5999' }}>

            <FontAwesomeIcon icon={faFacebookF} />
          </span>
          <span className="second_icon" style={{ color:'#3b5999' }}>

            <FontAwesomeIcon icon={faFacebookF} />
          </span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <span className="first_icon" style={{ color:'#0077b5' }}>

            <FontAwesomeIcon icon={faLinkedinIn} />
          </span>
          <span className="second_icon" style={{ color:'#0077b5' }}>

            <FontAwesomeIcon icon={faLinkedinIn} />
          </span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <span className="first_icon" style={{ color:'#25d366' }}>

            <FontAwesomeIcon icon={faWhatsapp} />
          </span>
          <span className="second_icon" style={{ color:'#25d366' }}>

            <FontAwesomeIcon icon={faWhatsapp} />
          </span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <span className="first_icon" style={{ color:'#e4405f' }}>

            <FontAwesomeIcon icon={faInstagram} />
          </span>
          <span className="second_icon" style={{ color:'#e4405f' }}>

            <FontAwesomeIcon icon={faInstagram} />
          </span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <span className="first_icon" style={{ color:'#000' }}>

            <FontAwesomeIcon icon={faGithub} />
          </span>
          <span className="second_icon" style={{ color:'#000' }}>

            <FontAwesomeIcon icon={faGithub} />
          </span>
          </a>
          
          
        </div>
      </div>
    </div>
  );
};

export default Header;

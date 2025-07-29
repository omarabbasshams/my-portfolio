import React from 'react';
import './About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import profileImage from './../image1.png';
const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image-frame">
          <img src={profileImage} alt="Profile" className="about-image" />
        </div>
        <div className="about-text">
          <h2 className='about-word'>About Me</h2>
          <h3>I'm In The Design Industry With 10 Years Of Experience.</h3>
          <p>
            There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
          <p>
            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
          </p>
          
          <div className="about-buttons">
            <button className="cv-button">Download CV</button>
            <button className="hire-me-button">Hire Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

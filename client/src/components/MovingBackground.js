import React from "react";
import './MovingBackground.css';
import image2 from './../image2.png';
import image1 from './../image1.png';
import image3 from './../nerds.svg';
const MovingBackground = () => {
    return (
        <div className="background-container">
            <div className="background-layer layer1" style={{ backgroundImage: `url(${image2})` }}></div>
            <img src={image3} className="image1"/>
          
            <div class="header-section">
                <div class="greeting">
                    <span class="hello">HELLO!</span> <span class="stranger">STRANGER!</span>
                </div>
                <h1 class="name">Eng. Omar Abbas</h1>
                <p class="subtitle">Freelance Full Stack Developer</p>
                <div class="buttons">
                    <a href="#" class="download-cv">Download CV</a>
                    <a href="#" class=" send-message">Send Message</a>
                </div>
            </div>
            <a href="#" class=" hire">Hire Me</a>
        </div>
    );
};

export default MovingBackground;

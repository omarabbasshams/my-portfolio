import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="profile-pic">
          <img src="path_to_profile_picture.jpg" alt="Profile" />
        </div>
        <div className="about-content">
          <h1>I'm In The Design Industry With 10 Years Of Experience.</h1>
          <p>
            There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
          <div className="about-buttons">
            <button className="btn">Download CV</button>
            <button className="btn">Hire Me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

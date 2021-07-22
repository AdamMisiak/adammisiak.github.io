import '../styles/AboutMe.css'

import React from "react";
import avatar from '../static/avatar.jpg';

const AboutMe: React.FunctionComponent = () => {
  return (
    <section id="about-me">
      <div className="about-me-wrapper">
        <div className="about-me-text">
          <h1>About Me</h1>
          <p>Software Developer</p>
        </div>
        <div className="about-me-photo-wrapper">
          <img className="about-me-photo" src={avatar} alt="Avatar"></img>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

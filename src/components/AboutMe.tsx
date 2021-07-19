import '../styles/Sidebar.css'

import React from "react";
import avatar from '../static/avatar.jpg';

const AboutMe: React.FunctionComponent = () => {
  return (
    <section id="about-me">
      <div className="home-photo-wrapper">
        <img className="home-photo" src={avatar} alt="Avatar"></img>
      </div>
    </section>
  );
};

export default AboutMe;

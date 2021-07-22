import '../styles/AboutMe.css'

import React from "react";
import avatar from '../static/avatar.jpg';

const AboutMe: React.FunctionComponent = () => {
  return (
    <section id="about-me">
      <div className="about-me-wrapper">
        <div className="about-me-text">
          <h1 className="about-me-title">About Me</h1>
          <p className="about-me-subtitle">Software Developer</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="about-me-photo-wrapper">
          <img className="about-me-photo" src={avatar} alt="Avatar"></img>
        </div>
      </div>
      <div className="timeline-wrapper">
        <ul>
          <li>
            <div className="timeline-content">
              <h1>HEADING 1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque iure quas doloremque blanditiis qui eveniet inventore, alias assumenda est.</p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h1>HEADING 2</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque iure quas doloremque blanditiis qui eveniet inventore, alias assumenda est.</p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h1>HEADING 3</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque iure quas doloremque blanditiis qui eveniet inventore, alias assumenda est.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;

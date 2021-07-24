import '../styles/AboutMe.css'

import React from "react";
import TimelineObject from './TimelineObject';
import avatar from '../static/avatar.jpg';

// style sidebar i timeline zrobic z px a nie % zeby respnnsywnosc byla ok
const timelineObjects = [
  {
    'date': 'May 2021 - present',
    'title': 'Junior Python Developer @ iMakeable',
    'text': "Technologies used:",
  },
  {
    'date': 'October 2020 - present',
    'title': 'Junior Python Developer @ The BitByBit Company',
    'text': "Technologies used:",
  },
  {
    'date': 'July 2019 - August 2020',
    'title': 'PLC Programmer @ Pesmel Poland',
    'text': "Technologies used:",
  },
  {
    'date': 'October 2016 - February 2020',
    'title': 'Gdańsk University of Technology',
    'text': "Graduated with engineer degree in Automatic Control and Robotics with 4.5 degree. Topic of my thesis was: Unmanned wheeled eletric vehicle.",
  },
]

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
          {timelineObjects.map((object) => {
            return <TimelineObject {...object} />
          })}
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;

import '../styles/AboutMe.css'

import TimelineObject from './TimelineObject';
import avatar from '../static/avatar.jpg';

const timelineObjects = [
  {
    'date': 'May 2021 - present',
    'title': 'Junior Python Developer @ iMakeable',
    'text': "Technologies used: Python, Django, DRF, Postgres, Celery, Docker, Elasticsearch",
  },
  {
    'date': 'October 2020 - present',
    'title': 'Junior Python Developer @ The BitByBit Company',
    'text': "Technologies used: Python, Django, DRF, Postgres, Docker",
  },
  {
    'date': 'July 2019 - August 2020',
    'title': 'PLC Programmer @ Pesmel Poland',
    'text': "Duties: coding in C#/Unity, programming PLC in TIA Portal, preparing visualizations",
  },
  {
    'date': 'October 2016 - February 2020',
    'title': 'Gdańsk University of Technology',
    'text': "Graduated with bachelor of engineering degree in Automatic Control and Robotics. Topic of my thesis was: Unmanned wheeled eletric vehicle. I was a part of student organisation SK SEP.",
  },
]

const AboutMe: React.FunctionComponent = () => {
  return (
    <section id="about-me">
      <div data-aos="fade-left" data-aos-delay="1000" className="about-me-wrapper">
        <div className="about-me-text">
          <h1 className="about-me-title">About Me</h1>
          <p className="about-me-subtitle">Full-Stack Developer</p>
          <p>I am aspiring Full-Stuck Developer located in Gdańsk, Poland. I am specialized in Python with Django on backend and Javascript with React on frontend. I have one year of commercial experience and couple of projects created. I am easy-going, ambitious and open minded, I am also fast learner.</p>
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

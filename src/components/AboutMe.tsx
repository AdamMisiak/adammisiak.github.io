import '../styles/AboutMe.css'

import { Building } from '@styled-icons/bootstrap/Building';
import TimelineObject from './TimelineObject';
import { University } from '@styled-icons/fa-solid/University';
import avatar from '../static/avatar.jpg';

const timelineObjects = [
  {
    'title': 'Junior Python Developer',
    'icon': Building,
    'company': 'iMakeable', 
    'date': 'May 2021 - present',
    'text': 'I was involved into social media app. Worked with frontend developer and DevOps. ',
    'technologies': ['Python', 'Django', 'DRF', 'Postgres', 'Docker'],
    'animationDelay': '0',
  },
  {
    'title': 'Junior Python Developer',
    'icon': Building,
    'company': 'The BitByBit Company',
    'date': 'October 2020 - present',
    'text': "Technologies used: Python, Django, DRF, Postgres, Docker",
    'technologies': ['Python', 'Django', 'DRF', 'Postgres', 'Celery', 'Docker', 'Elasticsearch'],
    'animationDelay': '100',
  },
  {
    'title': 'PLC Programmer',
    'icon': Building,
    'company': 'Pesmel Poland',
    'date': 'July 2019 - August 2020',
    'text': "Duties: coding in C#/Unity, programming PLC in TIA Portal, preparing visualizations",
    'technologies': ['PLC', 'C#', 'Unity', 'SCADA'],
    'animationDelay': '100',
  },
  {
    'title': 'Student',
    'icon': University,
    'company': 'Gdańsk University of Technology',
    'date': 'October 2016 - February 2020',
    'text': "Graduated with bachelor of engineering degree in Automatic Control and Robotics. Topic of my thesis was: Unmanned wheeled eletric vehicle. I was a part of student organisation SK SEP.",
    'technologies': ['PLC', 'SCADA', 'Automation'],
    'animationDelay': '100',
  },
]

const AboutMe: React.FunctionComponent = () => {
  return (
    <section id="about-me">
      <div data-aos="fade-left" className="about-me-wrapper">
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
        {timelineObjects.map((object) => {
          return <TimelineObject {...object} />
        })}
      </div>
    </section>
  );
};

export default AboutMe;

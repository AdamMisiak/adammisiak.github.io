import '../styles/AboutMe.css'

import TimelineObject from './TimelineObject';
import avatar from '../static/avatar.jpg';

const timelineObjects = [
  {
    'id': 1,
    'title': 'Junior Python Developer',
    'icon': 'company',
    'company': 'iMakeable', 
    'date': 'May 2021 - present',
    'text': 'I was involved into social media app. Worked with frontend developer and DevOps.',
    'technologies': ['Python', 'Django', 'DRF', 'Postgres', 'Docker'],
    'animationDelay': '0',
    'site': 'right',
  },
  {
    'id': 2,
    'title': 'Junior Python Developer',
    'icon': 'company',
    'company': 'The BitByBit Company',
    'date': 'October 2020 - present',
    'text': 'Took part in creating doctors app and automation hardware app. Worked with team of developers (frontend, backend, testers and PM). ',
    'technologies': ['Python', 'Django', 'DRF', 'Postgres', 'Celery', 'Docker', 'Elasticsearch'],
    'animationDelay': '100',
    'site': 'left',
  },
  {
    'id': 3,
    'title': 'PLC Programmer',
    'icon': 'company',
    'company': 'Pesmel Poland',
    'date': 'July 2019 - August 2020',
    'text': 'My tasks was to create simulation in C#/Unity and logic for automatic line. I was in team full of engineers. I used TIA Portal for programming PLC',
    'technologies': ['PLC', 'C#', 'Unity', 'SCADA'],
    'animationDelay': '100',
    'site': 'right',
  },
  {
    'id': 4,
    'title': 'Student',
    'icon': 'university',
    'company': 'Gdańsk University of Technology',
    'date': 'October 2016 - February 2020',
    'text': "Graduated with bachelor of engineering degree in Automatic Control and Robotics. Topic of my thesis was: Unmanned wheeled eletric vehicle. I was a part of student organisation SK SEP.",
    'technologies': ['PLC', 'SCADA', 'Automation'],
    'animationDelay': '100',
    'site': 'left',
  },
]

const AboutMe: React.FunctionComponent = () => {
  return (
    <section id="about-me">
      <div data-aos="fade-left" className="about-me-wrapper">
        <div className="about-me-text">
          <h1 className="about-me-title">About Me</h1>
          <p className="about-me-subtitle">Full-Stack Developer</p>
          <p>I am aspiring Full-Stack Developer located in Gdańsk, Poland. I am specialized in Python with Django on backend and Javascript with React on frontend. I have one year of commercial experience and couple of projects created. I am easy-going, ambitious and open minded, I am also fast learner.</p>
        </div>
        <div className="about-me-photo-wrapper">
          <img className="about-me-photo" src={avatar} alt="Avatar"></img>
        </div>
      </div>
      <div className="timeline-wrapper">
        {timelineObjects.map((object) => {
          return <TimelineObject key={object.id} {...object} />
        })}
      </div>
    </section>
  );
};

export default AboutMe;

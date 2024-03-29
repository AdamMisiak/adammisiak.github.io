import '../styles/AboutMe.css'

import TimelineObject from './TimelineObject';
import avatar from '../static/avatar.png';

const timelineObjects = [
  {
    'id': 1,
    'title': 'Backend Developer',
    'icon': 'company',
    'company': 'OpsTalent', 
    'date': 'December 2021 - present',
    'text': 'Took part in creating ETL pipelines and automation marketing campaigns app. Worked with team of developers (backend, testers and PM).',
    'technologies': ['Python', 'AWS', 'GitlabCI', 'Kubernetes', 'Redis', 'Flask'],
    'animationDelay': '0',
    'site': 'left',
  },
  {
    'id': 2,
    'title': 'Backend Developer',
    'icon': 'company',
    'company': 'The BitByBit Company',
    'date': 'December 2021 - Novemeber 2022',
    'text': 'Took part in creating doctors app and automation hardware app. Worked with team of developers (frontend, backend, testers and PM). ',
    'technologies': ['Python', 'Django', 'DRF', 'Docker', 'PostgreSQL', 'Elasticsearch', 'Celery'],
    'animationDelay': '0',
    'site': 'right',
  },
  {
    'id': 3,
    'title': 'Junior Backend Developer',
    'icon': 'company',
    'company': 'The BitByBit Company',
    'date': 'October 2020 - December 2021',
    'text': 'Took part in creating doctors app and automation hardware app. Worked with team of developers (frontend, backend, testers and PM). ',
    'technologies': ['Python', 'Django', 'DRF', 'Docker', 'PostgreSQL', 'Elasticsearch', 'Celery'],
    'animationDelay': '100',
    'site': 'left',
  },
  {
    'id': 4,
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
    'id': 5,
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
          <p>I am Backend Developer aspiring to become also DevOps Engineer. Right now I am located in Gdańsk, Poland. I am specialized in Python with Django, AWS and Kubernetes. I have three years of commercial experience and couple of projects created. I am easy-going, ambitious and open minded, I am also fast learner.</p>
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

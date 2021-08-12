import '../styles/AboutMe.css'

import TimelineObject from './TimelineObject';
import avatar from '../static/avatar.jpg';

const timelineObjects = [
  {
    'date': 'May 2021 - present',
    'title': 'Junior Python Developer @ iMakeable',
    'text': "Technologies used: Python, Django, DRF, Postgres, Celery, Docker, Elasticsearch",
    'time': '0',
  },
  {
    'date': 'October 2020 - present',
    'title': 'Junior Python Developer @ The BitByBit Company',
    'text': "Technologies used: Python, Django, DRF, Postgres, Docker",
    'time': '200',
  },
  {
    'date': 'July 2019 - August 2020',
    'title': 'PLC Programmer @ Pesmel Poland',
    'text': "Duties: coding in C#/Unity, programming PLC in TIA Portal, preparing visualizations",
    'time': '400',
  },
  {
    'date': 'October 2016 - February 2020',
    'title': 'Gdańsk University of Technology',
    'text': "Graduated with bachelor of engineering degree in Automatic Control and Robotics. Topic of my thesis was: Unmanned wheeled eletric vehicle. I was a part of student organisation SK SEP.",
    'time': '600',
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
        <div className="timeline-block">
          <div className="timeline-orb">
			    </div>
          <div className="timeline-content">
            <h2>Penta Consulting</h2>
            <div className="timeline-content-info">
              <span className="timeline-content-info-title">
                <i className="fa fa-certificate" aria-hidden="true"></i>
                Front End Developer
              </span>
              <span className="timeline-content-info-date">
                <i className="fa fa-calendar-o" aria-hidden="true"></i>
                June 2016 - Present
              </span>
            </div>
            <p>Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.</p>
            <ul className="content-skills">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Wordpress</li>
            </ul>
          </div>
        </div>

        <div className="timeline-block">
          <div className="timeline-orb">
			    </div>
          <div className="timeline-content">
            <h2>Penta Consulting</h2>
            <div className="timeline-content-info">
              <span className="timeline-content-info-title">
                <i className="fa fa-certificate" aria-hidden="true"></i>
                Front End Developer
              </span>
              <span className="timeline-content-info-date">
                <i className="fa fa-calendar-o" aria-hidden="true"></i>
                June 2016 - Present
              </span>
            </div>
            <p>Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.</p>
            <ul className="content-skills">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Wordpress</li>
            </ul>
          </div>
        </div>
        
        {/* <ul>
          {timelineObjects.map((object) => {
            return <TimelineObject {...object} />
          })}
        </ul> */}
      </div>
    </section>
  );
};

export default AboutMe;

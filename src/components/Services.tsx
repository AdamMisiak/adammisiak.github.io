import '../styles/Services.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import ServiceObject from './ServiceObject';
import { faCubes } from '@fortawesome/free-solid-svg-icons'

const Services: React.FunctionComponent = () => {
  const servicesObjects = [
    {
      'title': 'Frontend Development',
      // <FontAwesomeIcon className="circle" icon={faCubes} />
      'image': '',
      'text': 'Creating frontend for apps',
    },
    {
      'title': 'Backend Development',
      'image': '',
      'text': '',
    },
    {
      'title': 'Software Testing',
      'image': '',
      'text': '',
    },
    {
      'title': 'Script Automation',
      'image': '',
      'text': '',
    },
    {
      'title': 'Database Desigining',
      'image': '',
      'text': '',
    },
    {
      'title': 'Query Optimization',
      'image': '',
      'text': '',
    },

  ]
  
  return (
    <section id="services">
      <div className="services-wrapper">
        <div className="services-sign">
          <h1>Services</h1>
          <p>Things that I specilize in:</p>
        </div>
        <div className="services-list">
          {servicesObjects.map((object) => {
            return <ServiceObject {...object} />
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

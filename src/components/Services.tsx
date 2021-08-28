import '../styles/Services.css'

import { Communication } from '@styled-icons/fluentui-system-filled/Communication'
import { Database } from '@styled-icons/octicons/Database'
import { Gear } from '@styled-icons/octicons/Gear'
import React from "react";
import { ScreenShare } from '@styled-icons/material-outlined/ScreenShare'
import { Server } from '@styled-icons/boxicons-regular/Server'
import ServiceObject from './ServiceObject';
import { TaskListLtr } from '@styled-icons/fluentui-system-regular/TaskListLtr'

const Services: React.FunctionComponent = () => {
  const servicesObjects = [
    {
      'id': 1,
      'title': 'Frontend Development',
      'image': <ScreenShare size="35px"/>,
    },
    {
      'id': 2,
      'title': 'Backend Development',
      'image': <Server size="35px"/>,
    },
    {
      'id': 3,
      'title': 'Software Testing',
      'image': <TaskListLtr size="35px"/>,
    },
    {
      'id': 4,
      'title': 'Script Automation',
      'image': <Gear size="35px"/>,
    },
    {
      'id': 5,
      'title': 'Database Desigining',
      'image': <Database size="35px"/>,
    },
    {
      'id': 6,
      'title': 'Query Optimization',
      'image': <Communication size="35px"/>,
    },
  ]
  
  return (
    <section id="services">
      <div className="services-wrapper">
        <div className="services-sign">
          <h1>Services</h1>
          <p>Things that I specialize in:</p>
        </div>
        <div className="services-list">
          {servicesObjects.map((object) => {
            return <ServiceObject key={object.id} {...object} />
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

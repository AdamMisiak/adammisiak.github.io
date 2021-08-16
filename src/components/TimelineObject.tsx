import '../styles/AboutMe.css'

import { Calendar } from '@styled-icons/boxicons-regular/Calendar';
import React from "react";
import { Server } from '@styled-icons/boxicons-regular/Server';
import {StyledIcon} from '@styled-icons/styled-icon'

interface TimelineObjectProps {
    title: string;
    icon: StyledIcon,
    company: string,
    date: string;
    text: string;
    technologies: string[];
    animationDelay: string;
}

const TimelineObject: React.FunctionComponent<TimelineObjectProps> = (props: TimelineObjectProps) => {
    return (
      <div className="timeline-block">
        <div className="timeline-orb"></div>
        <div data-aos="fade-left" data-aos-delay={props.animationDelay} className="timeline-content">
          <h2>{props.title}</h2>
          <div className="timeline-content-info">
            <span className="timeline-content-info-title">
              <Server size="16px"/>&nbsp;
              {props.company}
            </span>
            <span className="timeline-content-info-date">
              <Calendar size="16px"/>&nbsp;
              {props.date}
            </span>
          </div>
          <p>{props.text}</p>
          <ul className="timeline-content-skills">
            {props.technologies.map((obj) => (
              <li>{obj}</li>
            ))}
          </ul>
        </div>
      </div>

  );
};

export default TimelineObject;

import '../styles/AboutMe.css'

import { Building } from '@styled-icons/bootstrap/Building';
import { Calendar } from '@styled-icons/boxicons-regular/Calendar';
import React from "react";
import { University } from '@styled-icons/fa-solid/University';

interface TimelineObjectProps {
    id: number;
    title: string;
    icon: string,
    company: string,
    date: string;
    text: string;
    technologies: string[];
    animationDelay: string;
    site: string;
}

const TimelineObject: React.FunctionComponent<TimelineObjectProps> = (props: TimelineObjectProps) => {
    let animation = ""
    if (props.site === "left") {
      animation = "fade-left"
    } else {
      animation = "fade-right"
    }
    return (
      <div className="timeline-block">
        <div className="timeline-orb"></div>
        <div data-aos={animation} data-aos-delay={props.animationDelay} className="timeline-content">
          <h2>{props.title}</h2>
          <div className="timeline-content-info">
            <span className="timeline-content-info-title">
              {props.icon === 'company' ? (
                <div>
                  <Building size="15.5px"/>&nbsp;
                  {props.company}
                </div>
              ) : (
                <div>
                  <University size="16px"/>&nbsp;
                  {props.company}
                </div>
              )}
            </span>
            <span className="timeline-content-info-date">
              <Calendar size="16px"/>&nbsp;
              {props.date}
            </span>
          </div>
          <p>{props.text}</p>
          <ul className="timeline-content-skills">
            {props.technologies.map((obj, index) => (
              <li key={index}>{obj}</li>
            ))}
          </ul>
        </div>
      </div>

  );
};

export default TimelineObject;

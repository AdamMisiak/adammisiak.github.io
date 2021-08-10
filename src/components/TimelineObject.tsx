import '../styles/AboutMe.css'

import React from "react";

interface TimelineObjectProps {
    date: string;
    title: string;
    text: string;
    time: string;
}

const TimelineObject: React.FunctionComponent<TimelineObjectProps> = (props: TimelineObjectProps) => {
    return (
        // data-aos="fade-left" data-aos-delay={props.time}
    <li>
        <div className="timeline-content">
            <h2 className="timeline-date">{props.date}</h2>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    </li>
  );
};

export default TimelineObject;

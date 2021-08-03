import '../styles/Services.css'

import React from "react";

interface ProjectObjectProps {
    title: string;
    image: string;
    link: string;
}

const ProjectObject: React.FunctionComponent<ProjectObjectProps> = (props: ProjectObjectProps) => {
    return (
      <div className="projects-element">
        <a href={props.link} target="_blank" rel="noreferrer">
          <div className="projects-photo-wrapper">
              <img className="projects-photo" src={props.image} alt={props.title}></img>
          </div>
          <div className="projects-text-wrapper">
              <h1>{props.title}</h1>
          </div>
        </a>
      </div>
    );
};

export default ProjectObject;

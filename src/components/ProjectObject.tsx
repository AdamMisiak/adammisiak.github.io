import '../styles/Services.css'

import React from "react";

interface ProjectObjectProps {
    title: string;
    image: string;
    text: string;
}

const ProjectObject: React.FunctionComponent<ProjectObjectProps> = (props: ProjectObjectProps) => {
    return (
      <div className="projects-element">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    );
};

export default ProjectObject;

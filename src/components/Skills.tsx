import '../styles/Skills.css'

import { Bootstrap, Git } from '@styled-icons/boxicons-logos';
import { Celery, Css3, Django, Docker, Elasticsearch, Heroku, Html5, Javascript, Linux, Postgresql, Python, ReactLogo, Typescript } from '@styled-icons/simple-icons';

import React from "react";
import SkillObject from './SkillObject';

const Skills: React.FunctionComponent = () => {
  const icons = [
    {
      "id": 1,
      "icon": <Python size="70px"/>,
      "name": "python"
    },
    {
      "id": 2,
      "icon": <Django size="70px"/>,
      "name": "django" 
    },
    {
      "id": 3,
      "icon": <Celery size="70px"/>,
      "name": "celery" 
    },
    {
      "id": 4,
      "icon": <Postgresql size="70px"/>,
      "name": "postgresql" 
    },
    {
      "id": 5,
      "icon": <Elasticsearch size="70px"/>,
      "name": "elasticsearch" 
    },
    {
      "id": 6,
      "icon": <Docker size="70px"/>,
      "name": "docker"
    },
    {
      "id": 7,
      "icon": <Html5 size="70px"/>,
      "name": "html5"
    },
    {
      "id": 8,
      "icon": <Css3 size="70px"/>,
      "name": "css3"
    },
    {
      "id": 9,
      "icon": <Javascript size="70px"/>,
      "name": "javascript"
    },
    {
      "id": 10,
      "icon": <Typescript size="70px"/>,
      "name": "typescript"
    },
    {
      "id": 11,
      "icon": <ReactLogo size="70px"/>,
      "name": "react"
    },
    {
      "id": 12,
      "icon": <Bootstrap size="70px"/>,
      "name": "bootstrap"
    },
    {
      "id": 13,
      "icon": <Git size="70px"/>,
      "name": "git" 
    },
    {
      "id": 14,
      "icon": <Linux size="70px"/>,
      "name": "linux"
    },
    {
      "id": 15,
      "icon": <Heroku size="70px"/>,
      "name": "heroku"
    },
  ]
  
  return (
    <section id="skills">
      <div className="skills-wrapper">
        <div className="skills-sign">
          <h1>Skills</h1>
          <p>Technologies I have worked with:</p>
        </div>
        <div className="skills-list">
           {icons.map((object) => {
            return <SkillObject key={object.id} {...object} />
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

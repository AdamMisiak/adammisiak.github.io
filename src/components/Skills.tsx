import '../styles/Skills.css'

import { Bootstrap, Git } from '@styled-icons/boxicons-logos';
import { Celery, Css3, Django, Docker, Elasticsearch, Heroku, Html5, Javascript, Linux, Postgresql, Python, ReactLogo, Typescript } from '@styled-icons/simple-icons';

import React from "react";
import SkillObject from './SkillObject';

const Skills: React.FunctionComponent = () => {
  const icons = [
    {
      "icon": <Python size="70px"/>,
      "name": "python"
    },
    {
      "icon": <Django size="70px"/>,
      "name": "django" 
    },
    {
      "icon": <Celery size="70px"/>,
      "name": "celery" 
    },
    {
      "icon": <Postgresql size="70px"/>,
      "name": "postgresql" 
    },
    {
      "icon": <Elasticsearch size="70px"/>,
      "name": "elasticsearch" 
    },
    {
      "icon": <Docker size="70px"/>,
      "name": "docker"
    },
    {
      "icon": <Html5 size="70px"/>,
      "name": "html5"
    },
    {
      "icon": <Css3 size="70px"/>,
      "name": "css3"
    },
    {
      "icon": <Javascript size="70px"/>,
      "name": "javascript"
    },
    {
      "icon": <Typescript size="70px"/>,
      "name": "typescript"
    },
    {
      "icon": <ReactLogo size="70px"/>,
      "name": "react"
    },
    {
      "icon": <Bootstrap size="70px"/>,
      "name": "bootstrap"
    },
    {
      "icon": <Git size="70px"/>,
      "name": "git" 
    },
    {
      "icon": <Linux size="70px"/>,
      "name": "linux"
    },
    {
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
            return <SkillObject {...object} />
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

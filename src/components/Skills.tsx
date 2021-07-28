import '../styles/Skills.css'

import { Celery, Django, Docker, Postgresql, Python } from '@styled-icons/simple-icons';

import { Git } from '@styled-icons/boxicons-logos';
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
      "icon": <Postgresql size="70px"/>,
      "name": "postgresql" 
    },
    {
      "icon": <Docker size="70px"/>,
      "name": "docker"
    },
    {
      "icon": <Git size="70px"/>,
      "name": "git" 
    },
    {
      "icon": <Celery size="70px"/>,
      "name": "celery" 
    },
  ]
  
  return (
    <section id="skills">
      <div className="skills-wrapper">
        <div className="skills-sign">
          <h1>Skills</h1>
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

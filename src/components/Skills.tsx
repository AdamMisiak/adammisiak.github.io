import '../styles/Skills.css'

import { Django, Postgresql, Python } from '@styled-icons/simple-icons';

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

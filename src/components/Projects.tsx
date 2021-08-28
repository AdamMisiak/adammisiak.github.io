import '../styles/Projects.css'

import ProjectObject from './ProjectObject';
import React from "react";
import blogs_manager from '../static/blogs_manager.jpg';
import exchange_rates_calculator from '../static/exchange_rates_calculator.jpg';
import tic_tac_toe_game from '../static/tic_tac_toe_game.jpg';
import to_do_list from '../static/to_do_list.jpg';

const Projects: React.FunctionComponent = () => {
  const projectsObjects = [
    {
      'id': 1,
      'title': 'Blogs Manager',
      'image': blogs_manager,
      'link': "https://github.com/AdamMisiak/Blogs_manager",
    },
    {
      'id': 2,
      'title': 'To Do List',
      'image': to_do_list,
      'link': "https://github.com/AdamMisiak/To_do_list",
    },
    {
      'id': 3,
      'title': 'Tic Tac Toe',
      'image': tic_tac_toe_game,
      'link': "https://github.com/AdamMisiak/Tic_tac_toe_game",
    },
    {
      'id': 4,
      'title': 'Exchange rates calculator',
      'image': exchange_rates_calculator,
      'link': "https://github.com/AdamMisiak/Exchange_rates_calculator",
    },
  ]
  
  return (
    <section id="projects">
      <div className="projects-wrapper">
        <div className="projects-sign">
          <h1>Projects</h1>
          <p>Projects I have already created:</p>
        </div>
        <div className="projects-list">
          {projectsObjects.map((object) => {
            return <ProjectObject key={object.id} {...object} />
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

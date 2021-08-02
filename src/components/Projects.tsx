import '../styles/Projects.css'

import ProjectObject from './ProjectObject';
import React from "react";
import blogs_manager from '../static/blogs_manager.jpg';

const Projects: React.FunctionComponent = () => {
  
  
  return (
    <section id="projects">
      <div className="projects-wrapper">
        <div className="projects-sign">
          <h1>Projects</h1>
        </div>
        <div className="projects-list">
            <div className="projects-element">
                <div className="projects-photo-wrapper">
                    <img className="projects-photo" src={blogs_manager} alt="Blogs Manager"></img>
                </div>
                <div className="projects-text-wrapper">
                    <h1>Blogs Manager</h1>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

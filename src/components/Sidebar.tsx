import '../styles/Sidebar.css'

import React from "react";

const Sidebar: React.FunctionComponent = () => {
  return (
    <section id="sidebar">
      <div className="sidebar-inner">
        <nav>
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about-me">ABOUT ME</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>
  </section>
  );
};

export default Sidebar;

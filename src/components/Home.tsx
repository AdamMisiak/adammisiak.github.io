import '../styles/Home.css'

import React, { useEffect } from "react";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { init } from 'ityped';

const Home: React.FunctionComponent = () => {
  useEffect(() => {
    const writer: any = document.querySelector("#writer");
    init(writer, {
      showCursor: true,
      strings: ["Django", "React", "Docker", "Postgres", "Linux", "Rest Api"]
    });
  });

  
  return (
    <section id="home">
      <div className="home-wrapper">
        <div className="home-signs">
          <h1>I am Adam Misiak</h1>
          <p>Full-Stack Developer located in Gdańsk.</p>
          <p>Specialized in <span id="writer"></span></p>
        </div>
        <div className="home-icons">
          <a href="https://github.com/AdamMisiak" target="_blank" rel="noreferrer" className="home-icon-single">
            <FontAwesomeIcon className="circle" icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/adammisiak/" target="_blank" rel="noreferrer" className="home-icon-single">
            <FontAwesomeIcon className="circle" icon={faLinkedin} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

import '../styles/Feed.css';

import AboutMe from './AboutMe';
import Contact from './Contact'
import Home from './Home';
import ParticleBackgroud from "./ParticleBackgroud";
import Projects from './Projects';
import React from "react";
import Services from './Services';
import Skills from './Skills';

const Feed: React.FunctionComponent = () => {
  return (
      <div className="feed-wrapper">
        <ParticleBackgroud />
        <Home />
        <AboutMe />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </div>
  );
};

export default Feed;

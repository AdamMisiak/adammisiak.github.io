import '../styles/Feed.css';

import AboutMe from './AboutMe';
import Home from './Home';
import React from "react";
import Services from './Services';
import Skills from './Skills';
import Projects from './Projects';


const Feed: React.FunctionComponent = () => {
  return (
      <div className="feed-wrapper">
        <Home />
        <AboutMe />
        <Services />
        <Skills />
        <Projects />
      </div>
  );
};

export default Feed;

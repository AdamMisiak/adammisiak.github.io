import '../styles/Feed.css';

import AboutMe from './AboutMe';
import Contact from './Contact'
import Home from './Home';
import Projects from './Projects';
import React from "react";
import Services from './Services';
import Skills from './Skills';

const Feed: React.FunctionComponent = () => {
  return (
      <section id="feed-wrapper">
        <Home />
        <AboutMe />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </section>
  );
};

export default Feed;

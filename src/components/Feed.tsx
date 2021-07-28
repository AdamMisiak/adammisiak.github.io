import '../styles/Feed.css';

import AboutMe from './AboutMe';
import Home from './Home';
import React from "react";
import Services from './Services';
import Skills from './Skills';

const Feed: React.FunctionComponent = () => {
  return (
      <div className="feed-wrapper">
        <Home />
        <AboutMe />
        <Services />
        <Skills />
      </div>
  );
};

export default Feed;

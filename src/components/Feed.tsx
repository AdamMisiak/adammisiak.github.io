import '../styles/Feed.css';

import AboutMe from './AboutMe';
import Home from './Home';
import React from "react";

const Feed: React.FunctionComponent = () => {
  return (
      <div className="feed-wrapper">
        <Home />
        <AboutMe />
      </div>
  );
};

export default Feed;

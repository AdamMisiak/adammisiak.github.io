import '../styles/Feed.css';

import AboutMe from './AboutMe';
import Home from './Home';
import React from "react";
import Services from './Services';

const Feed: React.FunctionComponent = () => {
  return (
      <div className="feed-wrapper">
        <Home />
        <AboutMe />
        {/* <Services /> */}
      </div>
  );
};

export default Feed;

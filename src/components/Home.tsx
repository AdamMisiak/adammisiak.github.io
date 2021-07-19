import '../styles/Home.css'

import React from "react";
import avatar from '../avatar.jpg';

const Home: React.FunctionComponent = () => {
  return (
    <section id="home">
      <div className="home-wrapper">
        <div className="home-photo-wrapper">
          <img className="home-photo" src={avatar} alt="Avatar"></img>
        </div>
        <div className="home-sign-wrapper">
          HELLO, MY NAME IS ADAM
        </div>
      </div>
    </section>
  );
};

export default Home;

import '../styles/Home.css'

import React, { useEffect } from "react";

import { init } from 'ityped';

const Home: React.FunctionComponent = () => {
  useEffect(() => {
    const writer: any = document.querySelector("#writer");
    init(writer, {
      showCursor: true,
      strings: ["Python", "Django", "Postgres", "Typescript"]
    });
  });

  
  return (
    <section id="home">
      <div className="home-sign-wrapper">
        <h1>I am Adam Misiak</h1>
        <p>Backend Developer located in Gdańsk.</p>
        <p>Specialized in <span id="writer"></span></p>
      </div>
    </section>
  );
};

export default Home;

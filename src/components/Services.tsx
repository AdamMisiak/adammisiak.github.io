import '../styles/Services.css'

import React from "react";

const Services: React.FunctionComponent = () => {
  return (
    <section id="services">
      <div className="services-wrapper">
        <div className="services-sign">
          <h1>Services</h1>
          <p>Things that I specilize in:</p>
        </div>
        <div className="services-list">
          <div className="services-element">
            <h1>Frontend Development</h1>
          </div>
          <div className="services-element">
            <h1>Backend Development</h1>
          </div>
          <div className="services-element">
            <h1>Scripts Automation</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

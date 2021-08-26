import '../styles/Contact.css'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";

const Contact: React.FunctionComponent = () => {
  return (
    <section id="contact">
      <div className="contact-wrapper">
        <div className="contact-text">
          <h1 className="contact-title">Contact</h1>
          <p className="contact-subtitle">You can find me on:</p>
        </div>
        <div className="contact-icons">
          <a href="https://github.com/AdamMisiak" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="contact-icon-single" icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/adammisiak/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="contact-icon-single" icon={faLinkedin} />
          </a>
        </div>
        <div className="contact-rights">
          <p className="contact-subtitle">
            © No Copyrights, feel free to use this template, Adam Misiak <br></br>
            If you have any questions, contact me at adammisiak3@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

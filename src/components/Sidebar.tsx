import '../styles/Sidebar.css'

import React, { useEffect, useState } from "react";

import Burger from './Burger';

const Sidebar: React.FunctionComponent = () => {
  const sidebarObjects = [
    {
      'id': 1,
      'name': 'HOME',
      'href': '#home',
      'duration': 1000
    },
    {
      'id': 2,
      'name': 'ABOUT ME',
      'href': '#about-me',
      'duration': 1150
    },
    {
      'id': 3,
      'name': 'SERVICES',
      'href': '#services',
      'duration': 1300
    },
    {
      'id': 4,
      'name': 'SKILLS',
      'href': '#skills',
      'duration': 1450
    },
    {
      'id': 5,
      'name': 'PROJECTS',
      'href': '#projects',
      'duration': 1600
    },
    {
      'id': 6,
      'name': 'CONTACT',
      'href': '#contact',
      'duration': 1750
    },
  ]
  
  const [sidebar, setSidebar] = useState(true);
  const sendDataToParent = (state: boolean) => {
    setSidebar(state);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
        if (!sidebar) {
          setSidebar(!sidebar)
        }
    });
  }, [sidebar]);

  return (
    <section id="sidebar">
      <div className={"sidebar-wrapper " + (sidebar ? "hidden" : "")}>
        <nav>
          <Burger
            sidebar={sidebar}
            sendDataToParent={sendDataToParent}
          />
          <ul>
            {sidebarObjects.map((object) => {
              return <li key={object.id}><a 
                id={object.href}
                data-aos="fade-right" 
                data-aos-duration={object.duration} 
                href={object.href}
              >
                {object.name}
              </a></li>
            })}
          </ul>
        </nav>
      </div>
  </section>
  );
};

export default Sidebar;

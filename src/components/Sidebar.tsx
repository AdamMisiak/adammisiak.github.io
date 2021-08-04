import '../styles/Sidebar.css'

const Sidebar: React.FunctionComponent = () => {
  return (
    <section id="sidebar">
      <div className="sidebar-wrapper">
        <nav>
          <ul>
            <li><a data-aos="fade-right" data-aos-duration="1000" href="#home">HOME</a></li>
            <li><a data-aos="fade-right" data-aos-duration="1150" href="#about-me">ABOUT ME</a></li>
            <li><a data-aos="fade-right" data-aos-duration="1300" href="#services">SERVICES</a></li>
            <li><a data-aos="fade-right" data-aos-duration="1350" href="#skills">SKILLS</a></li>
            <li><a data-aos="fade-right" data-aos-duration="1500" href="#projects">PROJECTS</a></li>
            <li><a data-aos="fade-right" data-aos-duration="1650" href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>
  </section>
  );
};

export default Sidebar;

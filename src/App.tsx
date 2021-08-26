import './styles/index.css'
import "aos/dist/aos.css"

import React, { useEffect } from "react";

import Aos from 'aos';
import Feed from './components/Feed';
import ParticleBackgroud from "./components/ParticleBackgroud";
import Sidebar from './components/Sidebar';

const App: React.FunctionComponent = () => {
  useEffect(() => {
    Aos.init({duration: 1500});
  })
  window.addEventListener('load', Aos.refresh)
  return <div className="App">
    <div className="wrapper">
      <ParticleBackgroud />
      <Sidebar />
      <Feed />
    </div>
  </div>
}

export default App;

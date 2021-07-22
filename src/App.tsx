import './styles/index.css'

import Feed from './components/Feed';
import React from 'react';
import Sidebar from './components/Sidebar';

const App: React.FunctionComponent = () => {
  return <div className="App">
    <div className="wrapper">
      <Sidebar />
      <Feed />
    </div>
  </div>
}

export default App;

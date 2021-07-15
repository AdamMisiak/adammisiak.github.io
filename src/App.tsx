import './styles/index.css'

import Feed from './components/Feed';
import React from 'react';
import Sidebar from './components/Sidebar';

const App: React.FunctionComponent = () => {
  return <div className="App">
    <Sidebar />
    <Feed />
  </div>
}

export default App;

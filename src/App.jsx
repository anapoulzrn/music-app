import React from 'react';
import './css/style.css';
import Main_nav from './components/main_nav';
import Main_center from './components/main_center';
import Player from './components/player';
import Volume from './components/volume';
import Main_sidebar from './components/main_sidebar';


function App() {
  
  return (
    <div className="App container">
      <div className="main">
        <Main_nav/>
        <Main_center/>
        <Main_sidebar/>
      </div>
      <div className="bar">
        <div className="bar__content">
          <div className="bar__player-progress"></div>
          <div className="bar__player-block">
            <Player/>
            <Volume/>
          </div>
        </div>
      </div> 
      <footer className="footer"></footer>
    </div>
  )
}

export default App;

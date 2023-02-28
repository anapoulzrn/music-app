import React from 'react';
import './css/style.css';
import Main_nav from './components/main_nav';
import Main_center from './components/main_center';
import Player from './components/player';
import Volume from './components/volume';
import Main_sidebar from './components/main_sidebar';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
// eslint-disable-next-line no-undef
let classNames = require('classnames');
import styles from "./css/app.module.css";


function App() {

  return (
    <div className={classNames(styles.app, styles.container)}>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className={styles.main}>
        <Main_nav/>
        <Main_center/>
        <Main_sidebar/>
      </div>
      <div className={styles.bar}>
        <div className={styles.content}>
          <div className={styles.player_progress}></div>
          <div className={styles.player_block}>
            <Player artist={"Баста"} song={"Ты та..."}/>
            <Volume/>
          </div>
          
        </div>
      </div> 
      <footer className={styles.footer}></footer>
      </SkeletonTheme>
    </div>
  )
}

export default App;

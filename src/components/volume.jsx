import React from 'react';
import Volume from './img/icon/volume.svg';
import styles from '../css/volume.module.css';
// eslint-disable-next-line no-undef
let classNames = require('classnames');



const volume = () => {
  return (
    <div className={classNames(styles.block, styles.btn)}>
       <div className={styles.content}>
            <div className={styles.image}>
                <img src={Volume} className={styles.svg} alt="volume"></img>
            </div>
            <div className={classNames(styles.progress, styles.btn)}>
                <input className={classNames(styles.progress_line, styles.btn)} type="range" name="range"></input>
            </div>
            
       </div>
    </div>
  )
}

export default volume;
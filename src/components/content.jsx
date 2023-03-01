import React from 'react';
// import useEffect, { useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Playlist_item from './playlist_item';
import Watch from './img/icon/watch.svg';
// eslint-disable-next-line no-undef
let classNames = require('classnames');
import styles from "../css/content.module.css";


const content = () => {
  const tracks = [
    { id: "1", title: "Guilt", artist: "Nero", album: "Welcome Reality", duration: "4:44"},
    { id: "2", title: "Elektro", artist: "Dynoro, Outwork, Mr. Gee", album: "Elektro", duration: "2:22"},
    { id: "3", title: "I’m Fire", artist: "Ali Bakgor", album: "I’m Fire", duration: "2:22"},
    { id: "4", title: "Non Stop", artist: "Стоункат, Psychopath", album: "Non Stop", duration: "4:12"},
    { id: "5", title: "Run Run", artist: "Jaded, Will Clarke, AR/CO", album: "Run Run", duration: "2:54"},
  ];

  return (
    <div className={styles.content}>
        <div className={classNames(styles.title, styles.playlist_title)}>
            <div className={classNames(styles.title__col, styles.col01)}>Трек</div>
            <div className={classNames(styles.title__col, styles.col02)}>ИСПОЛНИТЕЛЬ</div>
            <div className={classNames(styles.title__col, styles.col03)}>АЛЬБОМ</div>
            <div className={classNames(styles.title__col, styles.col04)}>
                <img src={Watch} className={styles.title__svg} alt="time"></img>
            </div>
        </div>
        <div className={classNames(styles.content__playlist, styles.playlist)}>
          {tracks.map(track => <Playlist_item track={track} key={track.id}/>)}
        </div>
    </div>
  )
}

export default content;
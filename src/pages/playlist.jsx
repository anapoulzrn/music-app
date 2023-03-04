import React from "react";
import '../css/style.css';
import styles from "../css/playlist.module.css";
import Search from '../components/img/icon/search.svg';
import Main_nav from '../components/main_nav';
import Player from '../components/player';
import Volume from '../components/volume';
import Content from "../components/content";
import classNames from "classnames";
import { SkeletonTheme } from 'react-loading-skeleton';
import { useParams } from "react-router-dom";
import { playlists } from "../constants";


const playlist = () => {

    const params = useParams();

    const playlist = playlists.find((playlist) => playlist.id === params.id);
    // console.log(playlists)

  return (
    <div className={classNames(styles.app, styles.container)}>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className={styles.main}>
            <Main_nav/>
            <div  className={classNames(styles.main__centerblock, styles.centerblock)}>
            <div className={classNames(styles.center__search, styles.search)}>
                <img src={Search} className={styles.search__svg}></img>
                <input
                    className={styles.search__text}
                    type="search"
                    placeholder="Поиск"
                    name="search"
                ></input>
            </div>
            <h2 className={styles.h2}>{playlist.title}</h2>
            <Content />
        </div>
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

export default playlist;

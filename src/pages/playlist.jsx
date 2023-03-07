import React from "react";
import '../css/style.css';
import styles from "../css/playlist.module.css";
import Main_nav from '../components/main_nav';
import Player from '../components/player';
import Volume from '../components/volume';
import Content from "../components/content";
import classNames from "classnames";
import { SkeletonTheme } from 'react-loading-skeleton';
import { useParams } from "react-router-dom";
import { playlists } from "../constants";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


const playlist = () => {

    const params = useParams();

    const playlist = playlists.find((playlist) => playlist.id === params.id);

    const theme = useContext(ThemeContext);
    console.log(theme.theme);


  return (
    <div className={classNames(styles.app, styles.container)}>
        <SkeletonTheme baseColor={ theme.theme ==='light' ? '#D9D9D9' : '#202020'} 
        highlightColor={ theme.theme === 'light' ? '#fff' : '#444'}>
        <div className={styles.main}>
            <Main_nav/>
            <div  className={classNames(styles.main__centerblock, styles.centerblock)}>
            <div className={classNames(styles.center__search, styles.search)}>
                { theme.theme === 'dark' ? 
                    <svg className={styles.search__svg} width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.67139 10.7749L13.1137 15.0645" stroke="white" strokeLinecap="round"/>
                        <circle cx="6.22874" cy="6.48526" r="5.5" transform="rotate(-38.7469 6.22874 6.48526)" stroke="white"/>
                    </svg> :
                    <svg className={styles.search__svg} width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.92773 10.7744L13.3701 15.064" stroke="black" strokeLinecap="round"/>
                        <circle cx="6.48509" cy="6.48477" r="5.5" transform="rotate(-38.7469 6.48509 6.48477)" stroke="black"/>
                    </svg>}
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
                    <Player artist={"Linkin Park"} song={"Breaking The Habit"}/>
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

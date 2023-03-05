// import React, { useEffect, useRef, useState } from 'react';
import React from 'react';
import '../css/style.css';
import Main_nav from '../components/main_nav';
import Main_center from '../components/main_center';
import Player from '../components/player';
import Volume from '../components/volume';
import Main_sidebar from '../components/main_sidebar';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import classNames from 'classnames';
import styles from '../css/app.module.css';
// import track from '../music/Breaking_the_Habit.mp3';

const main = () => {
    // const [isPlaying, setPlaying] = useState(false);
    // const audioRef = useRef();

    // useEffect(() => {
    //   if (isPlaying) {
    //     audioRef.current.play();
    //   } else {
    //     audioRef.current.pause();
    //   }
    // }, [isPlaying])

    return (
        <div className={classNames(styles.app, styles.container)}>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <div className={styles.main}>
                    <Main_nav />
                    <Main_center />
                    <Main_sidebar />
                </div>
                <div className={styles.bar}>
                    <div className={styles.content}>
                        <div className={styles.player_block}>
                            {/* <div className={styles.player_progress}></div> */}
                            {/* <audio src={track} ref={audioRef}/> */}
                            <Player
                                artist="Linkin Park"
                                song="Breaking The Habit"
                            />
                            <Volume />
                        </div>
                    </div>
                </div>
                <footer className={styles.footer}></footer>
            </SkeletonTheme>
        </div>
    );
};

export default main;

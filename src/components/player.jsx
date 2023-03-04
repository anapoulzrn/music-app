import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Dislike from './img/icon/dislike.svg';
import Like from './img/icon/like.svg';
import Note from './img/icon/note.svg';
import Prev from './img/icon/prev.svg';
import Play from './img/icon/play.svg';
import Next from './img/icon/next.svg';
import Repeat from './img/icon/repeat.svg';
import Shuffle from './img/icon/shuffle.svg';
// eslint-disable-next-line no-undef
let classNames = require('classnames');
import styles from "../css/player.module.css";

const player = (props) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000);
        return () => clearTimeout(timer)
    }, []);

  return (
    <div className={classNames(styles.bar__player, styles.player)}>
        <div className={styles.controls}>
            <div className={styles.btn_prev}>
                <img src={Prev} className={styles.prev_svg} alt="prev">
                </img>
            </div>
            <div className={classNames(styles.btn_play, styles.btn)}>
                <img src={Play} className={styles.play_svg} alt="play">
                </img>
            </div>
            <div className={styles.btn_next}>
                <img src={Next} className={styles.next_svg} alt="next">
                </img>
            </div>
            <div className={classNames(styles.btn_repeat, styles.btn_icon)}>
                <img src={Repeat} className={styles.repeat_svg} alt="repeat">
                </img>
            </div>
            <div className={classNames(styles.btn_shuffle, styles.btn_icon)}>
                <img src={Shuffle} className={styles.shuffle_svg} alt="shuffle">
                </img>
            </div>
            
        </div>

        <div className={styles.track_play}>
            <div className={styles.contain}>
                {loading ? <Skeleton width={50} height={50} style={{marginRight: "15px"}} /> :
                <div className={styles.image}>
                    <img className={styles.title_svg} src={Note} alt="music"></img>
                </div>}
                {loading ? <Skeleton count={2} width={90} height={15} /> :  
                    <div>
                    <div className={styles.author}>
                        <a className={styles.author_link} href="http://">{props.song}</a>
                    </div>
                    <div className={styles.album}>
                        <a className={styles.album_link} href="http://">{props.artist}</a>
                    </div>
                    </div>
                }
            </div>

            <div className={styles.like_dis}>
                <div className={classNames(styles.like, styles.btn_icon)}>
                    <img className={styles.dislike_svg} src={Like} alt="like"></img>
                </div>
                <div className={classNames(styles.dislike, styles.btn_icon)}>
                    <img className={styles.dislike_svg} src={Dislike} alt="dislike"></img>
                </div>
            </div>
        </div>

    </div>

  )
}

export default player;
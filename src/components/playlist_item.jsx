import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Note from './img/icon/note.svg';
import Like from './img/icon/like.svg';
// eslint-disable-next-line no-undef
let classNames = require('classnames');
import styles from "../css/playlist_item.module.css";


const playlist_item = (props) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2500);
        return () => clearTimeout(timer)
    }, []);

  return (
    
    <div className={styles.playlist__item}>
        <div className={classNames(styles.playlist__track, styles.track)}>
            <div className={styles.track__title}>
                { loading ? <Skeleton width={50} height={50} style={{marginRight: "25px"}} /> : 
                <div className={styles.track_image}>
                    <img className={styles.dislike_svg} src={!loading && Note} alt="note"></img>
                </div>}
                <div className={styles.title_text}>
                    <a className={styles.title_link} href="http://">{loading ? <Skeleton width={270}/> : props.track.title} </a>
                </div>
            </div>
            <div className={styles.author}>
                <a className={styles.author_link} href="http://">{loading ? <Skeleton width={240}/> : props.track.artist}</a>

            </div>
            <div className={styles.album}>
                <a className={styles.album_link} href="http://">{loading ? <Skeleton width={180}/> : props.track.album}</a>

            </div>
            <div className={styles.time}>
                {!loading && <img className={styles.time_svg} src={Like} alt="time"></img>}
                <span className={styles.time_text}>{loading ? <Skeleton width={35}/> : props.track.duration}</span>

            </div>
        </div>
    </div>
   
  )
}

export default playlist_item;
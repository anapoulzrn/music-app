import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Note from './img/icon/note.svg';
import Like from './img/icon/like.svg';
import classNames from 'classnames';
import styles from "../css/playlist_item.module.css";
import { getCurrentTrack, getTrackId, play } from '../redux/slices/playerSlice';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';


const playlist_item = ({ id, trackAuthor, trackName, trackAlbum, trackDuration, trackTitleLink}) => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000);
        return () => clearTimeout(timer)
    }, []);

    function setCurrentTrack() {
        dispatch(getTrackId(id))
        dispatch(getCurrentTrack(trackTitleLink))
        dispatch(play(true))
    }
  return (
    
    <div className={styles.playlist__item}>
        <div className={classNames(styles.playlist__track, styles.track)}>
            <div className={styles.track__title} onDoubleClick={setCurrentTrack} id={id} value={trackTitleLink}>
                { loading ? <Skeleton width={50} height={50} style={{marginRight: "25px"}} /> : 
                <div className={styles.track_image}>
                    <img className={styles.dislike_svg} src={!loading && Note} alt="note"></img>
                </div>}
                <div className={styles.title_text}>
                    {loading ? <Skeleton width={270}/> : <a className={styles.title_link} id={id} > {trackName} </a>}
                </div>
            </div>
            <div className={styles.author}>
                {loading ? <Skeleton width={240}/> : <a className={styles.author_link} href="http://"> {trackAuthor}</a>}
            </div>
            <div className={styles.album}>
                {loading ? <Skeleton width={180}/> : <a className={styles.album_link} href="http://">{trackAlbum}</a>}
            </div>
            <div className={styles.time}>
                {!loading && <img className={styles.time_svg} src={Like} alt="time"></img>}
                {loading ? <Skeleton width={35}/> : <span className={styles.time_text}>{trackDuration}</span>}
            </div>
        </div>
    </div>
   
  )
}

export default playlist_item;
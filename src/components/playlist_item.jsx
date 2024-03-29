/* eslint-disable no-unused-vars */
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
import { useAddFavoriteTrackMutation, useDeleteFavoriteTrackMutation, useGetFavoriteTracksQuery } from '../redux/musicApi';
import { useSelector } from 'react-redux';



const playlist_item = ({ id, trackAuthor, trackName, trackAlbum, trackDuration, trackTitleLink }) => {
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


    const [addTrack ] = useAddFavoriteTrackMutation();
    const [deleteTrack ] = useDeleteFavoriteTrackMutation();
    const [liked, setLiked ] = useState(false)
    
    
    const addFavorite = () => {
        addTrack(id);
        setLiked(true)
    };

    const deleteFavorite = () => {
        deleteTrack(id);
        setLiked(false)
    };


    const { data } = useGetFavoriteTracksQuery('');

    let ids =  []
    data?.map((track) => ids.push(track.id))

    useEffect(() => {
        if (ids.includes(id)) {
            setLiked(true)
        } 
    }, [data])
    



  return (
    
    <div className={styles.playlist__item}>
        <div className={classNames(styles.playlist__track, styles.track)}>
            <div className={styles.track__title} onDoubleClick={setCurrentTrack} id={id} value={trackTitleLink}>
                { loading ? <Skeleton width={50} height={50} style={{marginRight: "25px"}} /> : 
                <div className={styles.track_image}>
                    <img className={styles.dislike_svg} src={!loading && Note} alt="note"></img>
                </div>}
                <div className={styles.title_text}>
                    {loading ? <Skeleton width={270}/> : <div className={styles.title_link} id={id}>{trackName}</div>}
                </div>
            </div>
            <div className={styles.author}>
                {loading ? <Skeleton width={240}/> : <div className={styles.author_link}> {trackAuthor}</div>}
            </div>
            <div className={styles.album}>
                {loading ? <Skeleton width={180}/> : <div className={styles.album_link}>{trackAlbum}</div>}
            </div>
            <div className={styles.time}>
                {!loading && 
                    <svg onClick={liked ? deleteFavorite : addFavorite }
                     className={liked ? styles.liked : styles.like_svg} 
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.99997 2.25572H8.02154C8.95343 1.44175 11.4125 0.165765 13.6127 1.76734C16.9673 4.20921 13.902 9.5 8.02154 13H7.99997M8.00003 2.25572H7.97846C7.04657 1.44175 4.58746 0.165765 2.38727 1.76734C-0.967302 4.20921 2.09797 9.5 7.97846 13H8.00003"
                            stroke="#696969"
                        />
                    </svg>}

                {loading ? <Skeleton width={35}/> : <span className={styles.time_text}>{trackDuration}</span>}
            </div>
        </div>
    </div>
   
  )
}

export default playlist_item;
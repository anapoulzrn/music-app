import React, { useEffect, useState } from 'react'
import { useAddFavoriteTrackMutation, useDeleteFavoriteTrackMutation, useGetFavoriteTracksQuery } from '../redux/musicApi';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import styles from '../css/player.module.css';


const likeButtons = ( {id}) => {

    const [addTrack ] = useAddFavoriteTrackMutation();
    const [deleteTrack ] = useDeleteFavoriteTrackMutation();
    const [liked, setLiked ] = useState(false)
    const trackId = useSelector((state) => state.player.id);

    const addFavorite = () => {
        addTrack(trackId);
        setLiked(true)
    };

    const deleteFavorite = () => {
        deleteTrack(trackId);
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
    <div className={styles.like_dis}>
    <div
        onClick={addFavorite}
        className={classNames(styles.like, styles.btn_icon)}
    >
        <svg
            className={liked ? styles.liked : styles.dislike_svg}
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.99997 2.25572H8.02154C8.95343 1.44175 11.4125 0.165765 13.6127 1.76734C16.9673 4.20921 13.902 9.5 8.02154 13H7.99997M8.00003 2.25572H7.97846C7.04657 1.44175 4.58746 0.165765 2.38727 1.76734C-0.967302 4.20921 2.09797 9.5 7.97846 13H8.00003"
                stroke="#696969"
            />
        </svg>
    </div>
    <div
        onClick={deleteFavorite}
        className={classNames(styles.dislike, styles.btn_icon)}
    >
        <svg
            className={styles.dislike_svg}
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M1 1L15 13.5" stroke="#696969" />
            <path
                d="M8.34372 3.25572H8.36529C9.29718 2.44175 11.7563 1.16576 13.9565 2.76734C17.3111 5.20921 14.2458 10.5 8.36529 14H8.34372M8.34378 3.25572H8.32221C7.39032 2.44175 4.93121 1.16576 2.73102 2.76734C-0.623552 5.20921 2.44172 10.5 8.32221 14H8.34378"
                stroke="#696969"
            />
        </svg>
    </div>
</div>
  )
}

export default likeButtons;
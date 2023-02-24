import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Note from './img/icon/note.svg';
import Like from './img/icon/like.svg';


const playlist_item = (props) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2500);
        return () => clearTimeout(timer)
    }, []);

  return (
    
    <div className="playlist__item">
        <div className="playlist__track track">
            <div className="track__title">
                { loading ? <Skeleton width={50} height={50} style={{marginRight: "25px"}} /> : 
                <div className="track__title-image">
                    <img className="track-play__dislike-svg" src={!loading && Note} alt="note"></img>
                </div>}
                <div className="track__title-text">
                    <a className="track__title-link" href="http://">{loading ? <Skeleton width={270}/> : props.track.title} </a>
                </div>
            </div>
            <div className="track__author">
                <a className="track__author-link" href="http://">{loading ? <Skeleton width={240}/> : props.track.artist}</a>

            </div>
            <div className="track__album">
                <a className="track__album-link" href="http://">{loading ? <Skeleton width={180}/> : props.track.album}</a>

            </div>
            <div className="track__time">
                {!loading && <img className="track__time-svg" src={Like} alt="time"></img>}
                <span className="track__time-text">{loading ? <Skeleton width={35}/> : props.track.duration}</span>

            </div>
        </div>
    </div>
   
  )
}

export default playlist_item;
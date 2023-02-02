import React from 'react';
import Note from './img/icon/note.svg';
import Like from './img/icon/like.svg';


const playlist_item = () => {
  return (
    
    <div className="playlist__item">
        <div className="playlist__track track">
            <div className="track__title">
                <div className="track__title-image">
                    <img className="track-play__dislike-svg" src={Note} alt="note"></img>
                </div>
                <div className="track__title-text">
                    <a className="track__title-link" href="http://">Guilt <span className="track__title-span"></span></a>
                </div>
            </div>
            <div className="track__author">
                <a className="track__author-link" href="http://">Nero</a>
            </div>
            <div className="track__album">
                <a className="track__album-link" href="http://">Welcome Reality</a>
            </div>
            <div className="track__time">
                <img className="track__time-svg" src={Like} alt="time"></img>
                <span className="track__time-text">4:44</span>
            </div>
        </div>
    </div>
   
  )
}

export default playlist_item;
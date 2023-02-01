import React from 'react';
import Playlist_item from './playlist_item';
import Watch from './img/icon/watch.svg';


const content = () => {
  return (
    <div className='centerblock__content'>
        <div className="content__title playlist-title">
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div className="playlist-title__col col03">АЛЬБОМ</div>
            <div className="playlist-title__col col04">
                <img src={Watch} className="playlist-title__svg" alt="time"></img>
            </div>
        </div>

        <div className="content__playlist playlist">
            <Playlist_item/>
            <Playlist_item/>
            <Playlist_item/>
            <Playlist_item/>
            <Playlist_item/>
            {/* <Playlist_item/>
            <Playlist_item/> */}
        </div>
    </div>
  )
}

export default content;
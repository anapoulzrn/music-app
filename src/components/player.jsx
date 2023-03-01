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

const player = (props) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2500);
        return () => clearTimeout(timer)
    }, []);

  return (
    <div className="bar__player player">
        <div className="player__controls">
            <div className="player__btn-prev">
                <img src={Prev} className="player__btn-prev-svg" alt="prev">
                </img>
            </div>
            <div className="player__btn-play _btn">
                <img src={Play} className="player__btn-play-svg" alt="play">
                </img>
            </div>
            <div className="player__btn-next">
                <img src={Next} className="player__btn-next-svg" alt="next">
                </img>
            </div>
            <div className="player__btn-repeat _btn-icon">
                <img src={Repeat} className="player__btn-repeat-svg" alt="repeat">
                </img>
            </div>
            <div className="player__btn-shuffle _btn-icon">
                <img src={Shuffle} className="player__btn-shuffle-svg" alt="shuffle">
                </img>
            </div>
            
        </div>

        <div className="player__track-play track-play">
            <div className="track-play__contain">
                {loading ? <Skeleton width={50} height={50} style={{marginRight: "15px"}} /> :
                <div className="track-play__image">
                    <img className="track__title-svg" src={Note} alt="music"></img>
                </div>}
                {loading ? <Skeleton count={2} width={90} height={15} /> :  
                    <div>
                    <div className="track-play__author">
                        <a className="track-play__author-link" href="http://">{props.song}</a>
                    </div>
                    <div className="track-play__album">
                        <a className="track-play__album-link" href="http://">{props.artist}</a>
                    </div>
                    </div>
                }
            </div>

            <div className="track-play__like-dis">
                <div className="track-play__like _btn-icon">
                    <img className="track-play__dislike-svg" src={Like} alt="like"></img>
                </div>
                <div className="track-play__dislike _btn-icon">
                    <img className="track-play__dislike-svg" src={Dislike} alt="dislike"></img>
                </div>
            </div>
        </div>

    </div>

  )
}

export default player;
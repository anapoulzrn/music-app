import React from 'react';
import Volume from './img/icon/volume.svg';


const volume = () => {
  return (
    <div className="bar__volume-block volume">
       <div className="volume__content">
            <div className="volume__image">
                <img src={Volume} className="volume__svg" alt="volume"></img>
            </div>
            <div className="volume__progress _btn">
                <input className="volume__progress-line _btn" type="range" name="range"></input>
            </div>
            
       </div>
    </div>
  )
}

export default volume;
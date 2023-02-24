import React from 'react';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Playlist01 from './img/playlist01.png';
import Playlist02 from './img/playlist02.png';
import Playlist03 from './img/playlist03.png';


const main_sidebar = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2500);
        return () => clearTimeout(timer)
    }, []);
  
  return (
    <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
            <p className="sidebar__personal-name">Sergey.Ivanov</p>
            <div className="sidebar__avatar"> 
            </div>
        </div>
        <div className="sidebar__block">
        {loading ? <Skeleton count={3} width={200} height={120} style={{marginRight: "115px", marginBottom: "22px"}} /> :
            <div className="sidebar__list">
                <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                        <img className="sidebar__img" src={Playlist01} alt="day's playlist"></img>
                    </a>
                </div>
                <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                        <img className="sidebar__img" src={Playlist02} alt="day's playlist"></img>
                    </a>
                </div>
                <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                        <img className="sidebar__img" src={Playlist03} alt="day's playlist"></img>
                    </a>
                </div>
            </div>}
        </div>
</div>
  )
}

export default main_sidebar;
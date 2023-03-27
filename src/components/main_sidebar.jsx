import React from 'react';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Playlist01 from './img/playlist01.png';
import Playlist02 from './img/playlist02.png';
import Playlist03 from './img/playlist03.png';
import classNames from 'classnames';
import styles from "../css/main_sidebar.module.css";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPlaylistId, getPlaylistName } from '../redux/slices/playlistSlice';




const main_sidebar = () => {

    const dispatch = useDispatch();

    function setPlaylist1() {
        dispatch(getPlaylistId(1))
        dispatch(getPlaylistName('Плейлист дня'))
    }

    function setPlaylist2 (){
        dispatch(getPlaylistId(2))
        dispatch(getPlaylistName('100 танцевальных хитов'))
    }

    function setPlaylist3() {
        dispatch(getPlaylistId(3))
        dispatch(getPlaylistName('Инди-заряд'))
    }

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000);
        return () => clearTimeout(timer)
    }, []);
  
  return (
    <div className={classNames(styles.main__sidebar, styles.sidebar)}>
        <div className={styles.personal}>
            <p className={styles.name}>Sergey.Ivanov</p>
            <div className={styles.avatar}> 
            </div>
        </div>
        <div className={styles.block}>
        {loading ? <Skeleton count={3} width={200} height={120} style={{marginRight: "115px", marginBottom: "22px"}} /> :
            <div className={styles.list}>
                <NavLink to={'/playlist/day_mix'} onClick={setPlaylist1} value={'Плейлист дня'} id={1} className={styles.item}>
                    <div className={styles.link}>
                        <img className={styles.img} src={Playlist01} alt="day's playlist"></img>
                    </div>
                </NavLink>
                <NavLink to={'/playlist/dance_mix'} onClick={setPlaylist2} value={'100 танцевальных хитов'} id={2} className={styles.item}>
                    <div className={styles.link}>
                        <img className={styles.img} src={Playlist02} alt="100 hits"></img>
                    </div>
                </NavLink>
                <NavLink to={'/playlist/indie_mix'} onClick={setPlaylist3} value={'Инди-заряд'} id={3} className={styles.item}>
                    <div className={styles.link} >
                        <img className={styles.img} src={Playlist03} alt="indie mix"></img>
                    </div>
                </NavLink>
            </div>}
        </div>
</div>
  )
}

export default main_sidebar;
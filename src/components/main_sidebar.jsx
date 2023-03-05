import React from 'react';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Playlist01 from './img/playlist01.png';
import Playlist02 from './img/playlist02.png';
import Playlist03 from './img/playlist03.png';
import classNames from 'classnames';
import styles from "../css/main_sidebar.module.css";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { playlists } from '../constants'; 


const main_sidebar = () => {

    const params = useParams();
    const playlist = playlists.map((playlist) => playlist.id === params.id)
    const navigate = useNavigate();

    // console.log(playlists)

    const goToPlaylist = () => {
        navigate(`/playlist/${playlist.id}`, {replace: true})
        
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
                <div  onClick={goToPlaylist} className={styles.item}>
                    <div className={styles.link}>
                        <img className={styles.img} src={Playlist01} alt="day's playlist"></img>
                    </div>
                </div>
                <div  onClick={goToPlaylist} className={styles.item}>
                    <div className={styles.link}>
                        <img className={styles.img} src={Playlist02} alt="100 hits"></img>
                    </div>
                </div>
                <div  onClick={goToPlaylist} className={styles.item}>
                    <div className={styles.link} >
                        <img className={styles.img} src={Playlist03} alt="indie mix"></img>
                    </div>
                </div>
            </div>}
        </div>
</div>
  )
}

export default main_sidebar;
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



const main_sidebar = () => {

    const navigate = useNavigate();

    const goToDayMix = () => {
        navigate('/playlist/day_mix', {replace: true})
    }

    const goToDanceMix = () => {
        navigate('/playlist/dance_mix', {replace: true}) 
    }

    const goToIndieMix = () => {
        navigate('/playlist/indie_mix', {replace: true})  
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
                <div  onClick={goToDayMix} className={styles.item}>
                    <div className={styles.link}>
                        <img className={styles.img} src={Playlist01} alt="day's playlist"></img>
                    </div>
                </div>
                <div  onClick={goToDanceMix} className={styles.item}>
                    <div className={styles.link}>
                        <img className={styles.img} src={Playlist02} alt="100 hits"></img>
                    </div>
                </div>
                <div  onClick={goToIndieMix} className={styles.item}>
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
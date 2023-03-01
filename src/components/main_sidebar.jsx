import React from 'react';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Playlist01 from './img/playlist01.png';
import Playlist02 from './img/playlist02.png';
import Playlist03 from './img/playlist03.png';
// eslint-disable-next-line no-undef
let classNames = require('classnames');
import styles from "../css/main_sidebar.module.css";

const main_sidebar = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2500);
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
                <div className={styles.item}>
                    <a className={styles.link} href="#">
                        <img className={styles.img} src={Playlist01} alt="day's playlist"></img>
                    </a>
                </div>
                <div className={styles.item}>
                    <a className={styles.link} href="#">
                        <img className={styles.img} src={Playlist02} alt="day's playlist"></img>
                    </a>
                </div>
                <div className={styles.item}>
                    <a className={styles.link} href="#">
                        <img className={styles.img} src={Playlist03} alt="day's playlist"></img>
                    </a>
                </div>
            </div>}
        </div>
</div>
  )
}

export default main_sidebar;
import React, {  useContext, useState } from 'react';
import Logo from './img/logo.png';
import classNames from 'classnames';
import styles from "../css/main_nav.module.css";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';


const main_nav = () => {

    const { setAuth } = useContext(AuthContext);
    const logOut = (event) => {
        event.preventDefault();
        setAuth(false);
        localStorage.removeItem('auth');
    }
  

    const navigate = useNavigate();

    const goToPlaylist = () => {
        navigate('/playlist/my_library', {replace: true})
    }

    const goToMain = () => {
        navigate('/main', {replace: true})
    }

    const [burgerClass, setBurgerClass] = useState(`${styles.menu_hidden}`);
    const [burgerVisibility, setBurgerVisibility] = useState(false);

    function updateBurger() {
        if (!burgerVisibility) {
            setBurgerClass(`${styles.menu}`);
        } else {
            setBurgerClass(`${styles.menu_hidden}`);
        }
        setBurgerVisibility((prev) => !prev);
    }


  return (
    <nav className={classNames(styles.main__nav, styles.nav)}>
        <div className={styles.logo}>
            <img onClick={goToMain} className={styles.image} src={Logo} alt="logo"></img>
        </div>

        <button onClick={updateBurger} className={styles.burger}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </button>
        <div className={burgerClass}>

            <ul className={styles.list}>
                <li className={styles.item}><div onClick={goToMain} className={styles.link}>Главная</div></li>
                <li className={styles.item}><div onClick={goToPlaylist} className={styles.link}>Мой плейлист</div></li>
                <li className={styles.item}><div onClick={logOut} className={styles.link}>Выйти</div></li>
            </ul>
        </div>
        
    </nav>
  )
}

export default main_nav;
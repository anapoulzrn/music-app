import React, {useState} from 'react';
import Logo from './img/logo.png';
// eslint-disable-next-line no-undef
let classNames = require('classnames');
import styles from "../css/main_nav.module.css";

const main_nav = () => {

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
            <img className={styles.image} src={Logo} alt="logo"></img>
        </div>

        <button onClick={updateBurger} className={styles.burger}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </button>
        <div className={burgerClass}>

            <ul className={styles.list}>
                <li className={styles.item}><a href="http://" className={styles.link}>Главное</a></li>
                <li className={styles.item}><a href="http://" className={styles.link}>Мой плейлист</a></li>
                <li className={styles.item}><a href="http://" className={styles.link}>Войти</a></li>
            </ul>
        </div>
        
    </nav>
  )
}

export default main_nav;
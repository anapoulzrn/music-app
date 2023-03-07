import React, { useContext } from 'react';
import '../css/style.css';
import styles from '../css/login.module.css';
import Logo from '../components/img/logo_black.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';



const login = () => {

  const { setAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setAuth(true);
    localStorage.setItem('auth', 'true')
  }


    return (
      <div className={styles.container}>
        <div className={styles.form}>
          <img className={styles.image} src={Logo} alt="logo"></img>
            <div className={styles.inputs}>
              <input className={styles.input} type="text" placeholder="Логин"/>
              <input className={styles.input} type="text" placeholder="Пароль"/>
            </div>
            <div className={styles.buttons}>
                <div>
                  <button onClick={login} className={styles.button1}>Войти</button>
                </div>
                <Link to="/register">
                  <button className={styles.button2}>  Зарегистрироваться</button>
                </Link>
            </div>
        </div>
      </div>
    );
};

export default login;

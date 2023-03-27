import React, { useState } from 'react';
import '../css/style.css';
import styles from '../css/login.module.css';
import Logo from '../components/img/logo_black.png';
import { Link  } from 'react-router-dom';
import LoginButton from '../components/loginButton';



const login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const setLoginValue = ({ target }) => {
    setEmail(target.value)
  }

  const setPasswordValue = ({ target }) => {
      setPassword(target.value)
  }

    return (
      <div className={styles.container}>
        <div className={styles.form}>
          <img className={styles.image} src={Logo} alt="logo"></img>
            <div className={styles.inputs}>
              <input className={styles.input} onChange={setLoginValue} type="text" placeholder="Почта"/>
              <input className={styles.input} onChange={setPasswordValue} type="password" placeholder="Пароль"/>
            </div>
            <div className={styles.buttons}>
                <div>
                  <LoginButton email={email} password={password}/>

                </div>
                <Link to="/register">
                  <button className={styles.button2}>Зарегистрироваться</button>
                </Link>
            </div>
        </div>
      </div>
    );
};

export default login;

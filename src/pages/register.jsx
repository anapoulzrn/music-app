import React, { useContext } from 'react';
import '../css/style.css';
import styles from '../css/register.module.css';
import Logo from '../components/img/logo_black.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const register = () => {
    const { setAuth } = useContext(AuthContext);
    const login = (event) => {
        event.preventDefault();
        setAuth(true);
    };

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <img className={styles.image} src={Logo} alt="logo"></img>
                <div className={styles.inputs}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Логин"
                    />
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Пароль"
                    />
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Повторите пароль"
                    />
                </div>
                <Link to="/main">
                    <button onClick={login} className={styles.button}>
                        Зарегистрироваться
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default register;

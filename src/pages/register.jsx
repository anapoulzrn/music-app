/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import '../css/style.css';
import styles from '../css/register.module.css';
import Logo from '../components/img/logo_black.png';
import { useUserSignupMutation } from '../redux/musicApi';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';


const register = () => {
    const { setAuth } = useContext(AuthContext);
    const [ signup, { isSuccess, error }] = useUserSignupMutation();
    const navigate = useNavigate();

    const [userValues, setUserValues] = useState({
        username: '',
        email: '',
        password: '',
    })

    const register = () => {
        if (userValues.password !== '' && userValues.email !== '' && userValues.login !== '') {

            signup(userValues);
            navigate('/main', { replace: true });
            setAuth(true);
            localStorage('auth', 'true');
        } 
    }

    const setLoginValue = (e) => {
        setUserValues({
            ...userValues,
            username: e.target.value,
        })
    }

    const setEmailValue = (e) => {
        setUserValues({
            ...userValues,
            email: e.target.value,
        })
    }

    const setPasswordValue = (e) => {
        setUserValues({
            ...userValues,
            password: e.target.value,
        })
    }


    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <img className={styles.image} src={Logo} alt="logo"></img>
                <div className={styles.inputs}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Логин"
                        onChange={setLoginValue}
                    />
                    <input
                        className={styles.input}
                        type="e-mail"
                        placeholder="E-mail"
                        onChange={setEmailValue}
                    />
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Введите пароль"
                        onChange={setPasswordValue}
                    />
                </div>
                <button onClick={() => register()} className={styles.button}>
                    Зарегистрироваться
                </button>
            </div>
        </div>
    );
};

export default register;

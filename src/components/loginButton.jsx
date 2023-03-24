import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { setLogin, setToken } from '../redux/slices/userSlice';
import { useGetTokenMutation, useUserLoginMutation } from '../redux/musicApi';
import styles from '../css/login.module.css';


const loginButton = ( {email, password }) => {

const { setAuth } = useContext(AuthContext)
const dispatch = useDispatch();
const navigate = useNavigate();

const [login, { data, isSuccess, isLoading }] = useUserLoginMutation()
const [getToken, { data: token, error: tokenError }] = useGetTokenMutation()

  const loginHandler = (e) => {
        e.preventDefault()
        if (!email || !password) {
            alert('Введите свои учетные данные или зарегистрируйтесь')
        } else {
            login({
                email,
                password,
            })
            getToken({
                email,
                password,
            })
        }
    }

    if (isLoading) {
        console.log('loading')
    }

    if (tokenError) {
        console.log("error")
    }
  
    useEffect(() => {
        if (isSuccess) {
            setAuth(true);
            localStorage.setItem('auth', 'true');
            navigate('/main')
            document.cookie = `username=${data?.username}`
            dispatch(setToken (token?.access))
            document.cookie = `token=${token?.refresh}`
            dispatch(setLogin())
        }
    }, [token])


  return (
    <button className={styles.button1} onClick={loginHandler}>Войти</button>
  )
}

export default loginButton;
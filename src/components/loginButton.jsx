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

const [login, { isLoading }] = useUserLoginMutation()
const [getToken, {isSuccess, error: tokenError }] = useGetTokenMutation()

 const loginHandler = async (e) => {
        e.preventDefault()
        if (!email || !password) {
            alert('Введите свои учетные данные или зарегистрируйтесь')
        } else {

           const resultLogin = await login({
                email,
                password,
            })
            const resultGetToken = await getToken({
                email,
                password,
            })

            // console.log(resultGetToken, resultLogin)

            document.cookie = `username=${resultLogin.data.username}`
            dispatch(setToken(resultGetToken.data.access))
            document.cookie = `token=${resultGetToken.data.refresh}`
            dispatch(setLogin())
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
        }
    }, [isSuccess])

    

  return (
    <button className={styles.button1} onClick={loginHandler}>Войти</button>
  )
}

export default loginButton;
import React, { useContext, useState } from 'react';
import Logo from './img/logo.png';
import Logo_dark from './img/logo_black.png';
import classNames from 'classnames';
import styles from '../css/main_nav.module.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { useTheme } from '../hooks/useTheme';


const main_nav = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logOut = (event) => {
        event.preventDefault();
        setAuth(false);
        localStorage.removeItem('auth');
    };

    const goToPlaylist = () => {
        navigate('/playlist/my_library', { replace: true });
    };

    const goToMain = () => {
        navigate('/main', { replace: true });
    };

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

    const theme = useTheme();

    function changeTheme() {
        console.log(theme)
        theme.changeTheme(theme.theme ==='light' ? 'dark' : 'light' )
    }


    return (
        <nav className={classNames(styles.main__nav, styles.nav)}>
            <div className={styles.logo}>
                <img
                    onClick={goToMain}
                    className={styles.image}
                    src={ theme.theme === 'light'? Logo_dark : Logo}
                    alt="logo"
                ></img>
            </div>

            <button onClick={updateBurger} className={styles.burger}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </button>
            <div className={burgerClass}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <div onClick={goToMain} className={styles.link}>
                            Главная
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div onClick={goToPlaylist} className={styles.link}>
                            Мой плейлист
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div onClick={logOut} className={styles.link}>
                            Выйти
                        </div>
                    </li>
                </ul>
                <div onClick={changeTheme} className={styles.theme_block}>
                   { theme.theme === 'light' ? <svg className={styles.theme_svg} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.887 26.5137C16.4577 26.5137 13.668 23.7239 13.668 20.2947C13.668 16.8654 16.4577 14.0762 19.887 14.0762C23.3163 14.0762 26.106 16.866 26.106 20.2947C26.106 23.7239 23.3163 26.5137 19.887 26.5137ZM19.887 15.3197C17.1438 15.3197 14.912 17.5515 14.912 20.2947C14.912 23.0384 17.1438 25.2697 19.887 25.2697C22.6302 25.2697 24.862 23.0384 24.862 20.2947C24.862 17.552 22.6302 15.3197 19.887 15.3197Z" fill="black"/>
                        <path d="M19.8867 11.7103C19.5431 11.7103 19.2646 11.4313 19.2646 11.0883V8.49648C19.2646 8.15292 19.5431 7.875 19.8867 7.875C20.2297 7.875 20.5087 8.15292 20.5087 8.49648V11.0883C20.5087 11.4313 20.2297 11.7103 19.8867 11.7103Z" fill="black"/>
                        <path d="M26.0762 14.8717C25.9169 14.8717 25.7581 14.8109 25.6363 14.6896C25.3934 14.4472 25.3934 14.0533 25.6363 13.8103L27.8645 11.5822C28.1074 11.3398 28.5008 11.3398 28.7437 11.5822C28.9867 11.8252 28.9867 12.2191 28.7437 12.4615L26.5156 14.6896C26.3944 14.8109 26.2356 14.8717 26.0762 14.8717Z" fill="black"/>
                        <path d="M12.7063 14.8717C12.547 14.8717 12.3877 14.8109 12.2664 14.6896L10.0378 12.4615C9.79534 12.2191 9.79534 11.8252 10.0378 11.5822C10.2808 11.3398 10.6746 11.3398 10.9171 11.5822L13.1457 13.8103C13.3882 14.0533 13.3882 14.4477 13.1457 14.6896C13.0245 14.8109 12.8652 14.8717 12.7063 14.8717Z" fill="black"/>
                        <path d="M19.3915 32.621C19.048 32.621 18.7695 32.3425 18.7695 31.999V29.4072C18.7695 29.0636 19.048 28.7852 19.3915 28.7852C19.7346 28.7852 20.013 29.0636 20.013 29.4072V31.999C20.013 32.3425 19.7346 32.621 19.3915 32.621Z" fill="black"/>
                        <path d="M10.9732 29.0963C10.8144 29.0963 10.655 29.0354 10.5338 28.9142C10.2908 28.6717 10.2908 28.2774 10.5338 28.0344L12.7619 25.8063C13.0049 25.5633 13.3982 25.5633 13.6412 25.8063C13.8842 26.0487 13.8842 26.4426 13.6412 26.6855L11.4131 28.9142C11.2919 29.0354 11.1325 29.0963 10.9732 29.0963Z" fill="black"/>
                        <path d="M28.8005 29.0963C28.6416 29.0963 28.4823 29.0354 28.3605 28.9142L26.1324 26.6855C25.8895 26.4426 25.8895 26.0492 26.1324 25.8063C26.3754 25.5633 26.7687 25.5633 27.0117 25.8063L29.2398 28.0344C29.4828 28.2774 29.4828 28.6707 29.2398 28.9142C29.1186 29.0354 28.9598 29.0963 28.8005 29.0963Z" fill="black"/>
                        <path d="M10.4779 20.9169H7.67963C7.33607 20.9169 7.05762 20.6384 7.05762 20.2949C7.05762 19.9518 7.33607 19.6729 7.67963 19.6729H10.4779C10.8214 19.6729 11.0999 19.9513 11.0999 20.2949C11.0994 20.6384 10.8214 20.9169 10.4779 20.9169Z" fill="black"/>
                        <path d="M31.6212 20.9169H28.3041C27.9606 20.9169 27.6821 20.6384 27.6821 20.2949C27.6821 19.9518 27.9606 19.6729 28.3041 19.6729H31.6212C31.9642 19.6729 32.2432 19.9513 32.2432 20.2949C32.2432 20.6384 31.9642 20.9169 31.6212 20.9169Z" fill="black"/>
                        <circle cx="19.5576" cy="20.375" r="19" stroke="black"/>
                    </svg> :
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.2836 28.1637C14.7493 28.1637 11.0605 24.4749 11.0605 19.9406C11.0605 15.6864 14.2507 12.1687 18.4807 11.758C18.7516 11.731 19.0073 11.88 19.119 12.1271C19.2313 12.3743 19.1741 12.6651 18.9766 12.8507C17.9454 13.8215 17.3777 15.1311 17.3777 16.5389C17.3777 19.3352 19.6527 21.6102 22.449 21.6102C23.9739 21.6102 25.4033 20.9324 26.3719 19.7518C26.544 19.5419 26.8311 19.4658 27.0836 19.5597C27.3378 19.6546 27.5029 19.9007 27.4954 20.1716C27.3713 24.653 23.764 28.1637 19.2836 28.1637ZM16.9498 13.3844C14.2264 14.3422 12.3281 16.9226 12.3281 19.9406C12.3281 23.7762 15.4481 26.8962 19.2836 26.8962C22.4959 26.8962 25.1772 24.762 25.9834 21.8028C24.9506 22.4984 23.7262 22.8788 22.449 22.8788C18.9534 22.8788 16.1097 20.0356 16.1097 16.5395C16.1097 15.4106 16.401 14.3325 16.9498 13.3844Z" fill="white"/>
                    <circle cx="19.5576" cy="20.2549" r="19" stroke="white"/>
                    </svg>}
                </div>
            </div>
        </nav>
    );
};

export default main_nav;

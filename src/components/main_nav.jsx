import React, {useState} from 'react';
import Logo from './img/logo.png';

const main_nav = () => {

    const [burgerClass, setBurgerClass] = useState('nav__menu_hidden');
    const [burgerVisibility, setBurgerVisibility] = useState(false);

    function updateBurger() {
        if (!burgerVisibility) {
            setBurgerClass('nav__menu');
        } else {
            setBurgerClass('nav__menu_hidden');
        }
        setBurgerVisibility(!burgerVisibility);
    }


  return (
    <nav className="main__nav nav">
        <div className="nav__logo logo">
            <img className="logo__image" src={Logo} alt="logo"></img>
        </div>

        <button onClick={updateBurger} className="nav__burger burger">
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
        </button>
        <div className={burgerClass}>

            <ul className="menu__list">
                <li className="menu__item"><a href="http://" className="menu__link">Главное</a></li>
                <li className="menu__item"><a href="http://" className="menu__link">Мой плейлист</a></li>
                <li className="menu__item"><a href="http://" className="menu__link">Войти</a></li>
            </ul>
        </div>
        
    </nav>
  )
}

export default main_nav;
import React from 'react';
import s from './Header.module.css';


const Header = (props) => {
    return (
        <header className={s.header} >
            <p className={s.login}>{props.profile.userData ? props.profile.userData.login : 'I am learning React'}</p>
            <img src='https://cdn4.iconfinder.com/data/icons/essential-app-1/16/moon-night-dard-stars-256.png' alt="logo"/>
        </header>
    )
}

export default Header;
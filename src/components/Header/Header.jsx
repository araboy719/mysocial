import React from 'react';
import s from './Header.module.css';


const Header = (props) => {
    return (
        <header className={s.header} >
            {<p className={s.login}>{props.profile.loged ? props.profile.userData.login : "login" }</p>}
            <img src='https://cdn4.iconfinder.com/data/icons/essential-app-1/16/moon-night-dard-stars-256.png' alt="logo"/>
        </header>
    )
}

export default Header;
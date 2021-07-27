import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


const Header = (props) => {
    return (
        <header className={s.header} >
            { props.profile.login ? <NavLink  to="/profile" >{props.profile.login}</NavLink> : <NavLink to="/login" activeClassName={s.active}>Login</NavLink>}
        </header>
    )
}
export default Header;
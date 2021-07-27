import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


const Header = (props) => {
    const logoutSubmit = () => {
        props.logOut();
    }

    return (
        <header className={s.header} >
            { props.login ? 
                <div><NavLink  to="/profile" >{props.login}</NavLink><button onClick={() => logoutSubmit()}>logout</button></div> :
                <NavLink to="/login" activeClassName={s.active}>Login</NavLink>}
        </header>
    )
}
export default Header;
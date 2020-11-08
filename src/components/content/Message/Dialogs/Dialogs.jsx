import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Message.module.css';



const Dialog = (props) => {
    let path = "/dialog/" + props.id
    
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )

}


export default Dialog;
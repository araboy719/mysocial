import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header} >
            <img src='https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/fitness-logo-maker/fitness-logo-template-with-an-abstract-energetic-human-illustration-2457a-1024x1024.png'>
            </img>
        </header>
    )
}

export default Header;
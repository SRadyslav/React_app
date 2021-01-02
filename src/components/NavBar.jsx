import React from 'react';
import s from './style/NavBar.module.css';

const NavBar = () => {
    return(
    <nav className={s.nav}>
        <div className={`${s.item} ${s.active} `}>
            <a> Profile </a>
        </div>
        <div className={s.item}>
            <a> Message </a>
        </div>
        <div className={s.item}>
            <a> News </a>
        </div>
        <div className={s.item}>
            <a> Music</a>
        </div>
        <div className={s.item}>
        <a> Video </a>
        </div>
        <div className={s.item}>
        <a> Settings </a>
        </div>
    </nav>
    );
}

export default NavBar;
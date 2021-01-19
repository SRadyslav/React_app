import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://pngimg.com/uploads/circle/circle_PNG50.png' />
            <div className={s.loginBlock}>
            {props.isAuth ? props.login
                :<NavLink className={s.navLink} to="/login" >Login</NavLink>}
            </div>
        </header>
    );
}

export default Header; 
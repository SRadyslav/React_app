import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

export type PropsType = {
    isAuth: boolean
    logout: () => void
    login: string | null
}

const Header: React.FC<PropsType> = (props) => {
    return (
        <header className={s.header}>
            <img src='https://pngimg.com/uploads/circle/circle_PNG50.png' />
            <div className={s.loginBlock}>
                {props.isAuth 
                    ? <div>{props.login} <button onClick={props.logout} >Log out</button> </div>
                    : <NavLink className={s.navLink} to="/login" >Login</NavLink>}
            </div>
        </header>
    );
}

export default Header; 
import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'



const Dialogs =(props) => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1" activeClassName={s.active}> Akashi </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2" activeClassName={s.active}> Shenko </NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/3" activeClassName={s.active}> Rina </NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/4" activeClassName={s.active}> Venev </NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/5" activeClassName={s.active}> Garage </NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    i'm done!
                </div>
                <div className={s.message}>
                    Yo
                </div>
                <div className={s.message}>
                    What's up
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
import React from 'react';
import {NavLink} from "react-router-dom";
import s from './DialogItem.module.css'

type PropsType = {
    id: number
    name: string
}
const DialogItem: React.FC<PropsType> = (props) => {
    let path= "/dialogs/1" + props.id;
    return (
        <div className={s.dialog}>
                    <NavLink to={path} activeClassName={s.active}> {props.name} </NavLink>
                </div>
    )
}


export default DialogItem;
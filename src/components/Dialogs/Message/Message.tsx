import React from 'react';
import s from "./Message.module.css"

type PropsType = {
    message: string
}
const Message: React.FC<PropsType> = (props) => {
    return (
    <div className={s.message}>
        <div>
            {props.message}
        </div>
    </div>
    )
}


export default Message;
import React from 'react';
import { ChatMessageType } from '../../../pages/Chat/ChatPage';
import s from "./Message.module.css"



type PropsType = {
    message?: string
    chatMessage?: ChatMessageType
}
const Message: React.FC<PropsType> = (props) => {
    
    return (
    <div className={s.message}>
        <img src={props.chatMessage?.photo} className={s.avatar} /> <b>{props.chatMessage?.userName}</b>
        <br/>
        {!!props.message && props.message }
        {!props.message && props.chatMessage?.message}
        
        <hr/>
    </div>
    )
}


export default Message;
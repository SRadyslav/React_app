import React from 'react';
import { ChatMessageAPIType } from '../../../api/chat-api';
import s from "./Message.module.css"



type PropsType = {
    message?: string
    chatMessage?: ChatMessageAPIType
}
const Message: React.FC<PropsType> = React.memo((props) => {
    
    return (
    <div className={s.message}>
        <img src={props.chatMessage?.photo} className={s.avatar} /> <b>{props.chatMessage?.userName}</b>
        <br/>
        {!!props.message && props.message }
        {!props.message && props.chatMessage?.message}
        
        <hr/>
    </div>
    )
})


export default Message;
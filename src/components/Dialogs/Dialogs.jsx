import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { Redirect } from 'react-router-dom';
import AddMessageFormRedux from "./Message/AddMessageForm"

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);

    let messagesElements = state.messages
        .map(message => <Message message={message.message} key={message.id} />);

    const onSubmit = (formData) =>{
        props.sendMessageActionCreator(formData.newMessageText);
    }
        if (!props.isAuth) return <Redirect to={"/login"} />
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements} </div>
                
            </div>
            <div className={s.inputBlock}>
            <AddMessageFormRedux onSubmit={onSubmit} />
            </div>
        </div>
    );
}



export default Dialogs
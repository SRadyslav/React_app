import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = state.messages
        .map(message => <Message message={message.message} />);

    let sendMessage = () => {
        props.sendMessageActionCreator();
    };

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageTextActionCreator(text);
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements} </div>
            </div>
            <div className={s.inputBlock}>
                <textarea className={s.textarea} value={props.newMessageText}
                    onChange={onMessageChange}
                    placeholder="Enter your message"
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;
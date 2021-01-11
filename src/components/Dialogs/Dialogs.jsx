import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';



const Dialogs =(props) => {

    let state= props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = state.messages
    .map(message => <Message message={message.message}/> );

    let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
    };

    let onMessageChange = (event) => {
    let text = event.target.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
    };

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements} </div>
                <textarea value={props.newMessageText} 
                onChange={onMessageChange}
                placeholder="Enter your message"
                />
                <button onClick = {sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;
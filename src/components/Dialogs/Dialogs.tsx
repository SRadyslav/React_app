import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import AddMessageFormRedux from "./Message/AddMessageForm"
import { InitialStateType } from '../../redux/dialogs-reducer';
import { Route } from 'react-router-dom';

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (newMessageText: string) => void
}
export type NewMessageFormType = {
    newMessageText: string
}

const Dialogs: React.FC<PropsType> = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);

    let messagesElements = state.messages
        .map(message => <Message message={message.message} key={message.id} />);

    const onSubmit = (formData: NewMessageFormType) =>{
        props.sendMessage(formData.newMessageText);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages} style={{ height: '615px', overflowY: 'auto'}}>
                <div>{state.dialogs.map(d=>
                    <Route  path={`/dialogs/${d.id}`}> {messagesElements}</Route>)} </div>
                
            </div>
            <div className={s.inputBlock}>
            <AddMessageFormRedux onSubmit={onSubmit} />
            </div>
        </div>
    );
}



export default Dialogs
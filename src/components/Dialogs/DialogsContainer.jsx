import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';



const DialogsContainer = () => {




    return (
        <StoreContext >{
            (store) => {
                let state = store.getState().dialogsPage;
                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                };

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                };
                return (
                    <Dialogs updateNewMessageTextActionCreator={onMessageChange}
                        sendMessageActionCreator={sendMessage}
                        dialogsPage={state}
                        newMessageText={store.getState().dialogsPage.newMessageText}
                    />)
            }
        }</StoreContext>
    );
}

export default DialogsContainer;
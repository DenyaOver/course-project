import s from './Dialogs.module.css'
import React from 'react';
import { UpdateNewMessageBodyCreater, sendMessageCreater } from '../../redux/DialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {

    return (
    <StoreContext.Consumer> 
        {
        (store) => {

            let state = store.getState().messagesPage;

            let Information = () => {
                store.dispatch(sendMessageCreater());
            }
            
            let onNewMessageChange = (body) => {
                store.dispatch(UpdateNewMessageBodyCreater(body));
            }
            return <Dialogs updateNewMessageBody = {onNewMessageChange} 
                     SendMessage = {Information} 
                     DialogsPage = {state}/>
            }}
    </StoreContext.Consumer>)
}

export default DialogsContainer
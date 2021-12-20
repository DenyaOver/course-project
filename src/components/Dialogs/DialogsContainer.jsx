import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { UpdateNewMessageBodyCreater, sendMessageCreater } from '../../redux/DialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let Information = () => {
        props.store.dispatch(sendMessageCreater());
    }
    
    let onNewMessageChange = (body) => {
        props.store.dispatch(UpdateNewMessageBodyCreater(body));
    }

    return <Dialogs updateNewMessageBody = {onNewMessageChange} 
                    SendMessage = {Information} 
                    DialogsPage = {state}/>
}

export default DialogsContainer
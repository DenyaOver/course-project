import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { UpdateNewMessageBodyCreater, sendMessageCreater } from '../../redux/DialogsReducer';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogData
    .map( (dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messageElements = props.state.messagesData
    .map((message)=> <Message message={message.title} />)

    let newMessagesBody = props.state.newMessagesBody;

    let Information = () => {
        props.dispatch(sendMessageCreater());
    }
    
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(UpdateNewMessageBodyCreater(body));
    }

    return (
        <div>
            <div className= {s.dialogs}>
                <div className={s.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                    <textarea value={newMessagesBody}
                        onChange={onNewMessageChange}>
                    </textarea>
                    <button onClick={Information}> Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
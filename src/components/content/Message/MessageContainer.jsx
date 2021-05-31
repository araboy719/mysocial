import React from 'react';
import { SendMessageActionCreator, updateTextMessageActionCreator } from '../../../redux/Message-Reducer';
import Message from './Message';


const MessageContainer = (props) => {

    let SendMessage = () => {
        props.store.dispatch(SendMessageActionCreator());
    }
    let MessageOnchange = (text) => {
        let actiot = updateTextMessageActionCreator(text);
        props.store.dispatch(actiot);
    };

    let chat = props.store.getState().PageMessage.chat
    let dialogs = props.store.getState().PageMessage.dialogs
    let newTextMessage = props.store.getState().PageMessage.newMessage
    
    return <Message sendNewMessage={SendMessage} changeTextMessage={MessageOnchange} chat={chat} dialogs = {dialogs} newTextMessage={newTextMessage}/>
}

export default MessageContainer;
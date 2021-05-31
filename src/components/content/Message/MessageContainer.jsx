import React from 'react';
import { SendMessageActionCreator, updateTextMessageActionCreator } from '../../../redux/Message-Reducer';
import StoreContext from '../../../StoreContext';
import Message from './Message';


const MessageContainer = () => {

    return (<StoreContext.Consumer>
        { (store) => {
            let SendMessage = () => {
                store.dispatch(SendMessageActionCreator());
            }
            let MessageOnchange = (text) => {
                let actiot = updateTextMessageActionCreator(text);
                store.dispatch(actiot);
            };
            let storeMassagePage = store.getState().PageMessage;
            return <Message
                sendNewMessage={SendMessage}
                changeTextMessage={MessageOnchange}
                chat={storeMassagePage.chat}
                dialogs={storeMassagePage.dialogs}
                newTextMessage={storeMassagePage.newTextMessage} />
        }
        }
    </StoreContext.Consumer>)
}

export default MessageContainer;
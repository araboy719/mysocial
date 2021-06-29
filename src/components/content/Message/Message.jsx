import React from 'react';
import { Redirect } from 'react-router-dom';
import Chat from './Chat/Chat';
import Dialog from './Dialogs/Dialogs';
import s from './Message.module.css';


const Message = (props) => {

    let PageMessage = props.PageMessage;
    let DialogItems = PageMessage.dialogs.map(dialogs => <Dialog name={dialogs.name} id={dialogs.id} />);

    let ChatItem = PageMessage.chat.map(chat => <Chat text={chat.text} id={chat.id} />)

    let CreateMessage = React.createRef();

    let MessageOnchange = () => {
        let text = CreateMessage.current.value;
        props.changeTextMessage(text);
    };
    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                {DialogItems}
            </div>
            <div className={s.messages}>
                {ChatItem}
            </div>
            <div className={s.text}>
                <div>
                    <textarea onChange={MessageOnchange} ref={CreateMessage} value={PageMessage.newMessage} />
                </div>
                <div>
                    <button onClick={props.sendNewMessage}>SEND</button>
                </div>
            </div >
        </div >

    )
}

export default Message;
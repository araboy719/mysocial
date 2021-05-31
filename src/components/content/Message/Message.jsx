import React from 'react';
import Chat from './Chat/Chat';
import Dialog from './Dialogs/Dialogs';
import s from './Message.module.css';


const Message = (props) => {
    let DialogItems = props.dialogs.map(dialogs => <Dialog name={dialogs.name} id={dialogs.id} />);

    let ChatItem = props.chat.map(chat => <Chat text={chat.text} id={chat.id} />)

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
                    <textarea onChange={MessageOnchange} ref={CreateMessage} value={props.newTextMessage} />
                </div>
                <div>
                    <button onClick={props.sendNewMessage}>SEND</button>
                </div>
            </div >
        </div >

    )
}

export default Message;
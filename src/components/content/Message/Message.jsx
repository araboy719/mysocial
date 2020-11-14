import React from 'react';
import Chat from './Chat/Chat';
import Dialog from './Dialogs/Dialogs';
import s from './Message.module.css';


const Message = (props) => {

    let DialogItems = props.MessageData.dialogs.map(dialogs => <Dialog name={dialogs.name} id={dialogs.id} />);

    let ChatItem = props.MessageData.chat.map(chat => <Chat text={chat.text} id={chat.id} />)

    let CreateMessage = React.createRef();

    let SendMessage = () => {

        props.AddMessage();
    }
    let MessageOnchange = () => {
        let text = CreateMessage.current.value;

        props.UpdateNewMessage(text);
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
                    <textarea onChange={MessageOnchange} ref={CreateMessage} value={props.MessageData.newMessage} />
                </div>
                <div>
                    <button onClick={SendMessage}>SEND</button>
                </div>
            </div >
        </div >

    )
}

export default Message;
import React from 'react';
import Chat from './Chat/Chat';
import Dialog from './Dialogs/Dialogs';
import s from './Message.module.css';


const Message = (props) => {
console.log(props)
    let DialogItems = props.dialog.map(dialog => <Dialog name={dialog.name} id={dialog.id} />);
    
    let ChatItem = props.chat.map(chat => <Chat text={chat.text} id={chat.id} />)
    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                {DialogItems}
            </div>
            <div className={s.messages}>
                {ChatItem}
            </div>
        </div>

    )
}

export default Message;
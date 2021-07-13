import React from 'react';
import Chat from './Chat/Chat';
import Dialog from './Dialogs/Dialogs';
import s from './Message.module.css';
import MessageReduxForm from './MessageForm';


const Message = (props) => {
    const onSubmit =(formData) => {
        props.SendMessage(formData.messageBody)
    }

    let PageMessage = props.PageMessage;
    let DialogItems = PageMessage.dialogs.map(dialogs => <Dialog name={dialogs.name} id={dialogs.id} />);

    let ChatItem = PageMessage.chat.map(chat => <Chat text={chat.text} id={chat.id} />)
    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                {DialogItems}
            </div>
            <div className={s.messages}>
                {ChatItem}
            </div>
            <div className={s.text}>
                <MessageReduxForm onSubmit={onSubmit} />
            </div >
        </div >
    )
}
export default Message;
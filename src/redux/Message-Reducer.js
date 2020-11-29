import Message from "../components/content/Message/Message";

const SEND_MESSAGE = 'SEND-MESSEGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
    dialogs: [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Artur' },
      { id: 3, name: 'Ira' },
      { id: 4, name: 'Zohan' },
      { id: 5, name: 'Kolya' },
      { id: 6, name: 'Tima' },
      { id: 7, name: 'Sasha' },
      { id: 8, name: 'Ara' },],
    chat: [
      { id: 1, text: "Hi" },
      { id: 2, text: "HAllo" },
      { id: 3, text: "My Name it is Jony" },
      { id: 4, text: "How are you" },
      { id: 5, text: "Hi" },
      { id: 6, text: "Yo" },
    ],
    newMessage: '',
  };


const MessageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let NewMessage = {
                id: 7,
                text: state.newMessage,
            };

            state.chat.push(NewMessage);
            state.newMessage = '';

            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessage = action.NewText;

            return state;

        default: return state;
    }
}

export let SendMessageActionCreator = () => ({type:SEND_MESSAGE});


export let UpdateNewMessageTextActionCreator = (text) => ({type:UPDATE_NEW_MESSAGE_TEXT, NewText: text});

export default MessageReducer;
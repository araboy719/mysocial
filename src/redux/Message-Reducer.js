const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const initialState = {
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
}


const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_MESSAGE:
            let textBody = state.newMessage
            return{
                ...state,
                newMessage: "",
                chat: [...state.chat, {id: 6, text: textBody}],
            }
        case UPDATE_NEW_MESSAGE:
            return({
                ...state,
                newMessage: action.newText
            })        
        default:
            return state;
    }
}

export const SendMessageActionCreator = () => {
    return { type: 'ADD-MESSAGE' }
}

export const updateTextMessageActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-MESSAGE',
        newText: text,
    }
}

export default messageReducer;
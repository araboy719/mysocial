const ADD_MESSAGE = 'ADD_MESSAGE';

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
            return{
                ...state,
                chat: [...state.chat, {id: 6, text: action.message}],
            }     
        default:
            return state;
    }
}

export const SendMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        message    
    }
}

export default messageReducer;
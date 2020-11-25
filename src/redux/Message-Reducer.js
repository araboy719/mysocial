const messageReducer = (state, action) => {

    if (action.type === 'ADD-MESSAGE') {
        let NewMessage = {
            id: 7,
            text: state.newMessage,
        };

        state.chat.push(NewMessage);
        state.newMessage = '';
    } else if (action.type === 'UPDATE-NEW-MESSAGE') {
        state.newMessage = (action.newText);
    }
    return state;

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
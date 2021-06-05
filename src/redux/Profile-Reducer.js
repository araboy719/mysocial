const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        { id: 1, message: "Hi it is my first post" },
        { id: 2, message: "i am study React" },
        { id: 3, message: "Now i am use 'props'" },
    ],
    newPostText: ''

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            let postTextBody = state.newPostText;
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, { id: 6, message: postTextBody }]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.NewText
            }
        }
        default:
            return state;
    }

}

export const AddPostAclionCreator = () => {
    return {
        type: 'ADD-POST',
    }
}
export const changePostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        NewText: text,
    }
}
export default profileReducer;
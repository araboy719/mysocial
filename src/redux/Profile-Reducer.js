const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_PROFILE = 'SET_PROFILE' 

const initialState = {
    posts: [
        { id: 1, message: "Hi it is my first post" },
        { id: 2, message: "i am study React" },
        { id: 3, message: "Now i am use 'props'" },
    ],
    newPostText: '',
    profile: null,
    isPreloader: false,

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
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }

}

export const addNewPost = () => {
    return {
        type: ADD_POST,
    }
}
export const updateNewPostText = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text,
    }
}
export const setProfile = (profile) => {
    return {
        type: SET_PROFILE,
        profile,
    }
}
export default profileReducer;
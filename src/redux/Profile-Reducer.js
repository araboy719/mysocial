import { userAPI } from "./axios/requestApi";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_PROFILE = 'SET_PROFILE';
const SET_PRELOADER = 'SET_PRELOADER';

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
                posts: [...state.posts, { id: 6, message: postTextBody }],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            }
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_PRELOADER: {
            return {
                ...state,
                isPreloader: action.status
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

export const setPreloader = (status) => {
    return{
        type: SET_PRELOADER,
        status
    }
}

export const setCurrentUserPage = (userID) => {
    return (dispatch) => {
        dispatch(setPreloader(true));
        userAPI.setCurrentUserPage(userID).then(response => {
            dispatch(setProfile(response.data));
            dispatch(setPreloader(false))
        });

    }
} 


export default profileReducer;
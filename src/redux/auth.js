import {currentUserData } from "./axios/requestApi";

const SET_CURRENT_USER = 'SET_CURRENT_USER';

const initialState = {
    usersProfile: null,
    loged: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CURRENT_USER: {
            return {
                
                ...state,
                usersProfile: action.currentProfile,
                loged: true,
            }
        }
        default:
            return state;
    }

}

export const setCurrentProfile = (currentProfile) => {
    return {
        type: SET_CURRENT_USER,
        currentProfile
    }
}

export const setCurrentUser = () => {
    
    return (dispatch) => {
        currentUserData.authMe().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setCurrentProfile(response.data.data));
            }
        });
    }
}

export default authReducer;
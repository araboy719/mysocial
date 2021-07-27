import { stopSubmit } from "redux-form";
import { currentUserData } from "./axios/requestApi";

const SET_CURRENT_USER = 'SET_CURRENT_USER';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CURRENT_USER: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }

}

export const setCurrentProfile = (userId, login, email, isAuth) => {
    return {
        type: SET_CURRENT_USER,
        payload: { userId, email, login, isAuth }
    };
}

export const setCurrentUser = () => (dispatch) => {
    return currentUserData.authMe().then(response => {
        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data
            dispatch(setCurrentProfile(id, login, email, true));
        }
    });
}

export const login = (email, password, rememberMe, isAuth) => (dispatch) => {
    currentUserData.login(email, password, rememberMe)
    
        .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setCurrentUser())
        } else {
            let message = response.data.messages && response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error';
            dispatch(stopSubmit('login', { _error: message }))
        }
    });
}

export const logOut = () => (dispatch) => {
    debugger
    currentUserData.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setCurrentProfile(null, null, null, false))
            }
        });
}


export default authReducer;
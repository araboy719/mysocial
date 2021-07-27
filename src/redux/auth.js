import { currentUserData } from "./axios/requestApi";

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

export const setCurrentUser = () => (dispatch) => {
        currentUserData.authMe().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setCurrentProfile(response.data.data));
            }
        });
    }

    export const login = (email, password, rememberMe) => (dispatch) => {
        currentUserData.login(email, password, rememberMe)
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    dispatch(setCurrentUser())
                }
            });
    }

export default authReducer;
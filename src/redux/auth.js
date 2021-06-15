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

export default authReducer;
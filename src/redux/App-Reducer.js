import { setCurrentUser } from "./auth";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state;
    }

}

export const initializedSuccses = () => ({ type: SET_INITIALIZED});

export const initializeApp = () =>  (dispatch) => {
    let promise = dispatch(setCurrentUser());
    // let promise = dispatch(setCurrentUser);
    // let promise = dispatch(setCurrentUser);
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccses())
    })
    
}

export default appReducer;
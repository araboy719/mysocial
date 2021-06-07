const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

const initialState = {
    users: [],

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userID){
                        return {...u, follow: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state, 
                users: state.users.map( u => {
                    if(u.id === action.userID){
                        return {...u, follow: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return{ ...state,
                users:[ ...state.users, ...action.usersList]
            }
        }
        default:
            return state;
    }

}

export const FollowAC = (idUser) => {
    return {
        type: FOLLOW,
        userID: idUser
    }
}
export const UnfollowAC = (idUser) => {
    return {
        type: UNFOLLOW,
        userID: idUser
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        usersList: users
    }
}

export default usersReducer;
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage : 1,


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
                users:[...action.usersList]
            }
        }
        case SET_CURRENT_PAGE: {
            return{ ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            debugger
            return{ ...state,
                totalUsersCount: action.totalCount
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
export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}
export const setTotalCountAC = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: totalUsersCount
    }
}

export default usersReducer;
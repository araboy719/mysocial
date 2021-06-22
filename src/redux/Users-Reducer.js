const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGGLE_IS_FEATCHING = 'TOOGGLE_IS_FEATCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isPreloader: false,
    followingInprogress: false

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map( u => {
                    
                    if(u.id === action.userID){
                        return {...u, followed: true}
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
                        return {...u, followed: false}
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
            return{ ...state,
                totalUsersCount: action.totalCount
            }
        }
        case TOOGGLE_IS_FEATCHING: {
            return{ ...state,
                isPreloader: action.isPrloader
            }
        }
        case FOLLOWING_IN_PROGRESS: {
            return{ ...state,
                followingInprogress: action.followingProgress
            }
        }
        default:
            return state;
    }

}

export const follow = (idUser) => {
    return {
        type: FOLLOW,
        userID: idUser
    }
}
export const unfollow = (idUser) => {
    return {
        type: UNFOLLOW,
        userID: idUser
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        usersList: users
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}
export const setTotalCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: totalUsersCount
    }
}
export const setPreloader = (isPrloader) => {
    return {
        type: TOOGGLE_IS_FEATCHING,
        isPrloader
    }
}
export const setFollowingInprogress = (followingProgress) => {
    return {
        type: FOLLOWING_IN_PROGRESS,
        followingProgress
    }
}
export default usersReducer;
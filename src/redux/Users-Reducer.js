import { userAPI } from "./axios/requestApi";

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
    followingInprogress: []

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {

                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {

                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.usersList]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case TOOGGLE_IS_FEATCHING: {
            return {
                ...state,
                isPreloader: action.isPrloader
            }
        }
        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInprogress: action.followingProgress ?
                    [...state.followingInprogress, action.userID] :
                    [...state.followingInprogress.filter(id => id !== action.userID)]
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
export const setFollowingInprogress = (followingProgress, userID) => {
    return {
        type: FOLLOWING_IN_PROGRESS,
        followingProgress,
        userID
    }
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setPreloader(true));
        dispatch(setCurrentPage(currentPage));
        userAPI.setNewUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
            dispatch(setPreloader(false));
        });
    }
}

export const followThunk = (userID) => {
    return (dispatch) => {
        dispatch(setFollowingInprogress(true, userID));
        userAPI.follow(userID).then(
            response => {
                if (response.data.resultCode === 0) {
                    dispatch(follow(userID))
                }
                dispatch(setFollowingInprogress(false, userID));
            }
        )
    }
}

export const unfollowThunk = (userID) => {
    return (dispatch) => {
        dispatch(setFollowingInprogress(true, userID));
        userAPI.unfollow(userID).then(
            response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollow(userID))
                }
                dispatch(setFollowingInprogress(false, userID));
            }
        )
    }
}
export default usersReducer;
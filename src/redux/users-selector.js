import {createSelector} from 'reselect';


const getUsers = (state) => {
    return state.PageUsers.users
}

export const getUsersSelector = createSelector(getUsers, (users) => {
    return users;
})

export const getPageSize = (state) => {
    return state.PageUsers.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.PageUsers.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.PageUsers.currentPage
}

export const getIsPreloader = (state) => {
    return state.PageUsers.isPreloader
}

export const getFollowingInprogress = (state) => {
    return state.PageUsers.followingInprogress
}

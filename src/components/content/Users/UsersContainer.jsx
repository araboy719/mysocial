import { connect } from 'react-redux';
import {FollowAC, UnfollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC } from '../../../redux/Users-Reducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.PageUsers.users,
        pageSize: state.PageUsers.pageSize,
        totalUsersCount: state.PageUsers.totalUsersCount,
        currentPage: state.PageUsers.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followUsers: (idUser) => {
            dispatch(FollowAC(idUser));
        },
        unfollowUsers: (idUser) => {
            dispatch(UnfollowAC(idUser));
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) =>{
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalCount:(totalCount) => {
            dispatch(setTotalCountAC(totalCount));
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
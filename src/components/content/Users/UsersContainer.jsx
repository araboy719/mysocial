import React from 'react';
import { connect } from 'react-redux';
import { FollowAC, UnfollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC, changeIsPreloaderAC } from '../../../redux/Users-Reducer';
import Users from './Users';
import * as axios from 'axios';

class UsersContainerAPI extends React.Component {

    componentDidMount() {
        this.props.setPreloader(true);
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=" + this.props.currentPage + "&count=" + this.props.pageSize + "").then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
            this.props.setPreloader(false)
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setPreloader(true);
        this.props.setCurrentPage(pageNumber);
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=" + pageNumber + "&count=" + this.props.pageSize + "")
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setPreloader(false);
            });
    }

    render() {
        return <Users   onPageChanged = {this.onPageChanged}
        totalUsersCount = {this.props.totalUsersCount}
        pageSize ={this.props.pageSize}
        currentPage = {this.props.currentPage}
        users = {this.props.users}
        unfollowUsers = {this.props.unfollowUsers}
        followUsers = {this.props.followUsers}
        isPreloader = {this.props.isPreloader} />
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.PageUsers.users,
        pageSize: state.PageUsers.pageSize,
        totalUsersCount: state.PageUsers.totalUsersCount,
        currentPage: state.PageUsers.currentPage,
        isPreloader: state.PageUsers.isPreloader,
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
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount));
        },
        setPreloader: (isPreloader) => {
            dispatch(changeIsPreloaderAC(isPreloader));
        } 
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)

export default UsersContainer;
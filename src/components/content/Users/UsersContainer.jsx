import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { followThunk, unfollowThunk, setUsers, setCurrentPage, setTotalCount, getUsersThunkCreator } from '../../../redux/Users-Reducer';
import Users from './Users';

class UsersConteiner extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }
    render() {
        return <Users   onPageChanged = {this.onPageChanged}
        totalUsersCount = {this.props.totalUsersCount}
        pageSize ={this.props.pageSize}
        currentPage = {this.props.currentPage}
        users = {this.props.users}
        isPreloader = {this.props.isPreloader}
        followingInProgress = {this.props.followingInProgress}
        unfollowThunk = {this.props.unfollowThunk}
        followThunk = {this.props.followThunk}
        />
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.PageUsers.users,
        pageSize: state.PageUsers.pageSize,
        totalUsersCount: state.PageUsers.totalUsersCount,
        currentPage: state.PageUsers.currentPage,
        isPreloader: state.PageUsers.isPreloader,
        followingInProgress: state.PageUsers.followingInprogress
    }
}

let mapDispatchToProps = {
        setUsers,
        setCurrentPage,
        setTotalCount,
        getUsersThunkCreator,
        followThunk,
        unfollowThunk,
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(UsersConteiner);
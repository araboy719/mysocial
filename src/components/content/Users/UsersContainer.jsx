import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalCount, setPreloader, setFollowingInprogress } from '../../../redux/Users-Reducer';
import Users from './Users';
import { setNewUsers } from 'redux/axios/requestApi';

class UsersContainerAPI extends React.Component {

    componentDidMount() {
        this.props.setPreloader(true);
        setNewUsers().then(data => {
        this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount);
            this.props.setPreloader(false)
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setPreloader(true);
        this.props.setCurrentPage(pageNumber);
        setNewUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
                this.props.setPreloader(false);
            });
    }
    render() {
        return <Users   onPageChanged = {this.onPageChanged}
        totalUsersCount = {this.props.totalUsersCount}
        pageSize ={this.props.pageSize}
        currentPage = {this.props.currentPage}
        users = {this.props.users}
        unfollowUsers = {this.props.unfollow}
        followUsers = {this.props.follow}
        isPreloader = {this.props.isPreloader}
        setFollowingInprogress = {this.props.setFollowingInprogress}
        followingInProgress = {this.props.followingInProgress}

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
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalCount,
        setPreloader,
        setFollowingInprogress,
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)

export default UsersContainer;
import { connect } from 'react-redux';
import {FollowAC, UnfollowAC, setUsersAC } from '../../../redux/Users-Reducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.PageUsers.users
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
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
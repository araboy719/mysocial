import React from 'react';
import { connect } from 'react-redux';
import { addNewPost, updateNewPostText, setCurrentUserPage } from '../../../redux/Profile-Reducer';
import Profile from './Profile';
import { withRouter } from 'react-router';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if(!userID){ userID = 17696; }
        this.props.setCurrentUserPage(userID);
    }
    render() {
        return( <Profile {...this.props} />)
    }
}


let mapStateToProps = (state) => {

    return {
        profile: state.PageProfile.profile,
        isAuth: state.authData.loged,
        posts: state.PageProfile.posts,
        newPostText: state.PageProfile.newPostText,
    }
}
export default compose(
    connect(mapStateToProps, { updateNewPostText, addNewPost, setCurrentUserPage }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

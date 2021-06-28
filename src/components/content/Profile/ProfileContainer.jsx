import React from 'react';
import { connect } from 'react-redux';
import { addNewPost, updateNewPostText, setCurrentUserPage } from '../../../redux/Profile-Reducer';
import Profile from './Profile';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        
        let userID = this.props.match.params.userID;
        if(!userID){
            userID = 17696;
        }
        this.props.setCurrentUserPage(userID);
    }

    render() {
        return( <Profile {...this.props} />)
    }
}


let mapStateToProps = (state) => {

    return {
        PageProfile: state.PageProfile
    }
}

let ProfileComponentWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, { updateNewPostText, addNewPost, setCurrentUserPage })(ProfileComponentWithRouter)

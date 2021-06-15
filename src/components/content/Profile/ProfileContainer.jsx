import React from 'react';
import { connect } from 'react-redux';
import { addNewPost, updateNewPostText, setProfile } from '../../../redux/Profile-Reducer';
import Profile from './Profile';
import * as axios from 'axios';
import { withRouter } from 'react-router';

class ProfileClass extends React.Component {
    componentDidMount() {
        
        let UserID = this.props.match.params.userID
        // this.props.setPreloader(true);
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/"+UserID).then(response => {
            this.props.setProfile(response.data);
            // this.props.setPreloader(false)
        });
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

let ProfileComponentWithRouter = withRouter(ProfileClass);

const ProfileContainer = connect(mapStateToProps, { updateNewPostText, addNewPost, setProfile })(ProfileComponentWithRouter)

export default ProfileContainer;
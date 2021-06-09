import React from 'react';
import { connect } from 'react-redux';
import { addNewPost, updateNewPostText, setProfile } from '../../../redux/Profile-Reducer';
import Profile from './Profile';
import * as axios from 'axios';

class ProfileClass extends React.Component {
    
    componentDidMount() {
        
        // this.props.setPreloader(true);
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/2").then(response => {
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

const ProfileContainer = connect(mapStateToProps, { updateNewPostText, addNewPost, setProfile })(ProfileClass)

export default ProfileContainer;
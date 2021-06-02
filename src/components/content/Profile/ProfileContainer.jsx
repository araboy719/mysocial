import { connect } from 'react-redux';
import { AddPostAclionCreator, changePostTextActionCreator } from '../../../redux/Profile-Reducer';
import Profile from './Profile';

let mapStateToProps = (state) => {
    return {
        PageProfile: state.PageProfile
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(changePostTextActionCreator(text));
        },
        addNewPost: () => {
            dispatch(AddPostAclionCreator());
        }
    }
}


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;
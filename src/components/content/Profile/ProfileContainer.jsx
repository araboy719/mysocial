import React from 'react';
import { AddPostAclionCreator, changePostTextActionCreator } from '../../../redux/Profile-Reducer';
import Profile from './Profile';


const ProfileContainer = (props) => {

    let AddPost = () => {
        props.store.dispatch(AddPostAclionCreator())
    }
    let ChangePostText = (text) => {
        let action = changePostTextActionCreator(text);
        props.store.dispatch(action);
    }

    let newPostText = props.store.getState().PageProfile.newPostText
    let posts = props.store.getState().PageProfile.posts
    return <Profile updateNewPostText={ChangePostText} addNewPost={AddPost} newPostText={newPostText} posts={posts} />

}

export default ProfileContainer;
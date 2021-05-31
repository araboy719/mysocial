import React from 'react';
import { AddPostAclionCreator, changePostTextActionCreator } from '../../../redux/Profile-Reducer';
import StoreContext from '../../../StoreContext';
import Profile from './Profile';


const ProfileContainer = () => {
    return (
        <StoreContext.Consumer>
            { (store) => {

                let AddPost = () => {
                    store.dispatch(AddPostAclionCreator())
                }
                let ChangePostText = (text) => {
                    let action = changePostTextActionCreator(text);
                    store.dispatch(action);
                }
                return <Profile
                    updateNewPostText={ChangePostText}
                    addNewPost={AddPost}
                    newPostText={store.getState().PageProfile.newPostText}
                    posts={store.getState().PageProfile.posts} />
            }
        }
        </StoreContext.Consumer>
    )
}

export default ProfileContainer;
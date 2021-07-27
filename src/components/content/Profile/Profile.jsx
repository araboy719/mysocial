import React from 'react';
import Posts from './Posts/Posts';
import s from './Profile.module.css';
import ProfileStatus from './ProfileInfo/ProfileStatusHook';
import Preloader from '../../common/preloader/Preloader';
import avatar from '../../../assets/img/avatar.jpg'
import PostReduxForm from './PostForm';


const Profile = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    let onSubmit = (formData) => {
        props.addNewPost(formData.newPostBody);
    }

    return (
        
        <div className={s.content}>
            <img alt="avatar" src={props.profile.photos.large ? props.profile.photos.large : avatar }></img>
            <ProfileStatus status={props.status} updateStatus={props.setStatusCarrentUser}/>
            <PostReduxForm onSubmit = {onSubmit} />
            <Posts posts={props.posts} profileImage={props.profile.photos.large ? props.profile.photos.large : avatar } />
        </div>

    )
}

export default Profile;
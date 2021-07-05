import React from 'react';
import Posts from './Posts/Posts';
import s from './Profile.module.css';
import ProfileStatus from './ProfileInfo/ProfileStatus';
import Preloader from '../../common/preloader/Preloader';
import avatar from '../../../assets/img/avatar.jpg'


const Profile = (props) => {
    
    if(!props.profile){
        return <Preloader />
    }
    let newPost = React.createRef();

    let ChangePostText = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);
    }

    return (
        
        <div className={s.content}>
            <img alt="avatar" src={props.profile.photos.large ? props.profile.photos.large : avatar }></img>
            <ProfileStatus profile={props.profile} status="test:"/>
            <div>
                <textarea ref={newPost} onChange={ChangePostText} value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={props.addNewPost}>Add New Post</button>
            </div>
            
            <Posts posts={props.posts} profileImage={props.profile.photos.large ? props.profile.photos.large : avatar } />
        </div>

    )
}

export default Profile;
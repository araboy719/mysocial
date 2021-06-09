import React from 'react';
import Posts from './Posts/Posts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from '../../common/preloader/Preloader';


const Profile = (props) => {
    if(!props.PageProfile.profile){
        return <Preloader />
    }
    let newPost = React.createRef();

    let ChangePostText = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);
    }

    return (
        
        <div className={s.content}>
            <ProfileInfo profile={props.PageProfile.profile}/>
            <div>
                <textarea ref={newPost} onChange={ChangePostText} value={props.PageProfile.newPostText}></textarea>
            </div>
            <div>
                <button onClick={props.addNewPost}>Add New Post</button>
            </div>
            <Posts posts={props.PageProfile.posts} />
        </div>

    )
}

export default Profile;
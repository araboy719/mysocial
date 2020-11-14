import React from 'react';
import Posts from './Posts/Posts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {


    let newPost = React.createRef();

    let AddPost = () => {
        
    props.AddPost();
    }

    let ChangePostText = () => {
        let text = newPost.current.value;
        
        props.UpdateNewPostText(text);
    }

    return (
        <div className={s.content}>
            <ProfileInfo />
            <div>
                <textarea ref={newPost} onChange = {ChangePostText} value={props.ProfileData.newPostText}></textarea>
            </div>
            <div>
                <button onClick={AddPost}>Add New Post</button>
            </div>
            <Posts posts={props.ProfileData.posts} />

        </div>

    )
}

export default Profile;
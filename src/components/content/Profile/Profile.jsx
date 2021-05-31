import React from 'react';
import Posts from './Posts/Posts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    let newPost = React.createRef();

    let ChangePostText = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.content}>
            <ProfileInfo />
            <div>
                <textarea ref={newPost} onChange={ChangePostText} value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={props.addNewPost}>Add New Post</button>
            </div>
            <Posts posts={props.posts} />
        </div>

    )
}

export default Profile;
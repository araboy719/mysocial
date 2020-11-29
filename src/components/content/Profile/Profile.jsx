import React from 'react';
import AddPost from './AddPost.jsx/AddPost';
import Posts from './Posts/Posts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <AddPost dispatch={props.dispatch} posts={props.ProfileData} />
            <Posts posts={props.ProfileData.posts} />

        </div>

    )
}

export default Profile;
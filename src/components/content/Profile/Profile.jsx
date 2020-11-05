import React from 'react';
import Posts from './Posts/Posts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyAE980jhBnzMXKUK3IM5uMTNr98mmyfOIrQ&usqp=CAU"></img>
            </div>
            <Posts />

        </div>

    )
}

export default Profile;
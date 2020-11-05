import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = () => {
    return (
        <div className={s.posts}>
            <Post messege = "Hi it is my first post" />
            <Post messege = "i am study React" />
        </div>
    )
}

export default Posts;
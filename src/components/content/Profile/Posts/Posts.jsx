import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';
const Posts = (props) => {

    let PostItem = props.posts.map(posts =><Post message ={posts.message} id={posts.id} profile={props.profile} />)
    return (
        <div className={s.posts}>
            {PostItem}
        </div>
    )
}

export default Posts;
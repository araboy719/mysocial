import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className= {s.post}>
            <img alt="avatar" src={props.profileImage}></img>
            
            <div> { props.message } </div>
        </div>
    )
}

export default Post;
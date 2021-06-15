import React from 'react';
import s from './Post.module.css';
import avatar from '../../../../../assets/img/avatar.jpg'

const Post = (props) => {
    return (
        <div className= {s.post}>
            <img src={props.profile.photos.small ? props.profile.photos.small : avatar }></img>
            
            <div> { props.message } </div>
        </div>
    )
}

export default Post;
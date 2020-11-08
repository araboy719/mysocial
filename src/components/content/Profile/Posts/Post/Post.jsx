import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className= {s.post}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyAE980jhBnzMXKUK3IM5uMTNr98mmyfOIrQ&usqp=CAU"></img>
            
            <div> { props.message } </div>
        </div>
    )
}

export default Post;
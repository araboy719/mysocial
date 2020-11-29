import React from 'react';
import s from '.././Profile.module.css';

const AddPost = (props) => {

    let newPost = React.createRef();

    let AddPost = () => {

        props.dispatch({ type: 'ADD-POST' });
    }

    let ChangePostText = () => {
        let text = newPost.current.value;

        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', NewText: text });
    }

    return (
        <div>
            <div>
                <textarea ref={newPost} onChange={ChangePostText} value={props.posts.newPostText}></textarea>
            </div>
            <div>
                <button onClick={AddPost}>Add New Post</button>
            </div>

        </div>

    )
}

export default AddPost;
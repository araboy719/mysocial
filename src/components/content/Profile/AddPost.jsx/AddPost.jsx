import React from 'react';
import { AddPostActionCreator, UpdateNewPostTextActionCreator } from '../../../../redux/Profile-Reducer';



const AddPost = (props) => {

    let newPost = React.createRef();

    let AddPost = () => {

        props.dispatch(AddPostActionCreator());
    }

    let ChangePostText = () => {
        let text = newPost.current.value;

        props.dispatch(UpdateNewPostTextActionCreator(text));
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
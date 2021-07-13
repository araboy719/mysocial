import React from 'react';
import { Field, reduxForm } from 'redux-form';

const PostForm = (props) => {
    return (
        <form onSubmit= {props.handleSubmit} >
            <div>
                <Field component="input" type="text" name="newPostBody" placeholder="Message..." />
            </div>
            <div>
                <button>SEND</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({ form: "posts"})(PostForm);

export default PostReduxForm;
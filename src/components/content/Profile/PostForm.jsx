import { Textarea } from 'components/common/FormsControls/FormsControls';
import { maxLength, required } from 'components/common/FormsControls/validate';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const maxLength10 =  maxLength(10);

const PostForm = (props) => {
    return (
        <form onSubmit= {props.handleSubmit} >
            <div>
                <Field component={Textarea} type="text" name="newPostBody" placeholder="Message..." validate={[ required, maxLength10]} />
            </div>
            <div>
                <button>SEND</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({ form: "posts"})(PostForm);

export default PostReduxForm;
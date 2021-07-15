import { Textarea } from 'components/common/forms/FormsControls';
import { maxLengthCreator, requiredField } from 'halpers/validators';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const maxLength10 =  maxLengthCreator(10);

const PostForm = (props) => {
    return (
        <form onSubmit= {props.handleSubmit} >
            <div>
                <Field component={Textarea} type="text" name="newPostBody" placeholder="Message..." validate={[ requiredField, maxLength10 ]} />
            </div>
            <div>
                <button>SEND</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({ form: "posts"})(PostForm);

export default PostReduxForm;
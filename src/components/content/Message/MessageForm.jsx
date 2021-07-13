import React from 'react';
import { Field, reduxForm } from 'redux-form';

const MessageForm = (props) => {
    return (
        <form onSubmit= {props.handleSubmit} >
            <div>
                <Field component="textarea" type="text" name="messageBody" placeholder="Message..." />
            </div>
            <div>
                <button>SEND</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({ form: "message"})(MessageForm);

export default MessageReduxForm;
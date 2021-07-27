import { Textarea } from 'components/common/FormsControls/FormsControls';
import { maxLength, required } from 'components/common/FormsControls/validate';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const maxLength35 =  maxLength(35);

const MessageForm = (props) => {
    return (
        <form onSubmit= {props.handleSubmit} >
            <div>
                <Field component={Textarea} type="text" name="messageBody" placeholder="Message..." validate={[ required, maxLength35]} />
            </div>
            <div>
                <button>SEND</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({ form: "message"})(MessageForm);

export default MessageReduxForm;
import { Textarea } from 'components/common/forms/FormsControls';
import { required } from 'components/common/forms/validate';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const MessageForm = (props) => {
    return (
        <form onSubmit= {props.handleSubmit} >
            <div>
                <Field component={Textarea} type="text" name="messageBody" placeholder="Message..." validate={required} />
            </div>
            <div>
                <button>SEND</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({ form: "message"})(MessageForm);

export default MessageReduxForm;
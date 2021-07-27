import { Input } from 'components/common/FormsControls/FormsControls';
import { required } from 'components/common/FormsControls/validate';
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { login, logOut } from 'redux/auth';
import s from './Login.module.css';
import formStyle from '../../common/FormsControls/FormStyle.module.css';


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    const logoutSubmit = () => {
        props.logOut();
    }
    return (
        <div className={s.content}>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
            <button onClick={() => logoutSubmit()}>logout</button>
        </div >

    )
}
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} type="text" name="email" placeholder="login" validate={[required]} />
            </div>
            <div>
                <Field component={Input} type="password" name="password" placeholder="password" validate={[required]} />
            </div>
            <div>
                <Field component={Input} type="checkbox" name="rememberMe" />
            </div>
            {props.error &&
                <div className={formStyle.formSummaryError}>
                    <p>{props.error}</p>
                </div>
            }
            <button>Login</button>
        </form>
    )
}
const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)


export default connect(null, { login, logOut })(Login);
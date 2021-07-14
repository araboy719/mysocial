import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { loginUser } from 'redux/auth';
import s from './Login.module.css';


const Login = (props) => {
    
    const onSubmit =(formData) => {
        loginUser(formData.login, formData.password, formData.rememberMe)
    }
    return (
        <div className={s.content}>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div >

    )
}
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="input" type="text" name="login" placeholder="login" />
            </div>
            <div>
                <Field component="input" type="password" name="password" placeholder="password" />
            </div>
            <div>
                <Field component="input" type="checkbox" name="rememberMe" />
            </div>
            <button>Login</button>
        </form>
    )
}
const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

export default Login;
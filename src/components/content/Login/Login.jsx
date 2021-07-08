import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Login.module.css';


const Login = (props) => {
    return (
        <div className={s.content}>
            <h1>Login</h1>
<LoginForm />
        </div >

    )
}
const LoginForm = () => {
    return (
        <form >
            <input/>
        </form>
    )
}

export default reduxForm({

    form: 'login'
})(Login)
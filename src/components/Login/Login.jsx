import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {loginThunk} from '../../redux/authReduser';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

let LoginForm=(props)=>{
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="email" component="input" type="e-mail" placeholder='e-mail'/>
            </div>
            <div>
                <Field name="password" component="input" type="text"  placeholder='password'/>
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox" />remember me
            </div>
            <button>Login</button>
        </form>
}

LoginForm = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm)

const Login=(props)=>{
    let submit = formData => {
        // print the form values to the console
        console.log(formData)
        props.loginThunk(formData.email,formData.password,formData.rememberMe)
    }
    if (props.isAutorised) return <Redirect to='/profile'/>
    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={submit}/>
    </div>
}

let mapStateToProps=(state)=>{
    return{
        isAutorised:state.auth.isAutorised
    }
}

export default connect(mapStateToProps,{loginThunk})(Login)
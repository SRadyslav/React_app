import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../Common/FormsControls/FormsControls";
import s from "../Common/FormsControls/FormsControls.module.css"

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to="/profile" />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", null, Input, {type:"checkbox"}, "Remember me")}
            {error && <div className={s.formSummaryError} >
                {error}
            </div>}
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps,{login})(Login);
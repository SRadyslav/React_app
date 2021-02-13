import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import { LoginFormValuesType, LoginReduxForm } from "./LoginForm";


type PropsType = {}

export const Login: React.FC<PropsType> = (props) => {
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state:AppStateType) => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }
    if(isAuth){
        return <Redirect to="/profile" />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
        </div>
    )
}





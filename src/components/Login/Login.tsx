import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { InjectedFormProps, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import { required } from "../../utils/validators/validators";
import { createField, Input} from "../Common/FormsControls/FormsControls";
import s from "../Common/FormsControls/FormsControls.module.css"

type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}
type MapDispatchPropsType = {
    login: (email:string,password:string, rememberMe: boolean, captcha: string ) => void
}

type LoginFormOwnPropsType = {captchaUrl: string | null }
type PropsType = MapDispatchPropsType & MapStatePropsType
export type LoginFormValuesType = {
    email:string
    password:string
    rememberMe: boolean
    captcha: string
}
type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType,string>


const Login: React.FC<PropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if(props.isAuth){
        return <Redirect to="/profile" />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
        </div>
    )
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}
            {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type: "password"})}
            {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, {type: "checkbox"}, "Remember me")}

        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [required], Input)}

            {error && <div className={s.formSummaryError} >
                {error}
            </div>}
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({ form: 'login' })(LoginForm)

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps,{login})(Login);

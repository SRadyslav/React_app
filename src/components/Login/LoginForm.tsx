import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { createField, GetStringKeys, Input } from "../Common/FormsControls/FormsControls";
import s from "../Common/FormsControls/FormsControls.module.css";


const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}
            {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, { type: "password" })}
            {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, { type: "checkbox" }, "Remember me")}

            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [required], Input)}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Sign in</button>
            </div>
        </form>
    );
};
export const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({ form: 'login' })(LoginForm)


type LoginFormOwnPropsType = { captchaUrl: string | null; }
export type LoginFormValuesType = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string;
}
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

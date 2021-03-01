import React from "react";
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";
import { FieldValidatorType } from "../../../utils/validators/validators";
import s from "./FormsControls.module.css"


type FormControlPropsType = {
    meta: WrappedFieldMetaProps,
    //children: React.ReactNode
}



const FormControl: React.FC<FormControlPropsType> = ({ meta: {touched, error}, children }) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")} >
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, /*child,*/ ...restProps } = props;
    return (<FormControl {...props} > <textarea {...restProps}  {...input} /> </FormControl>)
}
export const Input: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, /*child,*/ ...restProps } = props;
    return (<FormControl {...props} > <input {...restProps}  {...input} /> </FormControl>)
}


export function createField<FormKeysType extends string>(placeholder:string | undefined,
        name: FormKeysType, validate:Array<FieldValidatorType>,
        component: React.FC<WrappedFieldProps> , props = {}, text = "") {
return <div>
    <Field placeholder={placeholder} name={name}
        component={component} validate={validate}
        {...props} /> {text} 
</div>}

export type GetStringKeys<T> = Extract<keyof T, string> 

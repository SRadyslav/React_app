import React from "react";
import { InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { createField, Textarea } from "../../Common/FormsControls/FormsControls";
import {NewMessageFormType} from "../Dialogs"


const maxLength50 = maxLengthCreator(50);

export const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormType, PropsType> & PropsType> = (props) => {
    return(
        <form  onSubmit={props.handleSubmit}  >
            {createField<NewMessageFormTypeKeys>("Enter your message", "newMessageText", [required, maxLength50], Textarea)}
                <button >Send</button>
        </form>
    )
}

export default reduxForm<NewMessageFormType>({form:'dialogAddMessageForm'})(AddMessageForm);


type NewMessageFormTypeKeys = Extract<keyof NewMessageFormType, string>
type PropsType = {}
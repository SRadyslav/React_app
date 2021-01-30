import React from "react";
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../Common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

export const AddMessageForm = (props) => {
    return(
        <form  onSubmit={props.handleSubmit}  >
            <Field component={Textarea} validate={[required, maxLength50]} name={"newMessageText"} placeholder={"Enter your message"} />
                <button >Send</button>
        </form>
    )
}

export default reduxForm({form:'dialogAddMessageForm'})(AddMessageForm);
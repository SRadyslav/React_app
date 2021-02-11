import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators/validators';
import { createField, GetStringKeys, Textarea } from '../../Common/FormsControls/FormsControls';
import { maxLength1000 } from './myPosts';


const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, OwnPropsType> & OwnPropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
            {createField<AddPostFormValuesTypeKeys>("Enter your post text", "newPostText", [required, maxLength1000], Textarea)}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};
export const AddPostReduxForm = reduxForm<AddPostFormValuesType, OwnPropsType>({ form: "profileAddPostForm" })(AddPostForm)

export type AddPostFormValuesType = {newPostText: string}
type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>
type OwnPropsType = {}


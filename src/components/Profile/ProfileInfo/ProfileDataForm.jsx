import { reduxForm } from "redux-form"
import { createField, Input, Textarea } from "../../Common/FormsControls/FormsControls"
import s from './ProfileInfo.module.css';
import style from "../../Common/FormsControls/FormsControls.module.css"

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    debugger
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <b>Full name:</b> {createField("FullName", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job:</b> {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
            </div>
            <div>
                <b>My professional skills:</b> {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>
                <b>About me:</b> {createField("About me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                    return <div className={s.contacts} key={key} >
                        <b>{key}:</b> {createField(key, "contacts." + key, [], Input)}
                    </div>
                })}
            </div>
            {error && <div className={style.formSummaryError} >
                {error}
            </div>}
            <div><button>Save</button></div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm
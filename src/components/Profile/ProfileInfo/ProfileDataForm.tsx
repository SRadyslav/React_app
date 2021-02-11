import { InjectedFormProps, reduxForm } from "redux-form"
import { createField, GetStringKeys, Input, Textarea } from "../../Common/FormsControls/FormsControls"
import s from './ProfileInfo.module.css';
import style from "../../Common/FormsControls/FormsControls.module.css"
import { ProfileType } from "../../../utils/types";


const ProfileDataForm:React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <b>Full name:</b> {createField<ProfileTypeKeys>("FullName", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job:</b> {createField<ProfileTypeKeys>("", "lookingForAJob", [], Input, { type: "checkbox" })}
            </div>
            <div>
                <b>My professional skills:</b> {createField<ProfileTypeKeys>("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>
                <b>About me:</b> {createField<ProfileTypeKeys>("About me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                    return <div className={s.contacts} key={key} >
                        {/* ### todo: create some solution for embedded objects */}
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

export default reduxForm<ProfileType, PropsType>({ form: 'edit-profile' })(ProfileDataForm)


type PropsType = {profile: ProfileType}
type ProfileTypeKeys = GetStringKeys<ProfileType>
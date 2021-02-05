import React, { useState } from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from "../../../assets/images/userPhoto.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import ProfileDataForm from './ProfileDataForm';


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(()=>{
        setEditMode(false)});
    }

    return (
        <div className={s.profileInfo}>
            <div>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
                {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
            </div>

            <div className={s.descriptionBlock}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => { setEditMode(true) }} />}
            </div>
        </div>
    );
}


const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>

            <div>
                <b>Full name:</b> {profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills:</b> {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                    return <Contact contactTitle={key} contactValue={profile.contacts[key]} key={key} />
                })}
            </div>
            {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
        </div>
    )
}

export const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={s.contacts}>
            <b>{contactTitle}: {contactValue} </b>
        </div>
    )
}

export default ProfileInfo;
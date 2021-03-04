import React, { useState } from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from "../../../assets/images/userPhoto.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import ProfileDataForm from './ProfileDataForm';
//import {ProfileComponentPropsType} from '../Profile'
import { ContactsType, ProfileType } from '../../../utils/types';


//### When remove then delete this props and use ProfileComponentPropsType in ProfileInfo component
type PropsType = {
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
    updateStatus: (status: string) => void
    isOwner: boolean
    status: string
    profile: ProfileType | null
}


const ProfileInfo: React.FC<PropsType> = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData)
        //### todo: Remove Then
        .then(()=>{
        setEditMode(false)});
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.avatarDiv}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
                {isOwner && <input className={s.avatarChange} type="file" onChange={onMainPhotoSelected} />}
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

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({ profile, isOwner, goToEditMode }) => {
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
                    return <Contact contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]} key={key} />   //about keys 11th video 1:22:00
                })}
            </div>
            {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
        </div>
    )
}

type ContactsPopsType = {
    contactValue: string
    contactTitle: string
}
export const Contact: React.FC<ContactsPopsType> = ({ contactTitle, contactValue }) => {
    return (
        <div className={s.contacts}>
            <b>{contactTitle}: {contactValue} </b>
        </div>
    )
}

export default ProfileInfo;
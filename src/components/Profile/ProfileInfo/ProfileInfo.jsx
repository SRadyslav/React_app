import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from "../../../assets/images/userPhoto.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.profileInfo}>
            <div>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
                {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
            </div>
            <div className={s.descriptionBlock}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            description
        </div>
        </div>
    );
}

export default ProfileInfo;
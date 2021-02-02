import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"


const ProfileInfo = ({ profile, status, updateStatus }) => {
    if (!profile) {
        return <Preloader />
    }
    else return (
        <div className={s.profileInfo}>
            <div>
                <img src={profile.photos.large} />
            </div>
            <div className={s.descriptionBlock}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            description
        </div>
        </div>
    );
}

export default ProfileInfo;
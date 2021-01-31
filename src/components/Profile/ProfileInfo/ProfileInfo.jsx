import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    else return (
        <div className={s.profileInfo}>
            <div>
            <img src={props.profile.photos.large} />
            </div>
            <div className={s.descriptionBlock}>
                <ProfileStatusWithHooks status={props.status} updateStatus ={props.updateStatus} />
            description
        </div>
        </div>
    );
}

export default ProfileInfo;
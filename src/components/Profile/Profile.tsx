import React from 'react';
import { ProfileType } from '../../utils/types';
import MyPostsContainer from './myPosts/myPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


export type ProfileComponentPropsType = {
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
    updateStatus: (status: string) => void
    isOwner: boolean
    status: string
    profile: ProfileType | null
} 

const Profile: React.FC<ProfileComponentPropsType> = (props) => {
    return (
        <div className={s.profilePage}>
            <ProfileInfo saveProfile={props.saveProfile} isOwner={props.isOwner} 
            profile={props.profile} status={props.status} 
            updateStatus={props.updateStatus} 
            savePhoto={props.savePhoto} />
            <div className="myPosts">
                <MyPostsContainer  />
            </div>
        </div>
    );
}

export default Profile;

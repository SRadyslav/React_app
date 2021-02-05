import React from 'react';
import MyPostsContainer from './myPosts/myPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
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

import React from 'react';
import MyPostsContainer from './myPosts/myPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
    return (
        <div className={s.profilePage}>
            <ProfileInfo  profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <div className="myPosts">
            <MyPostsContainer />
            </div>
        </div>
    );
}

export default Profile;

import React from 'react';
import MyPostsContainer from './myPosts/myPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = () => {
    return (
        <div className={s.profilePage}>
            <ProfileInfo />
            <div className="myPosts">
            <MyPostsContainer />
            </div>
        </div>
    );
}

export default Profile;

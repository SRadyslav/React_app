import React from 'react';
import MyPostsContainer from './myPosts/myPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
    return (
        <div className={s.profilePage}>
            <ProfileInfo />
            <MyPostsContainer className={s.myPosts} />
        </div>
    );
}

export default Profile;

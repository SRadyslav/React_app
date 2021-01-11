import React from 'react';
import MyPosts from './myPosts/myPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
    return (
        <div className={s.profilePage}>
            <ProfileInfo />
            <MyPosts className={s.myPosts} posts={props.profilePage.posts} 
            dispatch={props.dispatch} 
            newPostText={props.profilePage.newPostText}  
            />
        </div>
    );
}

export default Profile;

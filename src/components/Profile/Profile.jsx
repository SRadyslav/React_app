import React from 'react';
import MyPosts from './myPosts/myPosts';
import s from './Profile.module.css';

const Profile = () => {
    return(
        <div>
            <div>
                <div>
                <img src='https://vjoy.cc/wp-content/uploads/2020/10/prikolnye-avatarki-vk-dlya-parnej_023.jpg' />
                description
                </div>
                <MyPosts />
            </div>
        </div>
    );
}

export default Profile;
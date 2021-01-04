import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return(
    <div className={s.profileInfo}>
        <div>
            <img src='https://vjoy.cc/wp-content/uploads/2020/10/prikolnye-avatarki-vk-dlya-parnej_023.jpg' />
        </div>
        <div className={s.descriptionBlock}>
            Ava + description
        </div>
    </div>
    );
}

export default ProfileInfo;
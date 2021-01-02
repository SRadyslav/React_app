import React from 'react';
import s from './style/Profile.module.css';

const Profile = () => {
    return(
        <div className={s.content}>
        <div>
            <img src='https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg' />
        </div>
        <div>
            <div>
            <img src='https://i.pinimg.com/originals/c8/27/78/c827782e12851cd2cf4c5161c4f5445a.jpg' />
            description
            </div>
            <div>
            posts
            <div>
                new posts
            </div>
            <div>
                post1
            </div>
            <div>
                post2
            </div>
            </div>
        </div>
        </div>
    );
}

export default Profile;
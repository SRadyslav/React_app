import React from 'react';
import s from './Settings.module.css';

const Settings = (props) => {
    return(
        <div>
            <div>
                <div>
                    <a className={s.item} href="/profileSettings" >Profile</a>
                </div>
                <div>
                <a className={s.item} href="/privacy" >Privacy</a>
                </div>
                <div>
                <a className={s.item} href="/account" >Account</a>
                </div>
            </div>
        </div>
    );
}

export default Settings;
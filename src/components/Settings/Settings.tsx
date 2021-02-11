import { type } from 'os';
import React from 'react';
import s from './Settings.module.css';

type PropsType = {}
const Settings: React.FC<PropsType> = (props) => {
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
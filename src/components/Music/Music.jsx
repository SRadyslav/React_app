import React from 'react';
import s from './Music.module.css';

const Music = (props) => {
    return(
        <div className={s.item}>
            music1
            <div>
                <span>like</span> {props.likeCount}
            </div>
        </div>
    );
}

export default Music;
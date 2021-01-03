import React from 'react';
import s from './Video.module.css';

const Video = (props) => {
    return(
        <div className={s.item}>
            Video1
            <div>
                <span>like</span> {props.likeCount}
            </div>
        </div>
    );
}

export default Video;
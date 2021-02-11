import React from 'react';
import s from './Video.module.css';

type PropsType = {
    likeCount: number
}

const Video: React.FC<PropsType> = (props) => {
    debugger
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
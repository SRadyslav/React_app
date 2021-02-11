import React from 'react';
import s from './Music.module.css';

type PropsType = {
    likeCount: number | null
}
const Music: React.FC<PropsType> = (props) => {
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
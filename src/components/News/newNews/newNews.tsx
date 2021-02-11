import React from 'react';
import s from './newNews.module.css';

type PropsType = {
    likeCount: number
    message: string
}

const NewNews: React.FC<PropsType> = (props) => {
    return(
        <div className={s.item}>
            <img src="https://vjoy.cc/wp-content/uploads/2020/10/prikolnye-avatarki-vk-dlya-parnej_023.jpg"></img>
            {props.message}
            <div>
                <span>like</span> {props.likeCount}
            </div>
        </div>
    );
}

export default NewNews;
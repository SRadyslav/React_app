import React from 'react';
import s from './newNews.module.css';

const newNews = (props) => {
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

export default newNews;
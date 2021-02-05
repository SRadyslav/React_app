import React from 'react';
import s from './Post.module.css';



//###need fix. Upload not just photo but photo from API
const Post = (props) => {
    return(
        <div className={s.item}>
            <img src="https://vjoy.cc/wp-content/uploads/2020/10/prikolnye-avatarki-vk-dlya-parnej_023.jpg"></img>
            {/*props.postPhoto*/}
            {props.message}
            <div>
                <span>like</span> {props.likeCount}
            </div>
        </div>
    );
}

export default Post;
import React from 'react';
import s from './Post.module.css';
import userPhoto from '../../../../assets/images/userPhoto.png'


type PropsType = {
    likeCount: number
    postPhoto: string | undefined
    message: string
}
const Post: React.FC<PropsType> = (props) => {
    return(
        <div className={s.item}>
            {props.postPhoto ? <img src={props.postPhoto}/> : <img src={userPhoto} />  }
            {props.message}
            <div>
                <span>like</span> {props.likeCount}
            </div>
        </div>
    );
}

export default Post;
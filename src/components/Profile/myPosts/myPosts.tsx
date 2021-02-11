import React from 'react';
import { PostsType } from '../../../utils/types';
import { maxLengthCreator } from '../../../utils/validators/validators';
import { AddPostFormValuesType, AddPostReduxForm } from './AddPostForm';
import s from './myPosts.module.css';
import Post from './Post/Post';


export const maxLength1000 = maxLengthCreator(1000);

type PropsType = {
    addPost: (newPostText: string) => void
    posts: Array<PostsType>
    postPhoto: string | undefined 
}

const MyPosts: React.FC<PropsType> = (props) => {
    
    let postsElements = props.posts
        .map(posts => <Post message={posts.message} likeCount={posts.likesCount} key={posts.id} postPhoto={props.postPhoto} />);

    const onSubmit = (formData: AddPostFormValuesType) =>{
        props.addPost(formData.newPostText);
    }

    return (
        <div className={s.myPostsBlock}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={onSubmit} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const MyPostMemorized = React.memo(MyPosts)

export default MyPostMemorized;